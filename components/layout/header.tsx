import React from "react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "../theme-switcher";

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Your Site Name</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};