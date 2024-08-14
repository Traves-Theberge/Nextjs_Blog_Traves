"use client";

import React from "react";
import { Header } from "../nav/header";
import { Footer } from "../nav/footer";
import { useTheme } from "next-themes";
import { useTina } from "tinacms/dist/react";

export const Layout = ({
  rawData,
  children,
}: {
  rawData?: any;
  children: React.ReactNode;
}) => {
  const { data: tinaData } = useTina({
    query: rawData?.query,
    variables: rawData?.variables,
    data: rawData,
  }) || { data: null };

  const { resolvedTheme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${resolvedTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;