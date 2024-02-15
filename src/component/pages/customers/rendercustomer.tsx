import { Functionality, MobileNav, TopNav } from "../../core";
import CustomerList from "./customerlist";
import { Addicon } from "../../icon";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context";
import { calculateamount } from "../../helper";
type prop = { setaddPerson: React.Dispatch<React.SetStateAction<boolean>> };

export default function RenderCustomer({ setaddPerson }: prop) {
  const CurrentUser = useContext(CurrentUserContext)?.currentUser;
  const [List, SetList] = useState(CurrentUser?.accountholder);
  const [customeramount, setcustomeramount] = useState<number | undefined>(0);
  const [supplieramount, setsupplieramount] = useState<number | undefined>(0);
  useEffect(() => {
    setcustomeramount(() => {
      if (CurrentUser?.accountholder)
        return calculateamount(CurrentUser.accountholder, "customer");
    });
    setsupplieramount(() => {
      if (CurrentUser)
        return calculateamount(CurrentUser.accountholder, "supplier");
    });
  }, [CurrentUser]);

  return (
    <div className=" w-full h-full bg-[#f3f3ff] relative p-2 py-6  ">
      {/* hello */}
      <TopNav />
      <div className=" h-[1.3px] w-full bg-[#cacaca] mt-3"></div>
      <div className=" flex items-center justify-between py-2">
        <div className=" flex gap-2 ">
          {" "}
          <p className="text-[grey] font-normal">You'll get:</p>
          <p className=" text-[green] font-semibold">₹{customeramount}</p>
        </div>
        <div className=" flex gap-2 ">
          {" "}
          <p className="text-[grey] font-normal">You'll give:</p>
          <p className=" text-[#bd3b3b] font-semibold">₹{supplieramount}</p>
        </div>
      </div>
      <div className=" h-[1.3px] w-full  mt-2 relative z-50"></div>
      <Functionality List={List} setList={SetList} />
      <CustomerList List={List} setList={SetList} />

    <MobileNav/>

      <div  
        onClick={() => setaddPerson(true)}
        className=" w-12 h-12 bg-[#0f1525] absolute cursor-pointer rounded-lg  bottom-2 right-2 flex items-center justify-center max-[400px]:bottom-12 max-[400px]:right-1 "
      >
        <Addicon h={50} w={50} c="white" />
      </div>
    </div>
  );
}
