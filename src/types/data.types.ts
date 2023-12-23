import { ReactElement } from 'react';

export type DataContextType = {
  transactions: {
    data: Transaction[];
    add: (transaction: Transaction) => void;
    update: (transactionId: string, transaction: Transaction) => void;
    delete: (transactionId: string) => void;
  };
  categories: Category[];
};

export type Category = {
  id: number;
  name: string;
  color: string;
  value: number;
  icon: ReactElement;
};

export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
};
