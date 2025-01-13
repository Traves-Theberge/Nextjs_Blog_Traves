"use client";

import React, { useState, useContext, createContext, ReactNode } from "react";

interface GlobalSettings {
  siteTitle: string;
  siteDescription?: string;
  siteUrl?: string;
  favicon?: string;
  mainNav?: {
    name: string;
    href: string;
  }[];
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}

interface LayoutState {
  globalSettings: GlobalSettings;
  setGlobalSettings: (settings: GlobalSettings) => void;
}

const defaultGlobalSettings: GlobalSettings = {
  siteTitle: "Portfolio & Blog",
  siteDescription: "Personal portfolio and blog website",
  mainNav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" }
  ]
};

const LayoutContext = createContext<LayoutState | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(defaultGlobalSettings);

  return (
    <LayoutContext.Provider value={{ globalSettings, setGlobalSettings }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
