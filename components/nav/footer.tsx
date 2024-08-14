import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <footer className={`p-4 ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="flex justify-center">
        <Link 
          href="https://github.com/your-github-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-2xl ${resolvedTheme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};