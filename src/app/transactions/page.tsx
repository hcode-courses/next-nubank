export default function Transactions() {
  const totalExpenses = 0;

  return (
    <div className="flex flex-col p-6 pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-3xl mb-5">Transações</h1>
        {/* Botão adicionar transação */}
      </div>
      <div className="flex flex-row flex-wrap gap-x-[300px] gap-y-10 justify-center w-full p-12 bg-contrast rounded-xl mb-10">
        <div>
          <span className="font-medium">Total de gastos:</span> R${totalExpenses}
        </div>
      </div>
    </div>
  );
}
