import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-blue-400"
        >
          MyWebsite
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="font-medium text-gray-300 transition hover:text-white"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="font-medium text-gray-300 transition hover:text-white"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="font-medium text-gray-300 transition hover:text-white"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

