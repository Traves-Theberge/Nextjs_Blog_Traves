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
    { href: "/posts", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className={`w-full transition-colors duration-300 ease-in-out ${resolvedTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="w-full px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Traves Theberge Blog</Link>
        
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <nav className="flex items-center space-x-8">
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
        </div>
        
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="lg:hidden relative ml-4" ref={dropdownRef}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className={`lg:hidden fixed top-[60px] left-0 right-0 z-50 shadow-md ${
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
          </div>
        </div>
      </div>
    </header>
  );
};