import { ElementType } from '@/types';
import { DefaultInputType, Input } from '..';

export type TextInputProps = {
  value: string;
  setValue: (value: string) => void;
} & DefaultInputType &
  ElementType<HTMLInputElement>;

export function TextInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: TextInputProps) {
  return (
    <Input
      type="text"
      value={value}
      setValue={setValue}
      className={className}
      leftSection={leftSection}
      wrapperClassName={wrapperClassName}
      placeholder={placeholder}
    />
  );
}
