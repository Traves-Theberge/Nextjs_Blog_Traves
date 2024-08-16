"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className={`py-2 transition-colors duration-300 ease-in-out ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex justify-center items-center">
        <Link 
          href="https://github.com/Traves-Theberge/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-xl ${resolvedTheme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};