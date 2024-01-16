'use client';

import { Modal, ModalsContextType, initialTransactionFormValues } from '@/types/modal.types';
import { createContext, useState } from 'react';

export const ModalsContext = createContext({} as ModalsContextType);

export function ModalsProvider({ children }: React.PropsWithChildren) {
  const [transactionOpened, setTransactionOpened] = useState(false);
  const [transactionFormData, setTransactionFormData] = useState(initialTransactionFormValues);
  const [transactionAction, setTransactionAction] = useState<Modal['action']>('create');

  const modals: Modal[] = [
    {
      id: 'transaction',
      opened: transactionOpened,
      open: () => setTransactionOpened(true),
      close: () => {
        setTransactionOpened(false);
        setTransactionFormData(initialTransactionFormValues);
        setTransactionAction('create');
      },
      data: transactionFormData,
      setData: setTransactionFormData,
      action: transactionAction,
      setAction: setTransactionAction,
    },
  ];

  const openModal = (id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.open();
    }
  };

  const closeModal = (id: string) => {
    const modal = modals.find((modal) => modal.id === id);

    if (modal) {
      modal.close();
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

  const data: ModalsContextType = {
    data: modals,
    open: openModal,
    close: closeModal,
    openUpdate: openUpdateModal,
  };

  return <ModalsContext.Provider value={data}>{children}</ModalsContext.Provider>;
}
