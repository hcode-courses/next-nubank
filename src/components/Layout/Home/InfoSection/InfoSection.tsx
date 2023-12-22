'use client';

import { Input, Select, SelectItem, TabItem, Tabs } from '@/components/Elements';
import { ElementType } from '@/types';
import { Category, ExpensesTab, ReleasesTab, TaxesTab } from '..';

type HomeInfoSectionProps = {
  search: string;
  activeTab: string;
  tabData: TabItem[];
  activeSelectData: SelectItem;
  expensesData: Category[];
  selectData: SelectItem[];

  setSearch: (value: string) => void;
  setActiveTab: (value: string) => void;
  setActiveSelectData: (value: SelectItem) => void;
} & ElementType;

export function HomeInfoSection({
  search,
  activeTab,
  tabData,
  activeSelectData,
  expensesData,
  selectData,

  setActiveTab,
  setSearch,
  setActiveSelectData,
}: HomeInfoSectionProps) {
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
          <ExpensesTab data={expensesData} />
        ) : activeTab === 'releases' ? (
          <ReleasesTab />
        ) : activeTab === 'taxes' ? (
          <TaxesTab />
        ) : null}
      </div>
    </>
  );
}
