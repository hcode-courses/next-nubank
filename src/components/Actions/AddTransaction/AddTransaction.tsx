import { ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { IconPlus } from '@tabler/icons-react';
import { useContext } from 'react';

export function AddTransaction({ className }: ElementType) {
  const modalsContext = useContext(ModalsContext);

  return (
    <div className={className}>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
          onClick={() => modalsContext.open('transaction')}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
