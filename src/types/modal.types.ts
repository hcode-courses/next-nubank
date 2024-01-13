export const initialTransactionFormValues = {
  name: '',
  date: new Date(),
  value: 0,
  type: 'pix',
  categoryId: 0,
};

export type TransactionForm = typeof initialTransactionFormValues;
