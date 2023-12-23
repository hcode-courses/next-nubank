import { getCategoryById } from '@/lib/categories';
import { DataContext } from '@/providers';
import { Transaction } from '@/types';
import { format } from 'date-fns';
import { useContext } from 'react';

export type TransactionItemProps = {
  data: Transaction;
};

export function TransactionItem({ data }: TransactionItemProps) {
  const dataContext = useContext(DataContext);
  const itemCategory = getCategoryById(data.categoryId, dataContext.categories);

  return (
    <div className="relative flex flex-row flex-wrap w-full items-center justify-between">
      <div className="absolute left-0 w-[50px] h-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-center bg-tertiary w-[40px] h-[40px] rounded-full">
          <div className="w-[24px] h-[24px] text-white">{itemCategory?.icon}</div>
        </div>
      </div>
      <div className="pl-[60px]">
        <span className="font-medium text-sm">{itemCategory?.name}</span>
        <h3 className="font-medium my-0">{data.name}</h3>
        <span className="text-xs">{format(data.date, 'dd/MM/yyyy')}</span>
      </div>
      <div>
        <span className="font-medium">R$ {data.value}</span>
      </div>
    </div>
  );
}
