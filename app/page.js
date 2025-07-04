'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar.jsx';
import { MnemonicProvider } from '@/store/context.js';
import DisplayMnemonics from '@/components/DisplayMnemonics.jsx';
import DisplayKeys from '@/components/DisplayKeys.jsx';
export default function Home() {
    useEffect(() => {
        localStorage.setItem('isMnemonicGenerated', false);
    }, []);
    return (
        <div className="h-[100vh] w-full flex flex-col items-center p-2">
            <div className="w-3/4">
                <MnemonicProvider>
                    <Navbar />
                    <DisplayMnemonics />
                    <DisplayKeys />
                </MnemonicProvider>
            </div>
        </div>
    );
}
