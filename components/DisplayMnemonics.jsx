'use client';
import { useMnemonic } from '@/store/context';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
const DisplayMnemonics = () => {
    const { mnemonicArray } = useMnemonic();
    const [show, setShow] = useState(false);
    return (
        <div className=" mt-8 p-4 w-full h-fit ">
            {mnemonicArray.length > 0 && (
                <div className="flex justify-center border-2 border-gray-200  py-4 rounded-xl flex-col items-center">
                    {mnemonicArray.length > 0 &&
                        (show ? (
                            <p
                                onClick={() => setShow(!show)}
                                className=" cursor-pointer mb-4 hover:animate-none flex items-end animate-bounce font-medium text-xl  "
                            >
                                Close Mnemonic <ChevronUp className="" />
                            </p>
                        ) : (
                            <p
                                onClick={() => setShow(!show)}
                                className="mb-2 cursor-pointer hover:animate-none flex items-end animate-bounce   font-medium text-xl"
                            >
                                Show Mnemonic <ChevronDown className="" />
                            </p>
                        ))}
                    <div className="grid grid-cols-4 gap-2 w-[50%]">
                        {mnemonicArray.length !== 0 &&
                            show &&
                            mnemonicArray.map((x) => (
                                <p
                                    className="bg-gray-200 font-medium rounded-md px-2 py-0.5 flex items-center justify-center "
                                    key={x}
                                >
                                    {x}
                                </p>
                            ))}
                    </div>
                </div>
            )}{' '}
        </div>
    );
};

export default DisplayMnemonics;
