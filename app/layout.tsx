import "../styles.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans, Lato, Nunito } from "next/font/google";
import { cn } from "../lib/utils";
import { Metadata } from "next";
import client from "../tina/__generated__/client";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Traves Theberge Blog",
  description: "Blog about my journey towards becoming a software developer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalQuery = await client.queries.global({
    relativePath: "index.json",
  });
  const global = globalQuery.data.global;

  const selectFont = (fontName: string) => {
    switch (fontName) {
      case "nunito":
        return `font-nunito ${nunito.variable}`;
      case "lato":
        return `font-lato ${lato.variable}`;
      case "sans":
      default:
        return `font-sans ${fontSans.variable} `;
    }
  };
  const fontVariable = selectFont(global.theme.font);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var mode = localStorage.getItem('theme');
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (!mode && supportDarkMode)  document.documentElement.classList.add('dark');
                if (!mode) return;
                document.documentElement.classList.add(mode);
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300",
          fontVariable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}