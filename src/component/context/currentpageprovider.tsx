import React, { ReactNode, useState } from "react";
import UseCurrentPage from "./currentpagecontext";
import { findCurrentPage } from "../type";

const CurrentPageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setcurrentPage] = useState<findCurrentPage>({
    customer: true,
    supplier: false,
    sales: false,
    purchase: false,
    cashbook: false,
    setting: false,
  });

  return (
    <UseCurrentPage.Provider value={{ currentPage, setcurrentPage }}>
      {children}
    </UseCurrentPage.Provider>
  );
};

export default CurrentPageProvider;
