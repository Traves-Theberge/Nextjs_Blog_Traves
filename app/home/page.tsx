import React from 'react';
import Layout from '../../components/layout/layout';
import WelcomeAnimation from '@/components/WelcomeAnimation';

export default function HomePage() {
  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center">
        <WelcomeAnimation />
      </div>
    </Layout>
  );
}