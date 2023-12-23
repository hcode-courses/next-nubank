export const initialTransactionFormValues = {
  name: 'Ola mundo',
  value: 0,
  categoryId: 0,
  type: 'pix',
  date: new Date(),
};

export type TransactionForm = typeof initialTransactionFormValues;
