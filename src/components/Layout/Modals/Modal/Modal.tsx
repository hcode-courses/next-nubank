'use client';

import { useClickOutside } from '@/hooks/use-click-outside';
import { cn } from '@/lib/utils';
import { ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { IconX } from '@tabler/icons-react';
import { useContext, useRef } from 'react';

type ModalProps = {
  id: string;
  title: string;
} & ElementType &
  React.PropsWithChildren;

export function Modal({ id, title, className, children }: ModalProps) {
  const modalsContext = useContext(ModalsContext);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    modalsContext.close(id);
  });

  return (
    <div
      ref={modalRef}
      data-modal={id}
      className={cn([
        'flex flex-col w-[400px] h-[540px] bg-bg max-w-[80%] max-h-screen rounded-xl px-6 py-8 z-50',
        className,
      ])}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="cursor-pointer" onClick={() => modalsContext.close('transaction')}>
          <IconX />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
