import { DataContext, ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { IconTrash } from '@tabler/icons-react';
import { useContext } from 'react';

export type DeleteCategoryProps = {
  itemId: number;
} & ElementType;

export function DeleteCategory({ itemId, className }: DeleteCategoryProps) {
  const dataContext = useContext(DataContext);
  const modalsContext = useContext(ModalsContext);

  const categoryModal = modalsContext.data.find((modal) => modal.id === 'category');

  const categories = dataContext.categories;

  return (
    <div className={className}>
      <div className="tooltip" data-tip="Deletar Transação">
        <button
          type="button"
          className="btn btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
          onClick={() => {
            categoryModal?.close();
            categories.delete(itemId);
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
