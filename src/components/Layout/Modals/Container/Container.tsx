'use client';

import { cn } from '@/lib/utils';
import { ModalsContext } from '@/providers';
import { useContext } from 'react';
import { CategoryModal, TransactionModal } from '..';

export function ModalsContainer() {
  const modalsContext = useContext(ModalsContext);
  const isAnyModalOpen = modalsContext.data.some((modal) => modal.opened);

  return (
    <div
      id="modals-container"
      className={cn([isAnyModalOpen ? 'block' : 'hidden'], 'fixed w-screen h-screen top-0 z-30')}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full z-50">
          <TransactionModal />
          <CategoryModal />
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-40"></div>
      </div>
    </div>
  );
}
