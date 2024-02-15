import { useContext } from "react";
import { UseCurrentPage } from "../../context";
import { useFindpage } from "../../custom";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
    const currentpage=useContext(UseCurrentPage).currentPage
    const ActivePage=useFindpage()
    const navigate=useNavigate()
  return <div className=" w-[105%] h-[50px] px-4 py-2 -ml-2 text-base  flex justify-between items-center font-semibold bg-[#0f1525] text-white  min-[400px]:hidden -mt-[30px] relative ">
    <p onClick={() => {
          ActivePage("customer");
          navigate("/Customers");
        }} className={` cursor-pointer ${currentpage.customer||currentpage.supplier?" underline-offset-4 text-[16px] underline decoration-2 "   :""} `}>Parties</p>
    <p onClick={() => {
          ActivePage("sales");
          navigate("/Sales");
        }} className={` cursor-pointer ${currentpage.purchase||currentpage.sales||currentpage.cashbook?" underline-offset-4 text-[16px] underline decoration-2":""} `}>Bills</p>
    <p onClick={() => {
          ActivePage("setting");
          navigate("/Settings");
        }} className={` cursor-pointer ${currentpage.setting?"underline-offset-4 text-[16px] underline decoration-2":""} `}>Settings</p>
  </div>;
}

