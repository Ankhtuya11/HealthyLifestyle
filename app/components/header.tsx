"use client"
import React,{useState} from 'react'
import { ModeToggle } from './modeToggle'
import Link from 'next/link'
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
  return (
   <header className="p-4 mb-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">CYD</span> Website
          </div>
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? "X" :"Menu"}
            </button>
          </div>
          {menuOpen && (
            <nav className="mt-4 sm:hidden">
              {/* Add your dropdown links here */}
              <ModeToggle/>
              <Link href="/" className="block py-2 px-4  hover:bg-gray-700 transition duration-300">Home</Link>
              <Link href="/about" className="block py-2 px-4  hover:bg-gray-700 transition duration-300">About</Link>
              <Link href="/service" className="block py-2 px-4  hover:bg-gray-700 transition duration-300">Services</Link>
              <Link href="/contact" className="block py-2 px-4  hover:bg-gray-700 transition duration-300">Contact</Link>
            </nav>
          )}
          <nav className="mt-6 sm:mt-0 hidden sm:flex flex-col sm:flex-row sm:space-x-8">
            <ModeToggle/>
            <Link href="/" className="hover:text-gray-300 transition duration-300 mt-1 text-xl">Home</Link>
            <Link href="/about" className="hover:text-gray-300 transition duration-300 mt-1 text-xl">About</Link>
            <Link href="/service" className="hover:text-gray-300 transition duration-300 mt-1 text-xl">Services</Link>
            <Link href="/contact" className="hover:text-gray-300 transition duration-300 mt-1 text-xl">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
