'use client';

import { ModalsContextType } from '@/types';
import { createContext, useCallback, useState } from 'react';

export const ModalsContext = createContext<ModalsContextType>({} as ModalsContextType);

export function ModalsProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState(true);

  const modals = [
    {
      id: 'transaction',
      opened: transactions,
      open: () => setTransactions(true),
      close: () => setTransactions(false),
    },
  ];

  const closeModal = useCallback((id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.close();
    }
  }, []);

  const openModal = useCallback((id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.open();
    }
  }, []);

  return (
    <ModalsContext.Provider
      value={{
        data: modals,
        close: closeModal,
        open: openModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
