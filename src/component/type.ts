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
  msdid: number;
  date: string;
  time: string;
  type: string;
  argument: string;
  amount: number;
  Ispaymentrecieved: boolean;
};
type person = {
  readonly id: string;
  name: string;
  date: string;
  type: string;
  entries: entry[];
  color: string;
  time: string;
};
type user = {
  name: string;
  email: string;
  password: string;
  accountholder: person[];
};
export type { findCurrentPage, detail, user, person, entry };
