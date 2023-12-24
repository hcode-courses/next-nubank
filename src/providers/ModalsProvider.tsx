'use client';

import { Modal, ModalsContextType } from '@/types';
import { initialTransactionFormValues } from '@/values/modals';
import { createContext, useCallback, useState } from 'react';

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

  const closeModal = useCallback((id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.close();
      modal.setAction('create');
    }
  }, []);

  const openModal = useCallback((id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.open();
    }
  }, []);

  const openUpdateModal = useCallback(
    (id: string, data: any) => {
      const modal = modals.find((modal) => modal.id === id);

      console.log('openUpdate', id, data);

      if (modal) {
        modal.open();
        modal.setData(data);
        modal.setAction('update');
      }
    },
    [modals[0].data]
  );

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
