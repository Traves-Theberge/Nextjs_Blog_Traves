import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="flex justify-center">
        <Link 
          href="https://github.com/your-github-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-600"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};