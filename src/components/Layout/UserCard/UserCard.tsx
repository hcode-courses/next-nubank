export function UserCard() {
  return (
    <div className=" flex flex-row justify-center items-center p-4">
      <img
        className="border-2 rounded-full"
        src="https://i.pravatar.cc/300"
        alt="Avatar"
        width={70}
        height={70}
      />
      <h3 className="ml-5 text-lg font-bold">Mateus Queirós</h3>
    </div>
  );
}
