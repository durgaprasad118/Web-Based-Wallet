import { useKeyPair } from '@/utils/useKeyPair';
import { Button } from './ui/button';
const Choose = () => {
    const { createKeys } = useKeyPair();
    function SolKeyPair() {
        createKeys('sol');
    }
    function ethKeyPair() {
        createKeys('eth');
    }
    return (
        <div className="flex w-full justify-center">
            <div className="flex gap-2">
                <Button
                    onClick={SolKeyPair}
                    className="bg-purple-500 hover:bg-purple-600 border-2 border-purple-500 text-white cursor-pointer"
                >
                    Solana Key Pair
                </Button>
                <Button
                    onClick={ethKeyPair}
                    className="bg-gray-200 hover:bg-gray-400 border-2 border-gray-300 text-black cursor-pointer"
                >
                    Etherium Key Pair
                </Button>
            </div>
        </div>
    );
};

export default Choose;
