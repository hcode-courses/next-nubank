export const initialTransactionFormValues = {
  name: '',
  value: 0,
  categoryId: 0,
  type: 'pix',
  date: new Date(),
};

export type TransactionForm = typeof initialTransactionFormValues;
