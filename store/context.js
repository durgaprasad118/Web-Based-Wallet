'use client';
import React, { createContext, useContext, useState } from 'react';
const MnemonicContext = createContext();
export function MnemonicProvider({ children }) {
    const [isGenerated, setIsGenerated] = useState(false);
    const [mnemonicArray, setMnemonicArray] = useState([]);
    const [keys, setKeys] = useState([]);
    const [seed, setSeed] = useState(null);
    const [count, setCount] = useState(0);
    const [ethCount, setethCount] = useState(0);
    const value = {
        isGenerated,
        setIsGenerated,
        mnemonicArray,
        setMnemonicArray,
        keys,
        setKeys,
        seed,
        setSeed,
        count,
        setCount,
        ethCount,
        setethCount
    };

    return (
        <MnemonicContext.Provider value={value}>
            {children}
        </MnemonicContext.Provider>
    );
}

export function useMnemonic() {
    const context = useContext(MnemonicContext);
    if (!context) {
        throw new Error('useMnemonic must be used within a MnemonicProvider');
    }
    return context;
}
