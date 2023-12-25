'use client';

import { getCategoryItems } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { DataContext } from '@/providers/DataProvider';
import { Category, ElementType } from '@/types';
import { useContext } from 'react';
import { Button, Progress } from '..';

export function CategoriesProgress({ className }: ElementType) {
  const data = useContext(DataContext);
  const transactions = data.transactions.data;

  let totalExpenses = transactions.reduce((acc, item) => acc + item.value, 0);
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  function Category({ id, icon, name, color }: Category) {
    const categoryTransactions = getCategoryItems(id, data.transactions.data);
    const totalCategoryExpenses = categoryTransactions.reduce(
      (acc, transaction) => acc + transaction.value,
      0
    );

    return (
      <div className={`flex flex-row ${color} mb-3`}>
        {icon}
        <span className="ml-4 font-medium w-20 text-text">{name}</span>
        <span className="ml-4 font-medium">
          {Math.round((totalCategoryExpenses / totalExpenses) * 100)}%
        </span>
      </div>
    );
  }

  const expensesCategories = data.categories.map((category) => (
    <Category key={`category-item-${category.name}`} {...category} />
  ));

  return (
    <div className={cn(['flex flex-row w-full justify-between', className])}>
      {transactions.length > 0 && (
        <>
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
            <Progress categories={data.categories} />
          </div>
          <div className="flex flex-col items-center justify-between h-fit">
            {expensesCategories}
            <Button className="mt-5" text="Imprimir" />
          </div>
        </>
      )}
      {transactions.length === 0 && (
        <div className="flex flex-col w-full items-center">Sem transações</div>
      )}
    </div>
  );
}
