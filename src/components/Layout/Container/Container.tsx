'use client';

import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import { ModalsContainer, Navbar, TransactionModal } from '..';
import { Header } from '../Header';

type ContainerProps = React.PropsWithChildren;

export function Container({ children }: ContainerProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    registerLocale('ptBR', ptBR);
  }, []);

  return (
    <div className="flex flex-col md:flex-row relative">
      <Navbar opened={opened} setOpened={setOpened} />
      <Header setOpened={setOpened} />
      <main className="max-w-[1600px] md:pl-[300px] w-full mx-auto">{children}</main>
      <ModalsContainer>
        <TransactionModal />
      </ModalsContainer>
    </div>
  );
}
