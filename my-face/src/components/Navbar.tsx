'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import {usePathname} from 'next/navigation';


export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      const pathname = usePathname();
        <Link href="/" className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Victoria Muinde
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="#projects" className="hover:text-purple-500 dark:hover:text-purple-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-500 dark:hover:text-purple-300">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
