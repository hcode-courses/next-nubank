'use client';

import { Button, CreditCard } from '@/components/Elements';
import { HomeInfoSection } from '@/components/Layout';
import {
  IconArrowRight,
  IconCar,
  IconInfoCircle,
  IconShirt,
  IconToolsKitchen2,
} from '@tabler/icons-react';
import { useState } from 'react';

const tabData = [
  {
    text: 'Lançamentos',
    value: 'releases',
  },
  {
    text: 'Despesas',
    value: 'expenses',
  },

  {
    text: 'Taxas',
    value: 'taxes',
  },
];

const selectData = [
  {
    text: 'Dia',
    value: 'day',
  },
  {
    text: 'Mês',
    value: 'month',
  },
  {
    text: 'Ano',
    value: 'Year',
  },
];

const expensesData = [
  {
    icon: <IconCar />,
    text: 'Carro',
    value: 322,
    color: 'text-primary',
  },
  {
    icon: <IconShirt />,
    text: 'Roupas',
    value: 200,
    color: 'text-secondary',
  },
  {
    icon: <IconToolsKitchen2 />,
    text: 'Comida',
    value: 600,
    color: 'text-tertiary',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState(tabData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0]);

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-col items-start justify-start mb-20">
          <h1 className="text-3xl font-bold">Olá, Mateus!</h1>
          <span className="max-w-[320px]">
            Bem-vindo de volta. Aqui está uma visão geral da sua conta.
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Cartão de Crédito</h2>
          <div className="flex flex-row flex-wrap gap-x-10 gap-y-5 items-center w-full">
            <CreditCard
              name="Mateus Queirós"
              logo="/icons/hcode_logo.svg"
              brand="/icons/mastercard.svg"
            />
            <div className="max-w-[200px]">
              <div className="flex flex-row items-center">
                <IconInfoCircle />
                <h3 className="text-1xl font-bold ml-2 text-xl">Info</h3>
              </div>

              <span className="text-sm">
                Seu vencimento é no dia <span className="font-bold">27/08/2023</span>{' '}
              </span>
              <Button
                text="Saiba mais"
                rightSection={<IconArrowRight style={{ rotate: '-45deg' }} size={20} />}
                variant="subtle"
                className="mt-2 px-0 py-1 min-w-0"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10 mt-10">
            <Button text="Pagar fatura" />
            <Button
              text="Gerar boleto"
              variant="subtle"
              rightSection={<IconArrowRight style={{ rotate: '-45deg' }} size={20} />}
            />
          </div>
        </div>
        <div className="block xl:hidden">
          <HomeInfoSection
            {...{
              search,
              activeTab,
              tabData,
              selectData,
              activeSelectData,
              expensesData,
              setSearch,
              setActiveTab,
              setActiveSelectData,
            }}
          />
        </div>
      </div>
      <div className="bg-bg-contrast flex-1 h-screen py-6 px-20 w-fit hidden xl:block">
        <HomeInfoSection
          {...{
            search,
            activeTab,
            tabData,
            selectData,
            activeSelectData,
            expensesData,
            setSearch,
            setActiveTab,
            setActiveSelectData,
          }}
        />
      </div>
    </div>
  );
}
