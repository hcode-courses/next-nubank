import { ElementType } from '@/types';
import { DefaultInputType, Input } from '..';

export type NumberInputProps = {
  value: number;
  setValue: (value: string) => void;
} & DefaultInputType &
  ElementType<HTMLInputElement>;

export function NumberInput({
  value,
  setValue,
  placeholder = '',
  className,
  wrapperClassName,
  leftSection,
}: NumberInputProps) {
  return (
    <Input
      value={value}
      setValue={setValue}
      type="number"
      className={className}
      leftSection={leftSection}
      wrapperClassName={wrapperClassName}
      placeholder={placeholder}
    />
  );
}
