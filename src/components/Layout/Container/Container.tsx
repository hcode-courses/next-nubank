'use client';

import { useState } from 'react';
import { Navbar } from '..';
import { Header } from '../Header';

type ContainerProps = React.PropsWithChildren;

export function Container({ children }: ContainerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col md:flex-row relative">
      <Navbar opened={opened} setOpened={setOpened} />
      <Header setOpened={setOpened} />
      <main className="h-screen max-w-[1600px] md:pl-[300px] w-full mx-auto">{children}</main>
    </div>
  );
}
