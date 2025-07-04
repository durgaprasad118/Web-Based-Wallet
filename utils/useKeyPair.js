import { useMnemonic } from '@/store/context';
import { derivePath } from 'ed25519-hd-key';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import nacl from 'tweetnacl';
import { ethers } from 'ethers';
import { getBalance } from './getBalance';
function useKeyPair() {
    const {
        setKeys,
        keys,
        count,
        setCount,
        seed,
        ethCount,
        setethCount,
        mnemonicArray
    } = useMnemonic();
    function createKeys(typeArg) {
        if (typeArg == 'sol') {
            const path = `m/44'/501'/${count}'/0'`;
            const derived = derivePath(path, seed.toString('hex')).key;
            const secret = nacl.sign.keyPair.fromSeed(derived).secretKey;
            const val = Keypair.fromSecretKey(secret);
            const publicK = val.publicKey.toBase58();
            const privateK = bs58.encode(val.secretKey);
            const balance = getBalance('sol', publicK);
            setKeys([
                ...keys,
                {
                    id: publicK.slice(0, 4),
                    address: publicK,
                    privateKey: privateK,
                    balance,
                    type: typeArg
                }
            ]);
            setCount(count + 1);
        }
        if (typeArg === 'eth') {
            const path = `m/44'/60'/0'/0/${ethCount}`;
            const str = mnemonicArray.join(' ');
            const mnemonic = ethers.Mnemonic.fromPhrase(str);
            const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic, path);
            const balance = getBalance('eth', wallet.address);
            setKeys([
                ...keys,
                {
                    id: wallet.address.slice(2, 6),
                    privateKey: wallet.privateKey,
                    address: wallet.address,
                    balance,
                    type: typeArg
                }
            ]);
            setethCount(ethCount + 1);
        }
    }
    return { createKeys };
}

export { useKeyPair };
