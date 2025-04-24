// src/components/layout.tsx
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type LayoutProps = {
    children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <a
                href="#main" // Fix: Correct attribute name
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3 focus:m-3 focus:bg-white focus:dark:bg-gray-800 focus:text-purple-600 focus:dark:text-purple-400 focus:border focus:border-purple-600 focus:rounded" // Fix: Correct attribute name + added focus styles
            >
                Skip to content
            </a>
            <main id="main" className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
