'use client';

import { ElementType } from '@/types';
import { useEffect, useRef, useState } from 'react';

type ProgressSection = {
  color: string;
  value: number;
};

type ProgressProps = {
  data: ProgressSection[];
} & ElementType;

export function Progress({ data, className }: ProgressProps) {
  let accSectionsHeight = 0;
  const total = data.reduce((acc, item) => acc + item.value, 0);

  const ref = useRef<HTMLHeadingElement>(null);
  let [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    setParentHeight(ref.current ? ref.current.offsetHeight : 0);
  }, [ref.current]);

  const sections = data.map((item, index) => {
    const height = (item.value / total) * parentHeight + accSectionsHeight;
    const backgroundColor = `var(-${item.color.replace('text', '')})`;
    const zIndex = data.length - index - 1;

    accSectionsHeight += (item.value / total) * parentHeight;
    return (
      <div
        key={`section-item-${item.color}`}
        style={{ height, backgroundColor, zIndex }}
        className={`absolute bottom-0 w-full rounded-full`}
      ></div>
    );
  });

  return (
    <div
      ref={ref}
      style={{ backgroundColor: '#DDD' }}
      className={`relative min-h-[100px] w-2 rounded-full ${className}`}
    >
      {sections}
    </div>
  );
}
