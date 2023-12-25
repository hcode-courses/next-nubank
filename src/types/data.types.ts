import { ReactElement } from 'react';

export type DataContextType = {
  transactions: {
    data: Transaction[];
    add: (transaction: Transaction) => void;
    update: (transactionId: string, newData: Omit<Transaction, 'id'>) => void;
    delete: (transactionId: string) => void;
  };
  categories: Category[];
};

export type Category = {
  id: number;
  name: string;
  color: string;
  icon: ReactElement;
};

export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
  type: string;
};
