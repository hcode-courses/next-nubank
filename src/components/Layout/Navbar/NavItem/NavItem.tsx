import Link from 'next/link';

type NavItemProps = {
  active: string;
  text: string;
  link: string;
  icon: JSX.Element;
};

export function NavItem({ active, text, link, icon }: NavItemProps) {
  const isActive = active === link;

  return (
    <Link href={link}>
      <div
        className={`flex flex-row items-center h-10 px-8 py-6 ${
          isActive ? 'bg-tertiary' : ''
        } hover:bg-secondary`}
      >
        <span className="mr-10">{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  );
}
