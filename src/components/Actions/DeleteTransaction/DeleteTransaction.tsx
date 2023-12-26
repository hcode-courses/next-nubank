import { DataContext } from '@/providers';
import { IconTrash } from '@tabler/icons-react';
import { useContext } from 'react';

export type DeleteTransactionProps = {
  itemId: string;
} & React.HTMLProps<HTMLDivElement>;

export function DeleteTransaction({ itemId, className }: DeleteTransactionProps) {
  const dataContext = useContext(DataContext);
  const transactions = dataContext.transactions;

  return (
    <div className={className}>
      <div className={'tooltip'} data-tip="Deletar transação">
        <button
          type="button"
          className="btn btn-square bg-transparent border-primary border-2 hover:border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => transactions.delete(itemId)}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
