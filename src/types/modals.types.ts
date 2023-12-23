export type Modal = {
  id: string;
  opened: boolean;
  open: () => void;
  close: () => void;
  data: any;
  setData: (value: any) => void;
  action?: 'update' | 'create' | undefined;
  setAction: (value: Modal['action']) => void;
};

export type ModalsContextType = {
  data: Modal[];
  close: (id: string) => void;
  open: (id: string) => void;
  openUpdate: (id: string, data: any) => void;
};
