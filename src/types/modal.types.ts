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

export const initialTransactionFormValues = {
  name: '',
  date: new Date(),
  value: 0,
  type: 'pix',
  categoryId: 0,
};

export type TransactionForm = typeof initialTransactionFormValues;
