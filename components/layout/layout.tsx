"use client";

import React, { useEffect, useState } from "react";
import { Header } from "../nav/header";
import { Footer } from "../nav/footer";
import { useTheme } from "next-themes";
import { useTina } from "tinacms/dist/react";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`flex flex-col min-h-screen ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;