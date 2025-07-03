import { useMnemonic } from '@/store/context';
import { useState } from 'react';
const DisplayKeys = () => {
    const { keys } = useMnemonic();
    const [open, setOpen] = useState(false);
    return (
        <div className=" mt-8 p-2 w-full h-fit ">
            <div className="flex justify-center bg-cyan-100 py-4 rounded-xl flex-col items-center">
                <div className="flex flex-col gap-2">
                    {keys.length !== 0 &&
                        keys.map((x) => (
                            <div className="flex flex-col gap-2 border border-black">
                                <p className="text-center">
                                    {' '}
                                    Key Number: {x.id + 1}
                                </p>
                                <p
                                    className="bg-blue-200 rounded-md px-2 py-0.5 flex items-center justify-center "
                                    key={x.id}
                                >
                                    PublicKey: {x.address}
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

export default DisplayKeys;
