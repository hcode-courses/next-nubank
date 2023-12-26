import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import ReactDatePicker from 'react-datepicker';

export type DateInputProps = {
  ssss: Date;
  setValue: (value: Date | null) => void;
} & ElementType<'div'>;

export function DateInput({ ssss, setValue, className, wrapperClassName }: DateInputProps) {
  return (
    <div
      className={cn([
        'w-full p-2 px-4 text-sm rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary text-primary font-medium',
        wrapperClassName,
      ])}
    >
      <ReactDatePicker
        locale="ptBR"
        className={cn(['focus:outline-none leading-[6px]', className])}
        selected={ssss}
        onChange={(date) => setValue(date)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
}
