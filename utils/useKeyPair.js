import { useMnemonic } from '@/store/context';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';
function useKeyPair() {
    const { setKeys, count, setCount } = useMnemonic();
    function createKeys(seed) {
        const path = `m/44'/501'/${count}'/0'`;
        console.log(seed);
        const derived = derivePath(path, seed.toString('hex')).key;
        const secret = nacl.sign.keyPair.fromSeed(derived).secretKey;
        const val = Keypair.fromSecretKey(secret);
        const publicK = val.publicKey.toBase58();
        const privateK = bs58.encode(val.secretKey);
        setKeys([
            ...values,
            { id: publicK.slice(0, 4), address: publicK, privateKey: privateK }
        ]);
        setCount(count + 1);
    }
    return { createKeys };
}

export { useKeyPair };
