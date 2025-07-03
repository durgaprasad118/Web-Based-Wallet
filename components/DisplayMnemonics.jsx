'use client';
import { useMnemonic } from '@/store/context';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
const DisplayMnemonics = () => {
    const { mnemonicArray } = useMnemonic();
    const [show, setShow] = useState(false);
    return (
        <div className=" mt-8 p-2 w-full h-fit ">
            <div className="flex justify-center bg-cyan-100 py-4 rounded-xl flex-col items-center">
                {mnemonicArray.length > 0 &&
                    (show ? (
                        <p
                            onClick={() => setShow(!show)}
                            className=" cursor-pointer hover:animate-none flex items-end animate-bounce font-medium text-xl  mb-2"
                        >
                            Close Mnemonic <ChevronUp className="" />
                        </p>
                    ) : (
                        <p
                            onClick={() => setShow(!show)}
                            className="mb-2 cursor-pinter hover:animate-none flex items-end animate-bounce   font-medium text-xl"
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
        </div>
    );
};

export default DisplayMnemonics;
