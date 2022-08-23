import React from 'react';
import Head from 'next/head';

import { Header } from '@/components/HeaderX';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
