'use client';

import { Select, Tabs, TextInput } from '@/components/Elements';
import { DataContext } from '@/providers/DataProvider';
import { ElementType } from '@/types';
import { IconSearch } from '@tabler/icons-react';
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
    name: 'Dia',
    value: 'day',
  },
  {
    name: 'Mês',
    value: 'month',
  },
  {
    name: 'Ano',
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
  const [activeTab, setActiveTab] = useState<number | string>(tabData[1].value);
  const [activeSelectData, setActiveSelectData] = useState(selectData[0].value);

  const data = useContext(DataContext);

  return (
    <>
      <TextInput
        wrapperClassName="hidden xl:block"
        value={search}
        setValue={setSearch}
        placeholder="Pode perguntar"
        leftSection={<IconSearch size={20} className="absolute right-4 top-0 translate-y-3" />}
      />
      <div className="flex flex-row flex-wrap justify-between gap-5 mt-10">
        <Tabs items={tabData} active={activeTab} setActive={setActiveTab} />
        <Select active={activeSelectData} setActive={setActiveSelectData} items={selectData} />
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
