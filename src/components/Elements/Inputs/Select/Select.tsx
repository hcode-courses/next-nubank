import { cn } from '@/lib/utils';
import { ElementType } from '@/types';

export type SelectItem = {
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
    const isActive = active === item.value;

    return (
      <option
        key={`select-item-${item.value}`}
        selected={isActive}
        onSelect={() => {
          setActive(item.value);
        }}
      >
        {item.name}
      </option>
    );
  });

  return (
    <select
      className={cn([
        'select select-sm flex w-full max-w-xs bg-transparent text-primary border-primary border-2 font-medium rounded-full',
        className,
      ])}
    >
      {selectItems}
    </select>
  );
}
