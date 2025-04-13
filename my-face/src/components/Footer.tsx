import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6 border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-500 mb-2">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/yourusername" target="_blank">
            <span className="hover:text-purple-600">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <span className="hover:text-purple-600">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}