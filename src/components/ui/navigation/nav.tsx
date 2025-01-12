"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="p-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className={cn(
              "hover:text-blue-600 dark:hover:text-blue-400",
              pathname === "/" && "text-blue-600 dark:text-blue-400"
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={cn(
              "hover:text-blue-600 dark:hover:text-blue-400",
              pathname === "/posts" && "text-blue-600 dark:text-blue-400"
            )}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
} 