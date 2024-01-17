'use client';

import { Modal, ModalsContextType } from '@/types/modal.types';
import { initialCategoryFormValues, initialTransactionFormValues } from '@/values/data';
import { createContext, useState } from 'react';

export const ModalsContext = createContext({} as ModalsContextType);

export function ModalsProvider({ children }: React.PropsWithChildren) {
  const [transactionOpened, setTransactionOpened] = useState(false);
  const [transactionFormData, setTransactionFormData] = useState(initialTransactionFormValues);
  const [transactionAction, setTransactionAction] = useState<Modal['action']>('create');

  const [categoryOpened, setCategoryOpened] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState(initialCategoryFormValues);
  const [categoryAction, setCategoryAction] = useState<Modal['action']>('create');

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
    {
      id: 'category',
      opened: categoryOpened,
      open: () => setCategoryOpened(true),
      close: () => {
        setCategoryOpened(false);
        setCategoryFormData(initialCategoryFormValues);
        setCategoryAction('create');
      },
      data: categoryFormData,
      setData: setCategoryFormData,
      action: categoryAction,
      setAction: setCategoryAction,
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
