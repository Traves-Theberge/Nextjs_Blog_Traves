"use client";

import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/layout';
import { useTheme } from 'next-themes';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      <div className={`${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`}>
        {/* Your about page content */}
      </div>
    </Layout>
  );
}