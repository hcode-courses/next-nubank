export type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <button className="bg-primary hover:bg-secondary active:bg-tertiary p-3 w-[200px] rounded-full text-white text-lg">
      {text}
    </button>
  );
}
