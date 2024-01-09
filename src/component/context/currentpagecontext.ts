import { createContext } from "react";
import { findCurrentPage } from "../type";
import { Dispatch, SetStateAction } from "react";
const obj = {
  customer: true,
  supplier: false,
  sales: false,
  purchase: false,
  cashbook: false,
  setting: false,
};
const UseCurrentPage = createContext<{
  currentPage: findCurrentPage;
  setcurrentPage: Dispatch<SetStateAction<findCurrentPage>>;
}>({ currentPage: obj, setcurrentPage: () => obj });
export default UseCurrentPage;
