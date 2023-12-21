'use client';

import { IconGraphFilled, IconX } from '@tabler/icons-react';
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
    icon: <IconGraphFilled />,
    link: '/',
  },
  {
    text: 'Conta',
    icon: <IconGraphFilled />,
    link: '/account',
  },
  {
    text: 'Transações',
    icon: <IconGraphFilled />,
    link: '/transactions',
  },
  {
    text: 'Chat Online',
    icon: <IconGraphFilled />,
    link: '/chat',
  },
  {
    text: 'Configurações',
    icon: <IconGraphFilled />,
    link: '/settings',
  },
  {
    text: 'Security',
    icon: <IconGraphFilled />,
    link: '/security',
  },
];

export function Navbar({ opened, setOpened }: NavbarProps) {
  const path = usePathname();

  return (
    <nav
      className={`flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed md:static h-screen text-white left-[${
        opened ? '0' : '-300px'
      }]`}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 left-8"
          cursor="pointer"
          onClick={() => {
            console.log(opened);
            setOpened(!opened);
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

      <div className="p-4 text-sm">
        <Image
          className="mb-4"
          src="/icons/hcode_logo.svg"
          alt="Avatar"
          width={70}
          height={70}
        />
        <div className="flex flex-col">
          <span>&#169; 2023 Hcode Banco</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </nav>
  );
}
