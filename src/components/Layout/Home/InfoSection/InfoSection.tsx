'use client';

import { Input, Select, Tabs } from '@/components/Elements';
import { DataContext } from '@/providers/DataProvider';
import { ElementType } from '@/types';
import { useContext, useState } from 'react';
import { ExpensesTab, ReleasesTab, TaxesTab } from '..';

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

type HomeInfoSectionProps = {
  search: string;
  setSearch: (value: string) => void;
} & ElementType;

export function HomeInfoSection({
  search,

  setSearch,
}: HomeInfoSectionProps) {
  const [activeTab, setActiveTab] = useState(tabData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0]);

  const data = useContext(DataContext);

  return (
    <>
      <Input
        className="hidden xl:block"
        value={search}
        setValue={setSearch}
        placeholder="Pode perguntar"
      />
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-10">
        <Tabs data={tabData} active={activeTab} setActive={setActiveTab} />
        <Select active={activeSelectData} setActive={setActiveSelectData} data={selectData} />
      </div>
      <div className="w-full">
        {activeTab === 'expenses' ? (
          <ExpensesTab data={data.categories} />
        ) : activeTab === 'releases' ? (
          <ReleasesTab />
        ) : activeTab === 'taxes' ? (
          <TaxesTab />
        ) : null}
      </div>
    </>
  );
}
