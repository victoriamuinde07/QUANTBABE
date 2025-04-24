// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  // Base classes for nav links
  const navLinkBaseClasses = "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-200";
  // Removed unused activeLinkClasses variable

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl font-bold ${
            pathname === '/'
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-gray-700 dark:text-gray-400'
          } hover:opacity-80 transition-opacity`}
        >
          Victoria Muinde
        </Link>
        <div className="flex gap-4 items-center">
          {/* Added About link back for consistency */}
          <Link href="#about" className={navLinkBaseClasses}>
            About
          </Link>
          <Link href="#projects" className={navLinkBaseClasses}>
            Projects
          </Link>
          <Link href="#contact" className={navLinkBaseClasses}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
