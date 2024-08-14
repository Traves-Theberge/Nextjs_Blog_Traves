"use client";

import React from 'react';
import Layout from '../../components/layout/layout';
import { useTheme } from 'next-themes';

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <Layout>
      <div className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      </div>
    </Layout>
  );
}