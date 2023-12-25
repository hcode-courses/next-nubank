'use client';

import { Modal, ModalsContextType } from '@/types';
import { initialTransactionFormValues } from '@/values/modals';
import { createContext, useState } from 'react';

export const ModalsContext = createContext<ModalsContextType>({} as ModalsContextType);

export function ModalsProvider({ children }: React.PropsWithChildren) {
  const [transactions, setTransactions] = useState(false);
  const [transactionData, setTransactionData] = useState(initialTransactionFormValues);
  const [transactionAction, setTransactionAction] = useState<'create' | 'update' | undefined>(
    'create'
  );

  const modals: Modal[] = [
    {
      id: 'transaction',
      opened: transactions,
      open: () => setTransactions(true),
      close: () => setTransactions(false),
      data: transactionData,
      setData: setTransactionData,
      action: transactionAction,
      setAction: setTransactionAction,
    },
  ];

  const closeModal = (id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.close();
      modal.setAction('create');
      modal.setData(initialTransactionFormValues);
    }
  };

  const openModal = (id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.open();
    }
  };

  const openUpdateModal = (id: string, data: any) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.open();
      modal.setData(data);
      modal.setAction('update');
    }
  };

  return (
    <ModalsContext.Provider
      value={{
        data: modals,
        close: closeModal,
        open: openModal,
        openUpdate: openUpdateModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
