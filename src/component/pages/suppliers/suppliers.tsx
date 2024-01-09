import { useContext } from "react";
import { UseCurrentPage } from "../../context";
import { Navbar } from "../../core";

export default function Suppliers() {
  const { currentPage } = useContext(UseCurrentPage);
  return (
    <div className=" flex">
      <Navbar />
      <div className=" w-[40%] h-full bg-[#fcfcfe] p-2 py-6  ">
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
                  : "bg-[#d2d2d2]"
              }`}
            >
              {10}
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
                  : "bg-[#d2d2d2]"
              }`}
            >
              {20}
            </span>
          </p>
        </div>
        <div className=" h-[1.2px] w-full bg-[#cacaca] mt-3"></div>
      </div>
    </div>
  );
}
