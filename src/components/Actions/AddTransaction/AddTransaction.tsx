import { ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { IconPlus } from '@tabler/icons-react';
import { useContext } from 'react';

export type AddTransactionProps = {} & ElementType<'div'>;

export function AddTransaction({ className }: AddTransactionProps) {
  const modals = useContext(ModalsContext);

  return (
    <div className={className}>
      <div className={'tooltip tooltip-left'} data-tip="Adicionar transação">
        <button
          type="button"
          className="bg-primary rounded-md p-1 text-white hover:bg-tertiary"
          onClick={() => modals.open('transaction')}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
