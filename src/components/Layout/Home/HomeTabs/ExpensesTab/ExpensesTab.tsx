'use client';

import { CategoriesProgress } from '@/components/Elements';
import { Category } from '@/types';
import Image from 'next/image';

type ExpenseProps = {
  data: Category[];
};

export function ExpensesTab({ data }: ExpenseProps) {
  let totalExpenses = data.reduce((acc, item) => acc + item.value, 0);

  function Category({ icon, name, value, color }: Category) {
    return (
      <div className={`flex flex-row ${color} mb-3`}>
        {icon}
        <span className="ml-4 font-medium w-20 text-text">{name}</span>
        <span className="ml-4 font-medium">{Math.round((value / totalExpenses) * 100)}%</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <h3 className="text-secondary font-bold text-2xl">R$ 1450,08</h3>
      <div>
        <Image src="/expenses.png" alt="Gráfico das despesas" width={500} height={300} />
      </div>
      <div className="w-full">
        <div className={`flex flex-row justify-between max-w-[400px] w-full mx-auto mt-8 `}>
          <CategoriesProgress />
        </div>
      </div>
    </div>
  );
}
