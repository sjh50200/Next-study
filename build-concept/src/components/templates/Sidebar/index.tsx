import React from 'react';

export const SidebarLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <main className="main-container">{children}</main>
    </>
  );
}

export default SidebarLayout;