export type Info = {
  id: number;
  name: string;
  email: string;
};

export type AdminInfo = Info & {
  role: string;
  lastLogin: Date;
};
