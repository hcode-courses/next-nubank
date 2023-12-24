'use client';

import { DataContextType, Transaction } from '@/types';
import { categories as categoriesData, transactions as transactionsData } from '@/values/data';
import { createContext, useCallback, useContext, useState } from 'react';

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState(transactionsData);
  const [categories, setCategories] = useState(categoriesData);
  const data = useContext(DataContext);

  const addTransaction = useCallback((transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  }, []);

  const deleteTransaction = useCallback((transactionId: string) => {
    const oldTransactions = transactions.filter((transaction) => {
      transaction.id !== transactionId;
    });

    setTransactions([...oldTransactions]);
  }, []);

  const updateTransaction = useCallback(
    (transactionId: string, newData: Omit<Transaction, 'id'>) => {
      const oldTransactions = transactions.filter(
        (transaction) => transaction.id !== transactionId
      );

      const updatedTransaction = {
        id: transactionId,
        ...newData,
      };

      console.log('updatedtransaction', updatedTransaction);

      console.log(oldTransactions, updatedTransaction);

      setTransactions([...oldTransactions, updatedTransaction]);
    },
    []
  );

  return (
    <DataContext.Provider
      value={{
        transactions: {
          data: transactions,
          add: addTransaction,
          update: updateTransaction,
          delete: deleteTransaction,
        },
        categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
