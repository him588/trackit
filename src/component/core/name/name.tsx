import { useContext, useEffect, useState } from "react";
import { CurrentUserContext, SelectedPersonContext } from "../../context";
import { getDateDifference } from "../../helper";
// import { dateDifferenceInDays } from "../../helper";

export default function Name({ id }: { id: string }) {
  const CurrentUser = useContext(CurrentUserContext)?.currentUser;
  const [gap, setgap] = useState<string>();
  const account = CurrentUser?.accountholder.find((user) => user.id === id);
  const FirstChar = account?.name.charAt(0);
  const SetSelectedPerson = useContext(
    SelectedPersonContext
  )?.setselectedPerson;
  const prevDate = account?.date;
  function handleclick() {
    if (SetSelectedPerson && account) {
      SetSelectedPerson(account);
    }
  }
  useEffect(() => {
    setgap(() => {
      if (prevDate) {
        return getDateDifference(prevDate);
      }
    });
  }, [prevDate]);
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
          <p className="text-[grey] font-normal">You'll give</p>
          <p className=" text-[green] text-right font-semibold">₹450</p>
        </div>
      </div>
    </div>
  );
}
