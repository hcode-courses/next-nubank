'use client';

import { DataContext } from '@/providers/DataProvider';
import { Category, ElementType } from '@/types';
import { useContext } from 'react';
import { Button, Progress } from '..';

export function CategoriesProgress({ className }: ElementType) {
  const data = useContext(DataContext);

  let totalExpenses = data.transactions.reduce((acc, item) => acc + item.value, 0);
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  function Category({ icon, name, value, color }: Category) {
    return (
      <div className={`flex flex-row ${color} mb-3`}>
        {icon}
        <span className="ml-4 font-medium w-20 text-text">{name}</span>
        <span className="ml-4 font-medium">{Math.round((value / totalExpenses) * 100)}%</span>
      </div>
    );
  }

  const expensesCategories = data.categories.map((category) => (
    <Category key={`category-item-${category.name}`} {...category} />
  ));

  return (
    <div className={`flex flex-row w-full justify-between ${className}`}>
      <div className="flex flex-row relative">
        <div className="flex flex-col justify-between text-sm h-full mr-10">
          {Array(4)
            .fill(0)
            .map((_) => {
              const displayInfo = accInfo + infoIteration;
              accInfo -= infoIteration;
              return (
                <span key={`info-item-${displayInfo}`}>R$ {Math.ceil(displayInfo / 10) * 10}</span>
              );
            })}
          <span>R$ {Math.ceil(infoIteration / 10) * 10}</span>
          <span>R$ 0</span>
        </div>
        <Progress data={data.categories} />
      </div>
      <div className="flex flex-col items-center justify-between h-full ">
        {expensesCategories}
        <Button className="mt-5" text="Imprimir" />
      </div>
    </div>
  );
}
