export type Modal = {
  id: string;
  opened: boolean;
  open: () => void;
  close: () => void;
};

export type ModalsContextType = {
  data: Modal[];
  close: (id: string) => void;
  open: (id: string) => void;
};
