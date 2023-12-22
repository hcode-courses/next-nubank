import { ElementType } from '@/types';

export type TabItem = {
  text: string;
  value: string;
};

export type TabProps = {
  data: TabItem[];
  active: string;
  setActive: (value: string) => void;
} & ElementType;

export function Tabs({ data, active, setActive, className }: TabProps) {
  const tabItems = data.map((item) => {
    const isActive = active == item.value;
    return (
      <button
        key={`tabs-item-${item.value}`}
        className={`flex flex-col items-center font-medium w-full`}
        onClick={() => setActive(item.value)}
      >
        <div
          className={` relative w-fit after:w-3/4 after:bg-primary after:content-[''] after:absolute after:translate-x-1/2 after:right-1/2 after:bottom-[-2px] ${
            isActive ? 'after:h-0.5' : 'after:h-0'
          }`}
        >
          {item.text}
        </div>
      </button>
    );
  });

  return (
    <div className={`flex flex-rows items-center text-primary min-w-[350px] ${className}`}>
      {tabItems}
    </div>
  );
}
