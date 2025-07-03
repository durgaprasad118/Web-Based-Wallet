'use client';
import { useGenerateMnemonic } from '@/utils/useGenerateMnemonic';
import { Button } from './ui/button';
import { useMnemonic } from '@/store/context';
const Navbar = () => {
    const { createMnemonic } = useGenerateMnemonic();
    const { setKeys, setSeed, isGenerated, setIsGenerated, setMnemonicArray } =
        useMnemonic();
    function RemoveHandler() {
        setIsGenerated(false);
        setMnemonicArray([]);
        setSeed(null);
        setKeys([]);
    }
    async function CreateKeyandMn() {
        await createMnemonic();
    }
    return (
        <nav className="flex w-full h-10 py-4 justify-between px-20">
            <h1 className="font-bold text-xl">Web Wallet</h1>
            {isGenerated ? (
                <Button
                    onClick={RemoveHandler}
                    className="bg-red-500 hover:bg-red-600 border-2 border-red-500 text-white cursor-pointer"
                >
                    Delete Mnemonic
                </Button>
            ) : (
                <Button
                    onClick={CreateKeyandMn}
                    className="bg-blue-500 hover:bg-blue-600 border-2 border-blue-500 text-white cursor-pointer"
                >
                    Create Mnemonic
                </Button>
            )}
        </nav>
    );
};

export default Navbar;
