import { cn } from '@/lib/utils';

export function ModalsContainer({ children }: React.PropsWithChildren) {
  const isAnyModalOpen = true;

  return (
    <div
      id="modals-container"
      className={cn([isAnyModalOpen ? 'block' : 'hidden'], 'fixed w-screen h-screen top-0 z-30')}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full z-50">
          {children}
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-40"></div>
      </div>
    </div>
  );
}
