'use client';
import { Keypair } from '@solana/web3.js';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import bs58 from 'bs58';
import { useState } from 'react';
import nacl from 'tweetnacl';
const CreateMn = () => {
    const [a, setA] = useState([]);
    const [num, setNum] = useState(0);
    const [seed, setSeed] = useState(null);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState([]);
    const [open, setOpen] = useState(false);
    function getSolanakeypair(seed, accountNum) {
        const path = `m/44'/501'/${accountNum}'/0'`;
        const derived = derivePath(path, seed.toString('hex')).key;
        const secret = nacl.sign.keyPair.fromSeed(derived).secretKey;
        const val = Keypair.fromSecretKey(secret);
        const publicK = val.publicKey.toBase58();
        const privateK = bs58.encode(val.secretKey);
        setValues([
            ...values,
            { id: num, publicKey: publicK, privateKey: privateK }
        ]);
        setNum(num + 1);
        return;
    }
    async function createxyz() {
        try {
            setLoading(true);
            const mn = generateMnemonic();
            const seed = mnemonicToSeedSync(mn);
            setSeed(seed);
            const values = mn.split(' ');
            setA(values);
            getSolanakeypair(seed, 0);
        } catch (error) {
            console.log('error');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-800"
                    onClick={createxyz}
                >
                    Genearte Mnemonic
                </button>
                {a.length > 0 && (
                    <button
                        className="px-4 rounded-lg py-2 bg-blue-300 hover:bg-blue-500"
                        onClick={() => getSolanakeypair(seed, num)}
                    >
                        Genearte New Pair
                    </button>
                )}
            </div>
            <div className="flex flex-col">
                {a.length > 0 && (
                    <h1 className="text-xl font-bold">The Mnemonic is :</h1>
                )}
                <div className="flex flex-row gap-2">
                    {a.length !== 0 &&
                        !loading &&
                        a.map((x) => (
                            <p
                                className="bg-green-200 rounded-md px-2 py-0.5 flex items-center justify-center "
                                key={x}
                            >
                                {x}
                            </p>
                        ))}
                </div>
            </div>
            <div className="flex flex-col">
                {values.length > 0 && (
                    <h1 className="text-xl font-bold">The key pair is :</h1>
                )}
                <div className="flex flex-col gap-2">
                    {values.length !== 0 &&
                        values.map((x) => (
                            <div className="flex flex-col gap-2 border border-black">
                                <p className="text-center">
                                    {' '}
                                    Key Number: {x.id + 1}
                                </p>
                                <p
                                    className="bg-blue-200 rounded-md px-2 py-0.5 flex items-center justify-center "
                                    key={x.id}
                                >
                                    PublicKey: {x.publicKey}
                                </p>
                                <p
                                    className="bg-amber-200 rounded-md px-2 py-0.5 flex items-center justify-center "
                                    key={x}
                                    onClick={() => setOpen(!open)}
                                >
                                    PrivateKey:
                                    {open ? (
                                        <span>{x.privateKey}</span>
                                    ) : (
                                        <span>* * * * * * *</span>
                                    )}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CreateMn;
