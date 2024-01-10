import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { DefaultInputType } from '..';

export type InputProps = {
  value: any;
  setValue: (value: any) => void;
  type: string;
} & DefaultInputType &
  ElementType<HTMLInputElement>;

export function Input({
  value,
  setValue,
  type,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: InputProps) {
  return (
    <div className={cn(['relative text-primary font-normal', wrapperClassName])}>
      <input
        type={type}
        className={cn([
          'input w-full border-2 border-primary bg-transparent text-primary rounded-full placeholder:text-primary',
          className,
        ])}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className={cn([
          'absolute flex justify-center items-center top-0 right-0 h-full translate-y-0.5',
        ])}
      >
        {leftSection}
      </div>
    </div>
  );
}
