'use client';
import { useMnemonic } from '@/store/context';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const DisplayMnemonics = () => {
    const { mnemonicArray } = useMnemonic();
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState(false);

    // Handler to copy mnemonic to clipboard
    const handleCopy = async () => {
        if (mnemonicArray.length === 0) return;
        const phrase = mnemonicArray.join(' ');
        try {
            await navigator.clipboard.writeText(phrase);
            setCopied(true);
            toast.success(' Copied to clipboard!'); // Optional: show toast
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            setCopied(false);
        }
    };

    return (
        <div className="mt-8 p-4 w-full h-fit">
            {mnemonicArray.length > 0 && (
                <div className="flex justify-center border-2 border-gray-200 py-4 rounded-xl flex-col items-center relative">
                    {show && (
                        <button
                            onClick={handleCopy}
                            className="absolute right-6 top-6 flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 text-sm font-medium transition"
                            title="Copy mnemonic to clipboard"
                        >
                            <Copy size={16} />
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    )}
                    {show ? (
                        <p
                            onClick={() => setShow(false)}
                            className="cursor-pointer mb-4 hover:animate-none flex items-end animate-bounce font-medium text-xl"
                        >
                            Close Mnemonic <ChevronUp />
                        </p>
                    ) : (
                        <p
                            onClick={() => setShow(true)}
                            className="mb-2 cursor-pointer hover:animate-none flex items-end animate-bounce font-medium text-xl"
                        >
                            Show Mnemonic <ChevronDown />
                        </p>
                    )}
                    <div className="grid grid-cols-4 gap-2 w-[50%]">
                        {show &&
                            mnemonicArray.map((x, i) => (
                                <p
                                    className="bg-gray-200 font-medium rounded-md px-2 py-0.5 flex items-center justify-center"
                                    key={i}
                                >
                                    {x}
                                </p>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisplayMnemonics;
