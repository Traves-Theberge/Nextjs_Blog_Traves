"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const MainMenu = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`relative py-2 px-1 text-sm font-medium transition-colors
                ${
                  pathname === href
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              onMouseEnter={() => setHoveredPath(href)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {label}
              {(pathname === href || hoveredPath === href) && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 dark:bg-blue-400"
                  layoutId="underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
