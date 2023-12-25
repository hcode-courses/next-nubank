import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { InputType } from '..';

export type TextInputProps = {
  value: string;
  setValue: (value: string) => void;
} & InputType &
  ElementType<'input'>;

export function TextInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: TextInputProps) {
  return (
    <div className={cn(['relative text-primary font-normal', wrapperClassName])}>
      <input
        type="text"
        className={cn([
          'w-full p-2 px-8 rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary',
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
