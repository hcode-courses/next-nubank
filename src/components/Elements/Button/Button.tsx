import { ReactElement } from 'react';

export type ButtonProps = {
  text: string;
  variant?: 'default' | 'subtle';
  leftSection?: ReactElement;
  rightSection?: ReactElement;
} & React.HTMLProps<HTMLButtonElement>;

export function Button({
  text,
  variant = 'default',
  leftSection,
  rightSection,
  className = '',
}: ButtonProps) {
  let twClassName = 'flex flex-row items-center justify-center h-fit ';

  switch (variant) {
    case 'subtle':
      twClassName = twClassName.concat(
        `bg-transparent hover:bg-primary active:bg-tertiary py-2 px-4 min-w-[150px] rounded-full 
        text-primary text-md hover:text-white font-bold`,
        className
      );

      break;
    default:
      twClassName = twClassName.concat(
        `bg-primary hover:bg-tertiary active:bg-tertiary py-2 px-4 min-w-[150px] rounded-full 
      text-white text-md hover:text-white font-normal`,
        className
      );

      break;
  }

  return (
    <button className={twClassName}>
      {leftSection && <div className="mr-2">{leftSection}</div>}
      {text}
      {rightSection && <div className="ml-2">{rightSection}</div>}
    </button>
  );
}
