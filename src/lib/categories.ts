import { Category } from '@/types';

export function getCategoryById(categoryId: number, categories: Category[]) {
  return categories.find((category) => category.id === categoryId);
}
