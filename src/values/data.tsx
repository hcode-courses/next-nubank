import { uuid } from '@/lib/uuid';
import { Category, Transaction } from '@/types';
import { IconCar, IconShirt, IconToolsKitchen2 } from '@tabler/icons-react';

export const categories: Category[] = [
  {
    id: 0,
    icon: <IconCar />,
    name: 'Carro',
    value: 322,
    color: 'text-primary',
  },
  {
    id: 1,
    icon: <IconShirt />,
    name: 'Roupas',
    value: 200,
    color: 'text-secondary',
  },
  {
    id: 2,
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
    date: new Date('01/02/2023'),
    value: 500,
    categoryId: 0,
    type: 'credit-card',
  },
  {
    id: uuid(),
    name: 'Roupas novas',
    date: new Date('01/02/2024'),
    value: 300,
    categoryId: 1,
    type: 'credit-card',
  },
  {
    id: uuid(),
    name: 'Tênis novo',
    date: new Date(),
    value: 400,
    categoryId: 1,
    type: 'debit-card',
  },
  {
    id: uuid(),
    name: 'Guloseimas',
    date: new Date(),
    value: 50,
    categoryId: 2,
    type: 'pix',
  },
  {
    id: uuid(),
    name: 'Limpeza do carro',
    date: new Date(),
    value: 150,
    categoryId: 0,
    type: 'credit-card',
  },
  {
    id: uuid(),
    name: 'Camisas',
    date: new Date(),
    value: 200,
    categoryId: 2,
    type: 'pix',
  },
];
