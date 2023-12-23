'use client';

import { CategoriesProgress } from '@/components/Elements';
import { Category } from '@/types';
import Image from 'next/image';

type ExpenseProps = {
  data: Category[];
};

export function ExpensesTab({ data }: ExpenseProps) {
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
