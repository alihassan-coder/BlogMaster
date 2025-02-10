"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, type ReactNode } from "react" // Added ReactNode import
import SearchBar from "./SearchBar"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-600">
            BlogMaster
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <SearchBar />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/authors">Authors</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <SearchBar />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/authors">Authors</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  // Changed children type to ReactNode
  return (
    <Link href={href} className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300">
      {children}
    </Link>
  )
}

