'use client';

import { Button, DateInput, NumberInput, Select, TextInput } from '@/components/Elements';
import { uuid } from '@/lib/utils';
import { DataContext, ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { TransactionForm } from '@/values/modals';
import { format } from 'date-fns/format';
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

export function TransactionModal({ children }: ElementType) {
  const data = useContext(DataContext);
  const modals = useContext(ModalsContext);
  const transactionModal = modals.data.find((modal) => modal.id === 'transaction');
  const [form, setForm] = useState<TransactionForm>(transactionModal?.data);

  const changeFormValue = (field: keyof TransactionForm, newValue: any) => {
    setForm({ ...form, [field]: newValue });
  };

  const handleSubmit = (e: any, values: TransactionForm) => {
    e.preventDefault();

    if (transactionModal?.action === 'update') {
      const id = transactionModal.data.id;
      console.log('transaction-modal', id);

      data.transactions.update(id, values);
    } else {
      const transaction = {
        id: uuid(),
        ...values,
      };

      data.transactions.add(transaction);
    }
    transactionModal?.close();
  };

  useEffect(() => {
    setForm(transactionModal?.data);
  }, [transactionModal?.data]);

  return (
    <Modal title="Transação" id="transaction" className="h-[550px]">
      <form
        className="mt-5 flex flex-col justify-between h-full"
        onSubmit={(e) => handleSubmit(e, form)}
      >
        <div>
          <div className="mb-5">
            <span className="block mb-3">Nome</span>
            <TextInput
              value={form.name}
              setValue={(newValue: string) => changeFormValue('name', newValue)}
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5">
            <span className="block mb-3">Valor</span>
            <NumberInput
              value={form.value}
              setValue={(newValue: string) => changeFormValue('value', Number(newValue))}
              placeholder="Valor da transação"
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5 flex flex-row justify-between gap-5">
            <div className="flex-1">
              <span className="block mb-3">Categoria</span>
              <Select
                data={data.categories.map((category) => ({
                  name: category.name,
                  value: category.id,
                }))}
                active={form.categoryId}
                setActive={(newValue: number) => changeFormValue('categoryId', newValue)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <span className="block mb-3">Tipo</span>
              <Select
                data={paymentMethods}
                active={form.type}
                setActive={(newValue: number) => changeFormValue('type', newValue)}
                className="w-full"
              />
            </div>
          </div>
          <div className="mb-5">
            <span className="block mb-3">Valor</span>
            <DateInput
              value={format(form.date, 'yyyy-MM-dd')}
              setValue={(newValue: string) => changeFormValue('date', new Date(newValue))}
              placeholder="Data"
              className="pl-3 h-8"
            />
          </div>
        </div>

        <Button text="Salvar" type="submit" />
      </form>
    </Modal>
  );
}
