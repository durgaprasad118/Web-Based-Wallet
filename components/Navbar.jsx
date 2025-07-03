'use client';
import { useGenerateMnemonic } from '@/utils/useGenerateMnemonic';
import { Button } from './ui/button';
import { useMnemonic } from '@/store/context';
import { useKeyPair } from '@/utils/useKeyPair';
const Navbar = () => {
    const { createMnemonic } = useGenerateMnemonic();
    const { createKeys } = useKeyPair();
    const {
        setKeys,
        seed,
        setSeed,
        isGenerated,
        setIsGenerated,
        setMnemonicArray
    } = useMnemonic();
    function RemoveHandler() {
        setIsGenerated(false);
        setMnemonicArray([]);
        setSeed(null);
        setKeys([]);
    }
    async function CreateKeyandMn() {
        await createMnemonic();
        createKeys(seed);
    }
    return (
        <nav className="flex w-full h-10 py-4 justify-between px-20">
            <h1 className="font-bold text-xl">Web Wallet</h1>
            {isGenerated ? (
                <Button onClick={RemoveHandler} variant="outline">
                    Delete Mnemonic
                </Button>
            ) : (
                <Button onClick={CreateKeyandMn} variant="outline">
                    Create Mnemonic
                </Button>
            )}
        </nav>
    );
};

export default Navbar;
