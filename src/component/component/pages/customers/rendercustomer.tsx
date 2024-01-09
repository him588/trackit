import { useContext, useState } from "react";
import { UseCurrentPage } from "../../context";
import { Functionality } from "../../core";
import CustomerList from "./customerlist";

export default function RenderCustomer() {
  const { currentPage } = useContext(UseCurrentPage);
  const [customerCount, setcustomerCount] = useState(10);
  const [suppliersCount, setsupplierCount] = useState(20);
  return (
    <div className=" w-full h-full bg-[#fcfcfe] p-2 py-6  ">
      <div className=" flex gap-6   text-[15px] font-semibold">
        <p
          className={` cursor-pointer ${
            currentPage.customer ? " text-blue-600 " : "text-[#4f4f4f] "
          }`}
        >
          Customers{" "}
          <span
            className={` py-[2px] px-2 rounded-full ${
              currentPage.customer
                ? "bg-[#c0d6f7] text-blue-600"
                : "bg-[#e4e4e4]"
            }`}
          >
            {customerCount}
          </span>
        </p>
        <p
          className={` cursor-pointer ${
            currentPage.supplier ? " text-blue-600 " : "text-[#4f4f4f] "
          }`}
        >
          Suppliers{" "}
          <span
            className={` py-[2px] px-2 rounded-full ${
              currentPage.supplier
                ? "bg-[#c0d6f7] text-blue-600"
                : "bg-[#e4e4e4]"
            }`}
          >
            {suppliersCount}
          </span>
        </p>
      </div>
      <div className=" h-[1.3px] w-full bg-[#cacaca] mt-3"></div>
      <div className=" flex items-center justify-between py-2">
        <div className=" flex gap-2 ">
          {" "}
          <p className="text-[grey] font-normal">You'll give:</p>
          <p className=" text-[green] font-semibold">₹450</p>
        </div>
        <div className=" flex gap-2 ">
          {" "}
          <p className="text-[grey] font-normal">You'll get:</p>
          <p className=" text-[#bd3b3b] font-semibold">₹450</p>
        </div>
      </div>
      <div className=" h-[1.3px] w-full bg-[#cacaca] mt-2"></div>
      <Functionality />
      <CustomerList />
    </div>
  );
}
