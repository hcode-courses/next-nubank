import { uuid } from '@/lib/uuid';
import { Category, Transaction } from '@/types';
import { IconCar, IconShirt, IconToolsKitchen2 } from '@tabler/icons-react';

export const categories: Category[] = [
  {
    id: 1,
    icon: <IconCar />,
    name: 'Carro',
    value: 322,
    color: 'text-primary',
  },
  {
    id: 2,
    icon: <IconShirt />,
    name: 'Roupas',
    value: 200,
    color: 'text-secondary',
  },
  {
    id: 3,
    icon: <IconToolsKitchen2 />,
    name: 'Comida',
    value: 600,
    color: 'text-tertiary',
  },
];

export const transactions: Transaction[] = [
  {
    id: uuid(),
    name: 'Conserto do Carro',
    date: new Date(),
    value: 500,
    categoryId: 0,
  },
  {
    id: uuid(),
    name: 'Roupas novas',
    date: new Date(),
    value: 300,
    categoryId: 1,
  },
  {
    id: uuid(),
    name: 'Tênis novo',
    date: new Date(),
    value: 400,
    categoryId: 1,
  },
  {
    id: uuid(),
    name: 'Guloseimas',
    date: new Date(),
    value: 50,
    categoryId: 2,
  },
  {
    id: uuid(),
    name: 'Limpeza do carro',
    date: new Date(),
    value: 150,
    categoryId: 0,
  },
  {
    id: uuid(),
    name: 'Camisas',
    date: new Date(),
    value: 200,
    categoryId: 2,
  },
];
