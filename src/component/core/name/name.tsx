import { useContext, useEffect, useState } from "react";
import {  SelectedPersonContext } from "../../context";
import { getDateDifference } from "../../helper";
import { person } from "../../type";
import { calculateveryentryamount } from "../../helper";
import { useNavigate } from "react-router-dom";
// import { dateDifferenceInDays } from "../../helper";

export default function Name({ account}: { account: person }) {
  // const CurrentUser = useContext(CurrentUserContext)?.currentUser;
  const [gap, setgap] = useState<string>();
  const navigate=useNavigate()
  const [amount,setamount]=useState(0)
  // const account = CurrentUser?.accountholder.find((user) => user.id === id);
  const FirstChar = account?.name.charAt(0);
  const SetSelectedPerson = useContext(
    SelectedPersonContext
  )?.setselectedPerson;
  function handleclick() {
    console.log(window.innerWidth)
    if(window.innerWidth<400){
      navigate(`/person/${+account?.id}`)
    }
    if (SetSelectedPerson && account) {
      SetSelectedPerson(account);
    }
  }
  useEffect(() => {
    setgap(() => {
      if (account?.date) {
        return getDateDifference(account.date);
      }
    });
    setamount(calculateveryentryamount(account))
  }, [account?.date,account]);
  return (
    <div
      onClick={handleclick}
      className=" w-full flex flex-col  gap-1 p-1 rounded-md  hover:bg-[#f0f0f8] cursor-pointer"
    >
      <div className="flex items-center gap-2 relative">
        <div
          style={{ backgroundColor: account?.color }}
          className={` h-[45px] w-[45px]  text-[white] rounded-full  text-3xl font-normal flex items-center justify-center `}
        >
          {FirstChar?.toUpperCase()}
        </div>
        <div>
          <p className=" text-lg font-normal text-camel-case">
            {account?.name}
          </p>
          <p className=" text-sm text-[#6a6969]">{`${gap} ago`}</p>
        </div>
        <div className=" absolute right-0">
          <p className="text-[grey] font-normal">{account?.type==="customer"?"You'll get":"You'll give"}</p>
          <p className={`  text-right font-semibold ${account?.type==="customer"?"text-[green]":"text-[#bd3b3b]"}`}>₹{amount}</p>
        </div>
      </div>
    </div>
  );
}
