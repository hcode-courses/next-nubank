'use client';

import { DataContextType, Transaction } from '@/types';
import { categories as categoriesData, transactions as transactionsData } from '@/values/data';
import { createContext, useCallback, useState } from 'react';

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState(transactionsData);
  const [categories, setCategories] = useState(categoriesData);

  const addTransaction = useCallback((transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  }, []);

  const deleteTransaction = useCallback((transactionId: string) => {
    const oldTransactions = transactions.filter((transaction) => {
      transaction.id !== transactionId;
    });

    setTransactions([...oldTransactions]);
  }, []);

  const updateTransaction = useCallback((transactionId: string, transaction: Transaction) => {
    const oldTransactions = transactions.filter((transaction) => {
      transaction.id !== transactionId;
    });

    const transactionToUpdate = transactions.filter((transaction) => {
      transaction.id === transactionId;
    });

    const updatedTransaction = {
      ...transactionToUpdate,
      ...transaction,
    };

    setTransactions([...oldTransactions, updatedTransaction]);
  }, []);

  return (
    <DataContext.Provider
      value={{
        transactions: {
          data: transactions,
          add: addTransaction,
          delete: deleteTransaction,
          update: updateTransaction,
        },
        categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
