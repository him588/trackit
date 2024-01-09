type findCurrentPage = {
  customer: boolean;
  supplier: boolean;
  sales: boolean;
  purchase: boolean;
  cashbook: boolean;
  setting: boolean;
};
type detail = {
  h: number;
  w: number;
  c: string;
};
type entry = {
  date: string;
  type: string;
  argument: string;
  amount: number;
};
type person = {
  readonly id: string;
  name: string;
  date: string;
  type: string;
  entries: entry[] | null;
};
type user = {
  name: string;
  email: string;
  password: string;
  accountholder: person[] | null;
};
export type { findCurrentPage, detail, user, person, entry };
