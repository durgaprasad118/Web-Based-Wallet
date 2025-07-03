import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata = {
    title: 'Web based Wallet',
    description: 'Genearte key pairs of eth and sol'
};

export default function RootLayout({ children }) {
    return (
        <html lang="">
            <body
                className={`h-[100vh] w-[100vw]   ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
