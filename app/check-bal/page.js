'use client';
import { getBalance } from '@/utils/getBalance';
import { useState } from 'react';
import { toast } from 'sonner';

const CheckBal = () => {
    const [val, setVal] = useState('');
    const [type, setType] = useState('sol');
    const [balance, setBalance] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function clearEverything() {
        setLoading(false);
        setVal('');
        setBalance('');
        setError('');
    }
    async function clickHandler() {
        if (!val) {
            toast.info('No address found');
            return;
        }
        setLoading(true);
        setError('');
        setBalance('');
        try {
            const value = await getBalance(type, val);
            setBalance(value);
        } catch (err) {
            console.log(err);
            toast.error('Invalid address');
            setError('Invalid address');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-full w-full flex flex-col mt-10 items-center">
            <h1 className="text-xl font-bold">Check balance</h1>
            <div className="flex w-full items-baseline justify-center gap-x-2">
                <select
                    className="px-4 py-2 rounded-md border-2 border-gray-300 bg-white focus:outline-none focus:border-gray-500"
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                        setError('');
                    }}
                    disabled={loading}
                >
                    <option value="sol">SOL</option>
                    <option value="eth">ETH</option>
                </select>
                <input
                    className="px-4 py-2 rounded-md hover:border-gray-400 outline-none w-1/2 mt-2 border-2 border-gray-300"
                    value={val}
                    onChange={(e) => {
                        setVal(e.target.value);
                        setError('');
                    }}
                    disabled={loading}
                />
                {balance !== '' && balance !== null && balance !== undefined ? (
                    <button
                        className="cursor-pointer py-2 rounded-md px-4 hover:bg-gray-300 border-2 border-gray-300 bg-gray-200"
                        onClick={clearEverything}
                    >
                        Clear
                    </button>
                ) : (
                    <button
                        className="cursor-pointer py-2 rounded-md px-4 hover:bg-gray-300 border-2 border-gray-300 bg-gray-200"
                        onClick={clickHandler}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Get Bal'}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
            {balance !== '' && balance !== null && balance !== undefined && (
                <div
                    className={`
                        ${type === 'sol' ? 'bg-purple-100' : 'bg-gray-100'}
                        w-1/2 p-6 rounded-xl mt-4 shadow-md flex flex-col space-y-4 mb-6
                        transition-shadow duration-200 hover:shadow-lg
                    `}
                >
                    <div>
                        <h3 className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Address
                        </h3>
                        <p className="break-words font-mono text-gray-900 text-base select-text">
                            {val}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Balance
                        </h3>
                        <p className="font-mono text-green-700 text-lg font-semibold select-text">
                            {loading ? 'Fetching...' : balance}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckBal;
