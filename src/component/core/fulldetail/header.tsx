import { useContext } from "react";
import { SelectedPersonContext } from "../../context";
import { DotIcon, SearchIcon } from "../../icon";
import { getDateDifference } from "../../helper";
export default function Insideheader() {
  const PersonDetails = useContext(SelectedPersonContext)?.selectedPerson;
  const FirstChar = PersonDetails?.name.charAt(0);
  const SetName = `${FirstChar}${PersonDetails?.name.slice(
    1,
    PersonDetails.name.length
  )}`;
  const targetDate = PersonDetails?.date;
  let diff;
  if (targetDate) {
    diff = getDateDifference(PersonDetails?.date);
  }
  // const diff=
  return (
    <div className=" p-2 h-[100%] relative z-20 bg-[#f3f3fc] border-b-[1.5px] border-solid border-[#cacaca] outline-none">
      <div className="w-full h-[40px] flex items-center gap-5 relative">
        <div
          style={{ backgroundColor: PersonDetails?.color }}
          className=" h-[45px] w-[45px]  text-[white] rounded-full  text-3xl font-normal flex items-center justify-center "
        >
          {FirstChar}
        </div>
        <div>
          <div className=" text-lg font-semibold text-[#16233e]">{SetName}</div>
          <p className=" text-[grey] text-sm">{diff} ago</p>
        </div>
        <div className=" absolute right-1 flex gap-1">
          <div className=" cursor-pointer">
            <SearchIcon h={25} w={25} c="#0f1525" />
          </div>
          <div className=" cursor-pointer">
            <DotIcon h={25} w={25} c="#0f1525" />
          </div>
        </div>
      </div>
      {/* <div className=" h-[1.4px] w-full bg-[#cacaca] mt-[11.5px]"></div> */}
    </div>
  );
}
