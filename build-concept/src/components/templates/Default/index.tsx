import React from 'react';
import Navbar from '@/components/Navbar';

export const DefaultLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
    </>
  );
}

export default DefaultLayout