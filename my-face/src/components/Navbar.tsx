// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  // Base classes for nav links
  const navLinkBaseClasses = "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-300 transition-colors duration-200";
  // Active classes (only for the main '/' link in this simple version)
  const activeLinkClasses = "font-semibold text-purple-600 dark:text-purple-400"; // Example active style

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          // Apply active style only if pathname is exactly '/'
          className={`text-xl font-bold ${
            pathname === '/'
              ? 'text-purple-600 dark:text-purple-400' // Active home style
              : 'text-gray-700 dark:text-gray-400' // Inactive home style
          } hover:opacity-80 transition-opacity`} // Added hover effect
        >
          Victoria Muinde
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="#about" className={navLinkBaseClasses}>
            About
          </Link>
          <Link href="#projects" className={navLinkBaseClasses}>
            Projects
          </Link>
          {/* Added Contact link */}
          <Link href="#contact" className={navLinkBaseClasses}>
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
