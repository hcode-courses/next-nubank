import { uuid } from '@/lib/uuid';
import { Category, Transaction } from '@/types';
import { IconCar, IconShirt, IconToolsKitchen2 } from '@tabler/icons-react';

export const categories: Category[] = [
  {
    icon: <IconCar />,
    name: 'Carro',
    value: 322,
    color: 'text-primary',
  },
  {
    icon: <IconShirt />,
    name: 'Roupas',
    value: 200,
    color: 'text-secondary',
  },
  {
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
    category: 'Carro',
    icon: <IconCar />,
  },
  {
    id: uuid(),
    name: 'Roupas novas',
    date: new Date(),
    value: 300,
    category: 'Roupas',
    icon: <IconShirt />,
  },
  {
    id: uuid(),
    name: 'Tênis novo',
    date: new Date(),
    value: 400,
    category: 'Roupa',
    icon: <IconShirt />,
  },
  {
    id: uuid(),
    name: 'Guloseimas',
    date: new Date(),
    value: 50,
    category: 'Comida',
    icon: <IconToolsKitchen2 />,
  },
  {
    id: uuid(),
    name: 'Limpeza do carro',
    date: new Date(),
    value: 150,
    category: 'Carro',
    icon: <IconCar />,
  },
  {
    id: uuid(),
    name: 'Camisas',
    date: new Date(),
    value: 200,
    category: 'Roupa',
    icon: <IconShirt />,
  },
];
