import { useContext } from "react";
import { useFindpage } from "../../custom";
import { UseCurrentPage } from "../../context";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
    const ActivePage=useFindpage()
    const currentPage=useContext(UseCurrentPage).currentPage
    const Navigate=useNavigate()
  return <div className=" flex gap-6  w-full  text-[15px] font-semibold">
  <p
    className={` cursor-pointer ${
      currentPage.sales ? " text-blue-600 " : "text-[#4f4f4f] "
    }`}
    onClick={() => {
      ActivePage("sales");
      Navigate("/Sales");
    }}
  >
    Sales
 </p>
  <p className={` cursor-pointer ${currentPage.purchase ? " text-blue-600 " : "text-[#4f4f4f] "}`}
    onClick={() => {
      ActivePage("purchase");
      Navigate("/Purchase");
    }}
  >
    Purchase
 </p>
 {/* <p className={` cursor-pointer ${currentPage.cashbook ? " text-blue-600 " : "text-[#4f4f4f] "}`}
    onClick={() => {
      ActivePage("cashbook");
      Navigate("/Cashbook");
    }}
  >
    Cashbook
 </p> */}
</div>
}

