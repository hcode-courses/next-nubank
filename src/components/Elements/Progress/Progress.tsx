'use client';

import { getCategoryItems } from '@/lib/categories';
import { cn } from '@/lib/utils';
import { DataContext } from '@/providers';
import { Category, ElementType, Transaction } from '@/types';
import { useContext, useLayoutEffect, useRef, useState } from 'react';

type ProgressSection = {
  color: string;
  value: number;
};

type ProgressProps = {
  categories: Category[];
} & ElementType;

export function Progress({ categories, className }: ProgressProps) {
  let accSectionsHeight = 0;
  const dataContext = useContext(DataContext);
  const transactions = dataContext.transactions.data;

  const totalExpenses = transactions.reduce(
    (acc: number, item: Transaction) => acc + item.value,
    0
  );

  const ref = useRef<HTMLHeadingElement>(null);
  let [parentHeight, setParentHeight] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setParentHeight(ref.current ? ref.current.offsetHeight : 0);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const sections = categories.map((category, index) => {
    const categoryTransactions = getCategoryItems(category.id, transactions);
    const totalCategoryExpenses = categoryTransactions.reduce(
      (acc: number, transaction: Transaction) => acc + transaction.value,
      0
    );

    const height = (totalCategoryExpenses / totalExpenses) * parentHeight + accSectionsHeight;
    const backgroundColor = `var(-${category.color.replace('text', '')})`;
    const zIndex = categories.length - index - 1;

    accSectionsHeight += (totalCategoryExpenses / totalExpenses) * parentHeight;
    return (
      <div
        key={`section-item-${category.name}`}
        style={{ height, backgroundColor, zIndex }}
        className={`absolute bottom-0 w-full rounded-full`}
      ></div>
    );
  });

  return (
    <div
      ref={ref}
      style={{ backgroundColor: '#DDD' }}
      className={cn(['relative min-h-[100px] w-2 rounded-full', className])}
    >
      {sections}
    </div>
  );
}
