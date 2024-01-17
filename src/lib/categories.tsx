import { Category, Transaction } from '@/types';
import {
  IconBeach,
  IconCar,
  IconShirt,
  IconShoppingCart,
  IconToolsKitchen2,
} from '@tabler/icons-react';

export function getCategoryItems(categoryId: number, transactions: Transaction[]) {
  return transactions.filter((transaction) => transaction.categoryId === categoryId);
}

export function getCategoryById(categoryId: number, categories: Category[]) {
  return categories.find((category) => category.id === categoryId);
}

export function getCategoryIcon(icon: string, categories: Category[]) {
  if (icon === 'icon-shirt') {
    return <IconShirt />;
  }
  if (icon === 'icon-car') {
    return <IconCar />;
  }
  if (icon === 'icon-kitchen') {
    return <IconToolsKitchen2 />;
  }
  if (icon === 'icon-shopping-cart') {
    return <IconShoppingCart />;
  }
  if (icon === 'icon-recreation') {
    return <IconBeach />;
  }
}

export function getNextCategoryId(categories: Category[]) {
  let latestId = 0;

  categories.forEach((category) => (category.id > latestId ? (latestId = category.id) : null));

  return latestId + 1;
}
