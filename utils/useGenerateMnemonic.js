import { useMnemonic } from '@/store/context';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
function useGenerateMnemonic() {
    const { setSeed, setIsGenerated, setMnemonicArray } = useMnemonic();
    async function createMnemonic() {
        const mn = generateMnemonic();
        const seedval = mnemonicToSeedSync(mn);
        setSeed(seedval);
        const values = mn.split(' ');
        setMnemonicArray(values);
        setIsGenerated(true);
    }
    return { createMnemonic };
}

export { useGenerateMnemonic };
