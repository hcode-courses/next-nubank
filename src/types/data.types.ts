import { ReactElement } from 'react';

export type DataContextType = {
  transactions: Transaction[];
  categories: Category[];
};

export type Category = {
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
  category: string;
  icon: ReactElement;
};
