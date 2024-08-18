"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const dropdownRef = useRef(null);
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className={`w-full transition-colors duration-300 ease-in-out ${resolvedTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <Link href="https://registry.jsonresume.org/Traves-Theberge" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-blue-500 transition-colors duration-200">
          Traves Theberge
        </Link>
        <nav className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`hover:text-gray-300 transition-colors duration-200 ${pathname === item.href ? 'font-bold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.829z" />
                </svg>
              ) : (
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden fixed top-[60px] left-0 right-0 z-50 shadow-md ${
          resolvedTheme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
        }`}>
          <nav className="flex flex-col items-center py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                passHref
              >
                <span className={`w-full text-center py-3 block hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ${pathname === item.href ? 'font-bold' : ''}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};