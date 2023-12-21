import { Button } from '@/components/Elements/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button text="Botão" />
    </div>
  );
}
