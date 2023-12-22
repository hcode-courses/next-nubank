'use client';

import { DataContextType } from '@/types';
import { categories, transactions } from '@/values/data';
import { createContext } from 'react';

export const DataContext = createContext<DataContextType>({} as DataContextType);

export function DataProvider({ children }: React.PropsWithChildren) {
  return (
    <DataContext.Provider
      value={{
        transactions,
        categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
