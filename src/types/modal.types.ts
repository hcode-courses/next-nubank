import { initialCategoryFormValues, initialTransactionFormValues } from '@/values/data';

export type Modal = {
  id: string;
  opened: boolean;
  open: () => void;
  close: () => void;
  data: any;
  setData: (value: any) => void;
  action: 'update' | 'create' | undefined;
  setAction: (value: Modal['action']) => void;
};

export type ModalsContextType = {
  data: Modal[];
  open: (id: string) => void;
  close: (id: string) => void;
  openUpdate: (id: string, data: any) => void;
};

export type TransactionForm = typeof initialTransactionFormValues;
export type CategoryForm = typeof initialCategoryFormValues;
