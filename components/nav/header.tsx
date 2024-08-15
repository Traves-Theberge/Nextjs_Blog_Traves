"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const dropdownRef = useRef(null);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`navbar ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">Your Logo</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/posts">Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher />
        <div className="lg:hidden relative" ref={dropdownRef}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} currentTheme={currentTheme} />}
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ setIsMenuOpen, currentTheme }) => {
  return (
    <div className={`absolute top-full right-0 w-48 mt-2 py-2 rounded-lg shadow-xl ${
      currentTheme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
    }`}>
      <ul className="menu menu-vertical w-full">
        <li><Link href="/" onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 ${
          currentTheme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
        }`}>Home</Link></li>
        <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 ${
          currentTheme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
        }`}>About</Link></li>
        <li><Link href="/posts" onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 ${
          currentTheme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
        }`}>Blog</Link></li>
      </ul>
    </div>
  );
};