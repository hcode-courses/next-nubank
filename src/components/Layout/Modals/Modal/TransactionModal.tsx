'use client';

import { DeleteTransaction } from '@/components/Actions';
import { Button, DateInput, NumberInput, Select, TextInput } from '@/components/Elements';
import { uuid } from '@/lib/utils';
import { DataContext, ModalsContext } from '@/providers';
import { TransactionForm } from '@/types/modal.types';
import { initialTransactionFormValues } from '@/values/data';
import { useContext, useEffect, useState } from 'react';
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
  const dataContext = useContext(DataContext);
  const modalsContext = useContext(ModalsContext);
  const transactionModal = modalsContext.data.find((modal) => modal.id === 'transaction');

  const categories = dataContext.categories.data;
  const [form, setForm] = useState<TransactionForm>(initialTransactionFormValues);

  const handleSubmit = (values: TransactionForm) => {
    if (transactionModal?.action === 'create') {
      const transaction = {
        id: uuid(),
        ...values,
      };

      dataContext.transactions.add(transaction);
    }

    if (transactionModal?.action === 'update') {
      const id = transactionModal.data.id;

      dataContext.transactions.update(id, values);
    }

    transactionModal?.close();
  };

  const changeFormValue = (field: keyof TransactionForm, newValue: any) => {
    setForm((form) => ({ ...form, [field]: newValue }));
  };

  useEffect(() => {
    setForm(transactionModal?.data);
  }, [transactionModal?.data]);

  return (
    <Modal title="Transação" id="transaction">
      <form
        className="mt-5 flex flex-col justify-between h-full"
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
              />
            </div>
            <div className="flex-1">
              <span className="block mb-3">Tipo</span>
              <Select
                items={paymentMethods}
                active={form.type}
                setActive={(newValue: string) => changeFormValue('type', newValue)}
              />
            </div>
          </div>
          <div className="mb-5">
            <span className="block mb-3">Data</span>
            <DateInput date={form.date} setValue={(newDate) => changeFormValue('date', newDate)} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          {transactionModal?.action === 'update' && (
            <DeleteTransaction itemId={transactionModal?.data.id} className="flex-1" />
          )}
          <Button className="flex-1" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
