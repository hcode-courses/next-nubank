'use client';
import { ModalsContext } from '@/providers';
import { useContext } from 'react';

export function ModalsContainer({ children }: React.PropsWithChildren) {
  const modalsContext = useContext(ModalsContext);
  const isAnyModalOpen = modalsContext.data.some((modal) => modal.opened);

  return (
    <div
      id="modals-container"
      className={`${isAnyModalOpen ? 'block' : 'hidden'} fixed w-screen h-screen top-0 z-[10]`}
    >
      <div className="relative w-full h-full">
        <div className=" flex flex-col items-center justify-center w-full h-full z-[15]">
          {children}
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-[10]"></div>
      </div>
    </div>
  );
}
