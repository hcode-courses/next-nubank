import { ElementType } from '@/types';
import { ReactElement } from 'react';

type InputProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  leftSection?: ReactElement;
  wrapperClassName?: string;
} & ElementType<'input'>;

export function Input({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: InputProps) {
  return (
    <div className={`relative text-primary font-normal ${wrapperClassName}`}>
      <input
        className={`w-full p-2 px-8 rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {leftSection}
    </div>
  );
}
