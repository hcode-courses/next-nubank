import { ElementType } from '@/types';
import { IconCaretDownFilled, IconCaretUpFilled, IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

export type SelectItem = {
  text: string;
  value: string;
};

export type SelectProps = {
  data: SelectItem[];
  active: SelectItem;
  setActive: (value: SelectItem) => void;
} & ElementType;

export function Select({ data, active, setActive }: SelectProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const selectItems = data.map((item) => {
    const isActive = active.value === item.value;

    return (
      <div
        key={`select-${item.value}`}
        className="flex flex-row justify-between p-2 hover:cursor-pointer"
        onClick={() => {
          setActive(item);
          setMenuOpen(false);
        }}
      >
        {item.text}
        {isActive ? <IconCheck size={16} /> : undefined}
      </div>
    );
  });

  return (
    <div className="relative w-[130px] font-bold text-primary">
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-row justify-between items-center h-fit w-full py-1 px-3 rounded-full border-primary text-sm outline-0 focus:border-primary border-2 hover:cursor-pointer"
      >
        {active.text}
        {menuOpen ? <IconCaretUpFilled size={16} /> : <IconCaretDownFilled size={16} />}
      </div>
      <div
        className={`absolute w-full top-[40px] bg-bg text-sm shadow-md rounded-md ${
          menuOpen ? '' : 'hidden'
        }`}
      >
        {selectItems}
      </div>
    </div>
  );
}
