import { ElementType } from '@/types';
import { Input } from '..';
import { DefaultInputType } from '../inputs.types';

export type TextInputProps = {
  value: string;
  setValue: (value: string) => void;
} & ElementType<HTMLInputElement> &
  DefaultInputType;

export function TextInput(data: TextInputProps) {
  return <Input type="text" {...data} />;
}
