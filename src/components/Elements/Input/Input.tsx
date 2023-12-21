import { ElementType } from '@/types';
import { IconSearch } from '@tabler/icons-react';

type InputProps = {
  value: string;
  setSearch: (value: string) => void;
  placeholder?: string;
} & ElementType;

export function Input({ value, setSearch, placeholder = '', className }: InputProps) {
  return (
    <div className={`relative text-primary font-normal ${className}`}>
      <input
        className="w-full p-2 px-8 rounded-full border-primary outline-0 focus:border-primary border-2 placeholder:text-primary"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconSearch size={20} className="absolute right-4 top-0 translate-y-3" />
    </div>
  );
}
