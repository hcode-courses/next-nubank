import { ModalsContext } from '@/providers';
import { ElementType, Transaction } from '@/types';
import { useContext } from 'react';
import { TransactionItem } from '..';

export type TransactionListProps = {
  title: string;
  items: Transaction[];
} & ElementType;

export function TransactionList({ title, items, className }: TransactionListProps) {
  const modals = useContext(ModalsContext);

  return (
    <div className={className}>
      <h3 className="font-bold text-xl mb-5">{title}</h3>
      <ul className="relative flex flex-col gap-5 w-full before:absolute before:content-[''] before:left-[23px] before:my-[16px] before:h-[calc(100%-32px)] before:max-h-full before:w-[2px] before:bg-gray-200">
        {items.map((item) => (
          <li
            className="cursor-pointer"
            key={`transaction-item-${item.id}`}
            onClick={() => modals.openUpdate('transaction', item)}
          >
            <TransactionItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
