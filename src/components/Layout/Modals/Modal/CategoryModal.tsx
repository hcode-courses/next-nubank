'use client';

import { DeleteCategory } from '@/components/Actions';
import { Button, Select, TextInput } from '@/components/Elements';
import { getNextCategoryId } from '@/lib/categories';
import { DataContext, ModalsContext } from '@/providers';
import { CategoryForm } from '@/types/modal.types';
import { useContext, useEffect, useState } from 'react';
import { Modal } from '.';

const categoryIcons = [
  {
    name: 'Carro',
    value: 'icon-car',
  },
  {
    name: 'Roupas',
    value: 'icon-shirt',
  },
  {
    name: 'Comida',
    value: 'icon-kitchen',
  },
  {
    name: 'Mercado',
    value: 'icon-shopping-cart',
  },
  {
    name: 'Lazer',
    value: 'icon-recreation',
  },
];

const categoryColors = [
  {
    name: 'Primária',
    value: 'text-primary',
  },
  {
    name: 'Secundária',
    value: 'text-secondary',
  },
  {
    name: 'Terciária',
    value: 'text-tertiary',
  },
];

export function CategoryModal() {
  const dataContext = useContext(DataContext);
  const modalsContext = useContext(ModalsContext);
  const categoryModal = modalsContext.data.find((modal) => modal.id === 'category');

  const categories = dataContext.categories.data;
  const [form, setForm] = useState<CategoryForm>(categoryModal?.data);

  const changeFormValue = (field: keyof CategoryForm, newValue: any) => {
    setForm((form) => ({ ...form, [field]: newValue }));
  };

  const handleSubmit = (values: CategoryForm) => {
    if (categoryModal?.action === 'create') {
      const category = {
        id: getNextCategoryId(categories),
        ...values,
      };

      dataContext.categories.add(category);
    }
    if (categoryModal?.action === 'update') {
      const id = categoryModal.data.id;
      dataContext.categories.update(id, values);
    }

    categoryModal?.close();
  };

  useEffect(() => {
    setForm(categoryModal?.data);
  }, [categoryModal?.data]);

  return (
    <Modal id="category" title="Categoria">
      <form
        className="flex flex-col mt-5 justify-between h-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <div>
          <div className="mb-5">
            <span className="block mb-3">Nome</span>
            <TextInput
              value={form.name}
              setValue={(newValue: string) => changeFormValue('name', newValue)}
              placeholder="Nome da categoria"
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5">
            <span className="block mb-3">Cor</span>
            <Select
              items={categoryColors}
              active={form.color}
              setActive={(newValue: string) => changeFormValue('color', newValue)}
              placeholder="Cor da categoria"
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5">
            <span className="block mb-3">Ícone</span>
            <Select
              items={categoryIcons}
              active={form.icon}
              setActive={(newValue: string) => changeFormValue('icon', newValue)}
              placeholder="Ícone da categoria"
              className="pl-3 h-8"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          {categoryModal?.action === 'update' && (
            <DeleteCategory className="flex-1" itemId={categoryModal?.data.id} />
          )}
          <Button type="submit" className="flex-1">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
