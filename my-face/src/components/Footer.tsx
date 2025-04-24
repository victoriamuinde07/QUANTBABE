import Link from 'next/link';
import { socialLinks } from '@/data/socialLink';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-6 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-500 dark:text-gray-400 mb-2">
          © {new Date().getFullYear()} Victoria Muinde. All rights reserved.
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} (opens in new tab)`}
              className="hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}