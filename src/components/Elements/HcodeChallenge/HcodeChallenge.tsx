import { IconStarFilled } from '@tabler/icons-react';

export function HcodeChallenge() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-row justify-center items-center gap-5">
        <IconStarFilled className="text-yellow-500" />
        <h3 className="text-2xl font-bold">Desafio</h3>
      </div>
      <div>Tente criar alguma coisa aqui seguindo as instruções!</div>
    </div>
  );
}
