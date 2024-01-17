export type DataContextType = {
  transactions: CRUD<Transaction>;
  categories: CRUD<Category>;
};

type CRUD<T extends Category | Transaction> = {
  data: T[];
  add: (value: T) => void;
  update: (id: T['id'], values: Omit<T, 'id'>) => void;
  delete: (id: T['id']) => void;
};

export type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
};

export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
  type: string;
};
