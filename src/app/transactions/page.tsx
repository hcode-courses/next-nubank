'use client';
import { CategoriesProgress, TransactionItem } from '@/components/Elements';
import { DataContext } from '@/providers/DataProvider';
import { ElementType, Transaction } from '@/types';
import { useContext } from 'react';

type TransactionDayProps = {
  day: string;
  data: Transaction[];
} & ElementType;

function TransactionDay({ day, data }: TransactionDayProps) {
  return (
    <div>
      <h3 className="font-bold text-xl mb-5">{day}</h3>
      <ul className="relative flex flex-col gap-5 w-full before:absolute before:content-[''] before:left-[23px] before:h-full before:w-[2px] before:bg-gray-200">
        {data.map((item) => (
          <li key={`transaction-item-${item.id}`}>
            <TransactionItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TransactionsPage() {
  const data = useContext(DataContext);
  const transactions = data.transactions.data;
  const today = transactions.slice(0, 3);
  const yesterday = transactions.slice(3, 7);

  return (
    <div className="flex flex-col p-6 pt-10">
      <h1 className="font-bold text-3xl mb-5">Transações</h1>
      <div className="flex flex-row flex-wrap gap-x-[300px] gap-y-10 justify-center w-full p-12 bg-contrast rounded-xl mb-10">
        <div className="flex flex-col font-bold justify-center text-primary">
          <div>
            <span className="font-medium">Total de gastos:</span> R$ 1450,08
          </div>
          <div>
            <span className="font-medium">Saldo da sua conta:</span> R$ 2500
          </div>
        </div>
        <CategoriesProgress className="max-w-[400px]" />
      </div>
      <div className="flex flex-col max-w-[600px] w-full mx-auto gap-10">
        <TransactionDay data={today} day="Hoje" />
        <TransactionDay data={yesterday} day="Ontem" />
      </div>
    </div>
  );
}
