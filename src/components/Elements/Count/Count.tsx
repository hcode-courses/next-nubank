'use client';
import { useState } from 'react';

type CountProps = {
  initialValue: number;
  increment?: number;
};

export function Count({ initialValue, increment }: CountProps) {
  const [count, setCount] = useState(initialValue);
  const total = count + 5;

  function handleClick(inc: number) {
    setCount(count + inc);
  }

  return (
    <>
      <span></span>
      <div className="flex flex-col items-center gap-5">
        <span className="text-lg">{count}</span>
        <span className="text-lg">{total}</span>
        <button className="btn" onClick={() => handleClick(increment || 10)}>
          Incrementar
        </button>
      </div>
    </>
  );
}
