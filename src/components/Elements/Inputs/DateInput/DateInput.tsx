import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { InputType } from '..';

export type DateInputProps = {
  value: string;
  setValue: (value: string) => void;
} & InputType &
  ElementType<'input'>;

export function DateInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: DateInputProps) {
  return (
    <div className={cn(['relative text-primary font-normal', wrapperClassName])}>
      <input
        type="date"
        className={cn([
          'w-full p-2 px-8 rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary',
          className,
        ])}
        value={String(value)}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={() => 'return false'}
      />
      {leftSection}
    </div>
  );
}
