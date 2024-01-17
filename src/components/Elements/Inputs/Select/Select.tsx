import { cn } from '@/lib/utils';
import { ElementType } from '@/types';

type SelectItem = {
  name: string;
  value: any;
};

export type SelectProps = {
  items: SelectItem[];
  active: any;
  setActive: (value: any) => void;
} & ElementType<HTMLSelectElement>;

export function Select({ items, active, setActive, className }: SelectProps) {
  const selectItems = items.map((item) => {
    return (
      <option key={`select-item-${item.value}`} value={item.value}>
        {item.name}
      </option>
    );
  });

  return (
    <select
      value={active}
      onChange={(e) => setActive(e.target.value)}
      className={cn([
        'select select-sm w-full flex bg-transparent text-primary border-primary border-2 font-medium rounded-full',
        className,
      ])}
    >
      {selectItems}
    </select>
  );
}
