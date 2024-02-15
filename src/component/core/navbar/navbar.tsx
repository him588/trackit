import React, { useContext } from "react";
import {
  CashbookIcon,
  CustomerIcon,
  PurchaeIcon,
  SalesIcon,
  SettingIcon,
  SuppliesIcon,
} from "../../icon";
import Profile from "./profile";
import { Link } from "react-router-dom";
import { UseCurrentPage } from "../../context";
import { useFindpage } from "../../custom";
export default function Navbar() {
  const Activepage = useFindpage();
  const { currentPage } = useContext(UseCurrentPage);
  return (
    <div className=" w-[200px] min-h-screen py-1 bg-[#0f1525] px-1 max-[400px]:hidden">
      <h1 className=" text-center text-[45px] text-white font-semibold">
        Trackit
      </h1>
      <div>
        <Profile />
      </div>
      <div className=" mt-8 px-2">
        <p className=" text-lg text-white">Parties</p>
        <div className=" mt-2">
          <Link
            to={"/Customers"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.customer
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("customer")}
          >
            <CustomerIcon
              h={20}
              w={20}
              c={currentPage.customer ? "white" : "#3d425a"}
            />
            <p className="  text-lg">Customers</p>
          </Link>
          <Link
            to={"/Suppliers"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.supplier
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("supplier")}
          >
            <SuppliesIcon
              h={22}
              w={22}
              c={currentPage.supplier ? "white" : "#3d425a"}
            />
            <p className="  text-lg">Suppliers</p>
          </Link>
        </div>
        <p className=" text-lg text-white mt-3">Bills</p>
        <div className=" mt-2">
          <Link
            to={"/Sales"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.sales ? "text-white bg-[#1b2b4b]" : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("sales")}
          >
            <SalesIcon
              h={20}
              w={20}
              c={currentPage.sales ? "white" : "#3d425a"}
            />
            <p className=" text-lg">Sales</p>
          </Link>
          <Link
            to={"/Purchase"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.purchase
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("purchase")}
          >
            <PurchaeIcon
              h={20}
              w={20}
              c={currentPage.purchase ? "white" : "#3d425a"}
            />
            <p className="  text-lg">Purchase</p>
          </Link>
          <Link
            to={"/Cashbook"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.cashbook
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("cashbook")}
          >
            <CashbookIcon
              h={20}
              w={20}
              c={currentPage.cashbook ? "white" : "#3d425a"}
            />
            <p className="  text-lg">Cashbook</p>
          </Link>
        </div>
        <p className=" text-lg text-white mt-3">Setting</p>
        <div className=" mt-2">
          <Link
            to={""}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.setting ? "text-white bg-[#1b2b4b]" : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("setting")}
          >
            <SettingIcon
              h={30}
              w={25}
              c={currentPage.setting ? "white" : "#3d425a"}
            />

            <p className=" text-lg">Setting</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
