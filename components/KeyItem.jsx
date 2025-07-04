import { useState } from 'react';

const KeyItem = ({ x }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`
        ${x.type === 'sol' ? 'bg-purple-100' : 'bg-gray-100'}
        w-full p-6 rounded-xl shadow-md flex flex-col space-y-4 mb-6
        transition-shadow duration-200 hover:shadow-lg
      `}
        >
            {/* Address */}
            <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                    Address
                </h3>
                <p className="break-words font-mono text-gray-900 text-base select-text">
                    {x.address}
                </p>
            </div>

            {/* Private Key with toggle */}
            <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1 flex items-center justify-between">
                    Private Key
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-xs text-blue-600 hover:text-blue-800 focus:outline-none"
                        aria-label={
                            open ? 'Hide private key' : 'Show private key'
                        }
                    >
                        {open ? 'Hide' : 'Show'}
                    </button>
                </h3>
                <p
                    className={`break-words font-mono text-red-700 text-base select-text ${
                        !open ? 'blur-sm select-none' : ''
                    }`}
                    style={{ userSelect: open ? 'text' : 'none' }}
                >
                    {open
                        ? x.privateKey
                        : '••••••••••••••••••••••••••••••••••••••••••'}
                </p>
            </div>

            {/* Balance */}
            <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                    Balance
                </h3>
                <p className="font-mono text-green-700 text-lg font-semibold select-text">
                    {x.balance}
                </p>
            </div>
        </div>
    );
};

export default KeyItem;
