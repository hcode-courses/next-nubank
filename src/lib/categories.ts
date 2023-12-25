import { Category, Transaction } from '@/types';

export function getCategoryById(categoryId: number, categories: Category[]) {
  return categories.find((category) => category.id === categoryId);
}

export function getCategoryItems(categoryId: number, transactions: Transaction[]) {
  return transactions.filter((transaction) => transaction.categoryId === categoryId);
}
