import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { InputType } from '..';

export type NumberInputProps = {
  value: number;
  setValue: (value: string) => void;
} & InputType &
  ElementType<'input'>;

export function NumberInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: NumberInputProps) {
  return (
    <div className={cn(['relative text-primary font-normal', wrapperClassName])}>
      <input
        type="number"
        className={cn([
          'w-full p-2 px-8 pr-2 rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary',
          className,
        ])}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {leftSection}
    </div>
  );
}
