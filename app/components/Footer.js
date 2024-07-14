// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} My Next.js Site. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-300">
            Posts
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
