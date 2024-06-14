import React, { ReactNode } from 'react';

interface IMainComponent {
  children: ReactNode;
}

function MainLayout({ children }: IMainComponent) {
  return <main className="">{children}</main>;
}

export default MainLayout;
