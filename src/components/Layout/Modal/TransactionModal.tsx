'use client';

import { Button, Input, Select } from '@/components/Elements';
import { uuid } from '@/lib/uuid';
import { DataContext, ModalsContext } from '@/providers';
import { ElementType } from '@/types';
import { TransactionForm } from '@/values/modals';
import { useCallback, useContext, useEffect, useState } from 'react';
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

  const changeFormValue = useCallback(
    (field: keyof TransactionForm, newValue: any) => {
      setForm({ ...form, [field]: newValue });
    },
    [form]
  );

  const handleSubmit = useCallback((e: any, values: TransactionForm) => {
    e.preventDefault();

    if (transactionModal?.action === 'update') {
      const id = transactionModal.data.id;
      const transaction = {
        id,
        ...values,
      };

      console.log('atualizando');
      data.transactions.update(id, transaction);
    } else {
      const transaction = {
        id: uuid(),
        ...values,
      };

      console.log('criando');

      data.transactions.add(transaction);
    }
  }, []);

  useEffect(() => {
    setForm(transactionModal?.data);
  }, [transactionModal?.data]);

  return (
    <Modal title="Transação" id="transaction">
      <form
        className="mt-5 flex flex-col justify-between h-full"
        onSubmit={(e) => handleSubmit(e, form)}
      >
        <div>
          <div className="mb-5">
            <span className="block mb-3">Nome</span>
            <Input
              value={form.name}
              setValue={(newValue: string) => changeFormValue('name', newValue)}
              className="pl-3 h-8"
            />
          </div>
          <div className="mb-5">
            <span className="block mb-3">Valor</span>
            <Input
              value={String(form.value)}
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
        </div>

        <Button text="Salvar" type="submit" />
      </form>
    </Modal>
  );
}
