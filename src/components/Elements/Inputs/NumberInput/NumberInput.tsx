import { ElementType } from '@/types';
import { Input } from '..';
import { DefaultInputType } from '../inputs.types';

export type NumberInputProps = {
  value: number;
  setValue: (value: number) => void;
} & ElementType<HTMLInputElement> &
  DefaultInputType;

export function NumberInput(data: NumberInputProps) {
  return <Input type="number" {...data} />;
}
