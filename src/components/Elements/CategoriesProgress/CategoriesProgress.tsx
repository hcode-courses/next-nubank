import { getCategoryItems } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { DataContext } from '@/providers';
import { Category, ElementType } from '@/types';
import { useContext } from 'react';
import { Button, Progress } from '..';

type CategoryProps = {
  totalExpenses: number;
} & Category;

function Category({ color, id, name, icon, totalExpenses }: CategoryProps) {
  const dataContext = useContext(DataContext);
  const transactions = dataContext.transactions.data;

  const categoryTransactions = getCategoryItems(id, transactions);
  const totalCategoryExpenses = categoryTransactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0
  );

  return (
    <div className={cn([`flex flex-row mb-3`, color])}>
      {icon}
      <span className="ml-4 font-medium w-20 text-text">{name}</span>
      <span className="font-medium">
        {Math.round((totalCategoryExpenses / totalExpenses) * 100)} %
      </span>
    </div>
  );
}

export function CategoriesProgress({ className }: ElementType) {
  const dataContext = useContext(DataContext);
  const transactions = dataContext.transactions.data;
  const categories = dataContext.categories;

  let totalExpenses = transactions.reduce((acc, transaction) => transaction.value + acc, 0);
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  const expensesCategories = categories.map((category) => (
    <Category key={`category-item-${category.id}`} {...category} totalExpenses={totalExpenses} />
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
            <Progress categories={categories} />
          </div>
          <div className="flex flex-col items-center justify-between h-fit">
            {expensesCategories}
            <Button className="mt-5">Imprimir</Button>
          </div>
        </>
      )}
      {transactions.length === 0 && (
        <div className="flex flex-col w-full items-center">Sem transações</div>
      )}
    </div>
  );
}
