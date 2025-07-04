'use server';
import { NextResponse } from 'next/server';
import axios from 'axios';
import { ethers } from 'ethers';

export async function POST(req) {
    try {
        const { type, address } = await req.json();
        const url =
            type === 'eth'
                ? process.env.ALCHEMY_ETH_URL
                : process.env.ALCHEMY_SOL_URL;
        const body =
            type === 'eth'
                ? {
                      jsonrpc: '2.0',
                      id: 1,
                      method: 'eth_getBalance',
                      params: [address, 'latest']
                  }
                : {
                      jsonrpc: '2.0',
                      id: 1,
                      method: 'getBalance',
                      params: [address]
                  };
        const { data } = await axios.post(url, body);
        const answer =
            type === 'sol'
                ? data.result.value / 1e9
                : ethers.formatEther(data.result);
        return NextResponse.json({ balance: answer });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch balance' },
            { status: 500 }
        );
    }
}
