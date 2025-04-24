import Link from 'next/link';
import { socialLinks } from '@/data/socialLink'; // Correct path

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-6 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-500 dark:text-gray-400 mb-2">
          © {new Date().getFullYear()} Victoria Muinde. All rights reserved.
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            // Alias the icon component with an uppercase starting letter
            const IconComponent = link.icon; 
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} (opens in new tab)`}
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200" // Added base color
              >
                {/* Render the aliased component */}
                <IconComponent size={24} /> {/* Adjust size as needed */}
                {/* You can optionally remove the name span if the icon is enough */}
                {/* <span className="sr-only">{link.name}</span> */} 
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
