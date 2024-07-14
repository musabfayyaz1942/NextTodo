// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Todo List APP</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/Pages/Home" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/Pages/About" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-300">Posts</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
