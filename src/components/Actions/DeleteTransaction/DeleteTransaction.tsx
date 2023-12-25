import { cn } from '@/lib/utils';
import { DataContext } from '@/providers';
import { IconTrash } from '@tabler/icons-react';
import { useContext } from 'react';

export type DeleteTransactionProps = {
  itemId: string;
} & React.HTMLProps<HTMLDivElement>;

export function DeleteTransaction({ itemId, className, ...rest }: DeleteTransactionProps) {
  const dataContext = useContext(DataContext);
  const transactions = dataContext.transactions;

  return (
    <div className={cn(['', className])} {...rest}>
      <button
        type="button"
        className="border-primary border-2 rounded-md p-1 text-primary hover:bg-primary hover:text-white"
        onClick={() => transactions.delete(itemId)}
      >
        <IconTrash size={24} />
      </button>
    </div>
  );
}
