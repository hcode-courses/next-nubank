import { getCategoryById, getCategoryIcon } from '@/lib/categories';
import { ModalsContext } from '@/providers';
import { Transaction } from '@/types';
import { categories } from '@/values/data';
import { format } from 'date-fns';
import { useContext } from 'react';

type TransactionItemProps = {
  data: Transaction;
};

export function TransactionItem({ data }: TransactionItemProps) {
  const modalsContext = useContext(ModalsContext);
  const category = getCategoryById(data.categoryId, categories);

  return (
    <div
      className="relative flex flex-row flex-wrap w-full items-center justify-between"
      onClick={() => modalsContext.openUpdate('transaction', data)}
    >
      <div className="absolute left-0 w-[50px] h-full flex items-center">
        <div className="flex flex-row items-center justify-center bg-tertiary w-[40px] h-[40px] rounded-full">
          <div className="w-[24px] h-[24px] text-white">
            {getCategoryIcon(category?.icon || '', categories)}
          </div>
        </div>
      </div>
      <div className="pl-[60px]">
        <span className="font-medium text-sm">{category?.name}</span>
        <h3 className="font-medium my-0">{data.name || <i>Sem nome</i>}</h3>
        <span className="text-xs">{format(data.date, 'dd/MM/yyyy')}</span>
      </div>
      <span className="font-medium">R$ {data.value}</span>
    </div>
  );
}
