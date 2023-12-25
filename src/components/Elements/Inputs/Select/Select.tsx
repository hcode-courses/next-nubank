import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';
import { ElementType } from '@/types';
import { IconCaretDownFilled, IconCaretUpFilled, IconCheck } from '@tabler/icons-react';
import { useRef, useState } from 'react';

export type SelectItem = {
  name: string;
  value: any;
};

export type SelectProps = {
  items: SelectItem[];
  active: any;
  setActive: (value: any) => void;
} & ElementType;

export function Select({ items, active, setActive, wrapperClassName, className }: SelectProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeItem = items.find((item) => item.value === active);

  const selectRef = useRef(null);

  useClickOutside(selectRef, () => {
    setMenuOpen(false);
  });

  const selectItems = items.map((item) => {
    const isActive = active === item.value;

    return (
      <div
        key={`select-item-${item.value}`}
        className="flex flex-row justify-between p-2 hover:cursor-pointer hover:bg-bg-contrast"
        onClick={() => {
          setActive(item.value);
          setMenuOpen(false);
        }}
      >
        {item.name}
        {isActive ? <IconCheck size={16} /> : undefined}
      </div>
    );
  });

  return (
    <div
      className={cn(['relative w-[130px] font-bold text-primary', wrapperClassName])}
      ref={selectRef}
    >
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-row justify-between items-center h-fit w-full py-1 px-3 rounded-full border-primary text-sm outline-0 focus:border-primary border-2 hover:cursor-pointer"
      >
        {activeItem?.name}
        {menuOpen ? <IconCaretUpFilled size={16} /> : <IconCaretDownFilled size={16} />}
      </div>
      <div
        className={cn([
          'absolute w-full top-[40px] bg-bg text-sm shadow-md rounded-md z-10',
          menuOpen ? '' : 'hidden',
        ])}
      >
        {selectItems}
      </div>
    </div>
  );
}
