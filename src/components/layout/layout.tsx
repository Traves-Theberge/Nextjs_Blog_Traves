"use client";

import React, { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useTheme } from "next-themes";
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/ui/common/LoadingSpinner';
import { CustomCursor } from '../ui/common/CustomCursor'

const Background3D = dynamic(() => import('@/components/ui/animations/Background3D'), { 
  ssr: false,
  loading: () => <LoadingSpinner />
});

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative flex flex-col min-h-screen">
      <CustomCursor />
      <Navigation />
      <div id="background-container" className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 z-10" />
        <Background3D />
      </div>
      <div className="relative flex flex-col min-h-screen z-10">
        <main className="flex-1 w-full max-w-[1920px] mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}