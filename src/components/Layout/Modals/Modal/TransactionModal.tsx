'use client';

import { Button, DateInput, NumberInput, Select, TextInput } from '@/components/Elements';
import { TransactionForm, initialTransactionFormValues } from '@/types/modal.types';
import { categories } from '@/values/data';
import { useState } from 'react';
import { Modal } from '.';

const paymentMethods = [
  {
    name: 'Pix',
    value: 'pix',
  },
  {
    name: 'Cartão de crédito',
    value: 'credit-card',
  },
  {
    name: 'Cartão de débito',
    value: 'debit-card',
  },
];

export function TransactionModal() {
  const [form, setForm] = useState<TransactionForm>(initialTransactionFormValues);

  const handleSubmit = (values: TransactionForm) => {
    console.log('valores enviados', values);
  };

  const changeFormValue = (field: keyof TransactionForm, newValue: any) => {
    setForm((form) => ({ ...form, [field]: newValue }));
  };

  return (
    <Modal title="Transação" id="transaction">
      <form
        className="mt-5 flex flex-col justify-between h-full"
        onSubmit={(e) => handleSubmit(form)}
      >
        <div>
          <div className="mb-5">
            <span className="block mb-3">Nome</span>
            <TextInput
              value={form.name}
              setValue={(newValue: string) => changeFormValue('name', newValue)}
              placeholder="Nome da transação"
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5">
            <span className="block mb-3">Valor</span>
            <NumberInput
              value={form.value}
              setValue={(newValue: number) => changeFormValue('value', newValue)}
              placeholder="Valor da transação"
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5 flex flex-row justify-between gap-5">
            <div className="flex-1">
              <span className="block mb-3">Categoria</span>
              <Select
                items={categories.map((category) => ({
                  name: category.name,
                  value: category.id,
                }))}
                active={form.categoryId}
                setActive={(newValue: number) => changeFormValue('categoryId', Number(newValue))}
                wrapperClassName="w-full"
              />
            </div>
            <div className="flex-1">
              <span className="block mb-3">Tipo</span>
              <Select
                items={paymentMethods}
                active={form.type}
                setActive={(newValue: string) => changeFormValue('type', newValue)}
                wrapperClassName="w-full"
              />
            </div>
          </div>
          <div className="mb-5">
            <span className="block mb-3">Data</span>
            <DateInput date={form.date} setValue={(newDate) => changeFormValue('date', newDate)} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          {/* <DeleteTransaction /> */}

          <Button className="flex-1" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
