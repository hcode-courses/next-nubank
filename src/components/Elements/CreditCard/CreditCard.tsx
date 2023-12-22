import { ElementType } from '@/types';
import { IconDeviceSdCard, IconWifi2 } from '@tabler/icons-react';
import Image from 'next/image';

type CreditCardProps = {
  name: string;
  logo: string;
  brand: string;
} & ElementType;

export function CreditCard({ name, brand, className }: CreditCardProps) {
  return (
    <div
      className={`bg-primary text-white p-4 rounded-lg relative min-w-[300px] h-[180px] z-[-1] ${className}`}
    >
      <div className="absolute top-6 right-6">
        <img className="h-8" src={brand} alt="Card Brand" />
      </div>
      <div className="mt-12">
        <div className="flex flex-row mb-2">
          <IconDeviceSdCard fill="#CCC" style={{ rotate: '90deg' }} size="40" />
          <IconWifi2 style={{ rotate: '90deg' }} size="40" />
        </div>
        <div className="flex flex-row items-center">
          <Image alt="Hcode Logo" src="/icons/hcode_logo.svg" width={40} height={40} />
          <span className="ml-4">{name}</span>
        </div>
      </div>
    </div>
  );
}
