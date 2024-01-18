'use client';

import { Category, DataContextType, Transaction } from '@/types';
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
    setTransactions((prev) => {
      const otherTransactions = prev.filter((transaction) => transaction.id !== transactionId);

      const updatedTransaction = {
        id: transactionId,
        ...newData,
      };

      return [...otherTransactions, updatedTransaction];
    });
  };

  const deleteTransaction = (transactionId: Transaction['id']) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== transactionId));
  };

  const addCategory = (category: Category) => {
    setCategories((prev) => [...prev, category]);
  };

  const updateCategory = (categoryId: Category['id'], newData: Omit<Category, 'id'>) => {
    setCategories((prev) => {
      const otherCategories = prev.filter((category) => category.id !== categoryId);

      const updatedCategory = {
        id: categoryId,
        ...newData,
      };

      return [...otherCategories, updatedCategory];
    });
  };

  const deleteCategory = (categoryId: Category['id']) => {
    setCategories((prev) => prev.filter((category) => category.id !== categoryId));

    const categoryTransactions = transactions.filter(
      (transaction) => transaction.categoryId === categoryId
    );

    categoryTransactions.forEach((transaction) => {
      const nextCategoryId = categories[0].id === categoryId ? categories[1].id : categories[0].id;
      const newTransaction = {
        ...transaction,
        categoryId: nextCategoryId,
      };
      updateTransaction(transaction.id, newTransaction);
    });
  };

  const data: DataContextType = {
    transactions: {
      data: transactions,
      add: addTransaction,
      update: updateTransaction,
      delete: deleteTransaction,
    },
    categories: {
      data: categories,
      add: addCategory,
      update: updateCategory,
      delete: deleteCategory,
    },
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
