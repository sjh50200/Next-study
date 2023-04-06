import React from 'react';
import Navbar from '@/components/Navbar';

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
    </>
  );
}
