import { useContext, useEffect, useState } from "react";
import { CurrentUserContext, UseCurrentPage } from "../../context";
import { useFindpage } from "../../custom";
import { useNavigate } from "react-router-dom";
import { calculatelength } from "../../helper";

export default function TopNav() {
  const currentPage = useContext(UseCurrentPage).currentPage;
  const currentUser = useContext(CurrentUserContext)?.currentUser;
  const ActivePage = useFindpage();
  const Navigate = useNavigate();
  const [customerCount, setcustomerCount] = useState<number | undefined>(0);
  const [suppliersCount, setsupplierCount] = useState<number | undefined>(0);
  useEffect(() => {
    setcustomerCount(() => {
      if (currentUser?.accountholder) {
        return calculatelength(currentUser.accountholder, "customer");
      }
    });
    setsupplierCount(() => {
      if (currentUser?.accountholder) {
        return calculatelength(currentUser.accountholder, "supplier");
      }
    });
  }, [setcustomerCount, setsupplierCount, currentUser]);
  return (
    <div className=" flex gap-6  w-full  text-[15px] font-semibold">
      <p
        className={` cursor-pointer ${
          currentPage.customer ? " text-blue-600 " : "text-[#4f4f4f] "
        }`}
        onClick={() => {
          ActivePage("customer");
          Navigate("/Customers");
        }}
      >
        Customers{" "}
        <span
          className={` py-[2px] px-2 rounded-full ${
            currentPage.customer ? "bg-[#c0d6f7] text-blue-600" : "bg-[#e4e4e4]"
          }`}
        >
          {customerCount}
        </span>
      </p>
      <p
        className={` cursor-pointer ${
          currentPage.supplier ? " text-blue-600 " : "text-[#4f4f4f] "
        }`}
        onClick={() => {
          ActivePage("supplier");
          Navigate("/Suppliers");
        }}
      >
        Suppliers{" "}
        <span
          className={` py-[2px] px-2 rounded-full ${
            currentPage.supplier ? "bg-[#c0d6f7] text-blue-600" : "bg-[#e4e4e4]"
          }`}
        >
          {suppliersCount}
        </span>
      </p>
    </div>
  );
}
