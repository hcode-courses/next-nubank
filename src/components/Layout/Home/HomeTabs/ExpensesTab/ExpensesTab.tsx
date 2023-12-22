'use client';

import { Button, Progress } from '@/components/Elements';
import Image from 'next/image';
import { ReactElement } from 'react';

export type Category = {
  icon: ReactElement;
  text: string;
  value: number;
  color: string;
};

type ExpenseProps = {
  data: Category[];
};

export function ExpensesTab({ data }: ExpenseProps) {
  let totalExpenses = data.reduce((acc, item) => acc + item.value, 0);
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  function Category({ icon, text, value, color }: Category) {
    return (
      <div className={`flex flex-row ${color} mb-3`}>
        {icon}
        <span className="ml-4 font-medium w-20 text-text">{text}</span>
        <span className="ml-4 font-medium">{Math.round((value / totalExpenses) * 100)}%</span>
      </div>
    );
  }

  const expensesCategories = data.map((category) => (
    <Category key={`category-item-${category.text}`} {...category} />
  ));

  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <h3 className="text-secondary font-bold text-2xl">R$ 1450,08</h3>
      <div>
        <Image src="/expenses.png" alt="Gráfico das despesas" width={500} height={300} />
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between max-w-[500px] mx-auto mt-8">
          <div className="flex flex-row relative">
            <div className="flex flex-col justify-between text-sm h-full mr-10">
              {Array(4)
                .fill(0)
                .map((_) => {
                  const displayInfo = accInfo + infoIteration;
                  accInfo -= infoIteration;
                  return (
                    <span key={`info-item-${displayInfo}`}>
                      R$ {Math.ceil(displayInfo / 10) * 10}
                    </span>
                  );
                })}
              <span>R$ {Math.ceil(infoIteration / 10) * 10}</span>
              <span>R$ 0</span>
            </div>
            <Progress data={data} />
          </div>
          <div className="flex flex-col items-center justify-between h-full ">
            {expensesCategories}
            <Button text="Imprimir" />
          </div>
        </div>
      </div>
    </div>
  );
}
