'use client';

import {
  IconCoin,
  IconGraph,
  IconMessage,
  IconSettings,
  IconUserCircle,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCard } from '../UserCard';
import { NavItem } from './NavItem';

type NavbarProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const navBarData = [
  {
    text: 'Dashboard',
    icon: <IconGraph />,
    link: '/',
  },
  {
    text: 'Conta',
    icon: <IconUserCircle />,
    link: '/account',
  },
  {
    text: 'Transações',
    icon: <IconCoin />,
    link: '/transactions',
  },
  {
    text: 'Chat Online',
    icon: <IconMessage />,
    link: '/chat',
  },
  {
    text: 'Configurações',
    icon: <IconSettings />,
    link: '/settings',
  },
];

export function Navbar({ opened, setOpened }: NavbarProps) {
  const path = usePathname();

  return (
    <nav
      className={`flex flex-col shadow-xl justify-between bg-primary w-[300px] py-20 fixed h-screen text-white z-[9] ${
        opened ? 'left-[0]' : 'left-[-300px]'
      } md:left-0 z-5`}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 left-8"
          cursor="pointer"
          onClick={() => {
            setOpened(false);
          }}
        />
        <div className="mb-28">
          <UserCard />
        </div>

        <div>
          {navBarData.map((item) => (
            <NavItem
              key={item.link}
              active={path}
              link={item.link}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center p-4 text-sm">
        <Image className="mb-4" src="/nubank_logo.svg" alt="Avatar" width={70} height={70} />
        <div className="flex flex-col items-center">
          <span>&#169; 2023 Nubank</span>
          <span>Arte conceitual do app Nubank</span>
        </div>
      </div>
    </nav>
  );
}
