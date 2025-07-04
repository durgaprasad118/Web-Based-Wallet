import axios from 'axios';
import { ethers } from 'ethers';
async function getBalance(type, address) {
    try {
        const url =
            type === 'eth'
                ? 'https://eth-mainnet.g.alchemy.com/v2/OxiPav2ZPg2FHqnQEIOHxHX5ikqahM56'
                : 'https://solana-mainnet.g.alchemy.com/v2/OxiPav2ZPg2FHqnQEIOHxHX5ikqahM56';
        const body =
            type === 'eth'
                ? {
                      jsonrpc: '2.0',
                      id: 1,
                      method: 'eth_getBalance',
                      params: [`${address}`, 'latest']
                  }
                : {
                      jsonrpc: '2.0',
                      id: 1,
                      method: 'getBalance',
                      params: [`${address}`]
                  };
        const { data } = await axios.post(url, body);
        const answer =
            type === 'sol'
                ? data.result.value / 1e9
                : ethers.formatEther(data.result);
        return answer;
    } catch (error) {
        console.log(error);
    }
}

export { getBalance };
