import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

export type ButtonProps = {
  variant?: 'default' | 'subtle';
  leftSection?: ReactElement;
  rightSection?: ReactElement;
  tooltip?: string;
} & React.HTMLProps<HTMLButtonElement>;

export function Button({
  children,
  variant = 'default',
  leftSection,
  rightSection,
  className = '',
  tooltip,
}: ButtonProps) {
  const defaultStyle = 'btn btn-sm py-3 px-10 h-fit min-h-11';

  const content = (
    <>
      {leftSection && <div className="mr-2">{leftSection}</div>}
      {children}
      {rightSection && <div className="ml-2">{rightSection}</div>}
    </>
  );

  if (variant === 'default') {
    return (
      <div className={cn([tooltip && 'tooltip'])} data-tip={tooltip}>
        <button
          className={cn([
            defaultStyle,
            'text-white bg-primary hover:bg-tertiary border-none rounded-full shadow-none',
            className,
          ])}
        >
          {content}
        </button>
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <button
        className={cn([
          defaultStyle,
          'text-primary bg-transparent hover:bg-primary hover:text-white border-none rounded-full shadow-none',
          className,
        ])}
      >
        {content}
      </button>
    );
  }
}
