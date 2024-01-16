'use client';

import { DataContextType, Transaction } from '@/types';
import { categories as categoriesData, transactions as transactionsData } from '@/values/data';
import { createContext, useState } from 'react';

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState(transactionsData);
  const [categories, setCategories] = useState(categoriesData);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const updateTransaction = (
    transactionId: Transaction['id'],
    newData: Omit<Transaction, 'id'>
  ) => {
    const otherTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    const updatedTransaction = {
      id: transactionId,
      ...newData,
    };

    setTransactions([...otherTransactions, updatedTransaction]);
  };

  const deleteTransaction = (transactionId: Transaction['id']) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== transactionId));
  };

  const data: DataContextType = {
    transactions: {
      data: transactions,
      add: addTransaction,
      update: updateTransaction,
      delete: deleteTransaction,
    },
    categories,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}