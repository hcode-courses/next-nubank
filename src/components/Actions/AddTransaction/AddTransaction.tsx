import { ElementType } from '@/types';
import { IconPlus } from '@tabler/icons-react';

export function AddTransaction({ className }: ElementType) {
  return (
    <div className={className}>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
