import { useState } from "react";
import { Menu, Down } from "../../icon";
import FillterButton from "./button";
type props = {
  name: string;
};

export default function Dropdown({ name }: props) {
  const [show, setshow] = useState(false);
  function handleclick() {
    if (show) {
      setshow(!show);
    } else {
      setshow(!show);
    }
  }
  return (
    <div className=" relative">
      <div
        className="h-[32px] cursor-pointer w-[100px] border-[1.5px]  border-solid border-[#a7a7a7] rounded-md flex items-center justify-between px-1"
        onClick={handleclick}
      >
        <Menu h={20} w={20} c={"#404040"} />
        <p className=" text-[#404040]">{name}</p>
        <div
          className={` transform transition-all duration-500 ${
            show ? " rotate-180" : " rotate-0"
          } `}
        >
          <Down h={20} w={20} c={"#404040"} />
        </div>
      </div>

      <div
        className={`absolute w-[350px] transform transition-all duration-250 z-10 bg-[#15223c]   overflow-hidden -ml-12 rounded-lg mt-1 ${
          show ? "h-[220px]  " : " h-0 "
        } `}
      >
        <div className=" px-3 flex flex-col  items-center justify-center ">
          <p className=" text-[16px] text-left w-full text-grey font-normal text-[white]">
            Fillter
          </p>
          <div className=" flex items-center justify-between w-full m-1">
            <FillterButton buttontype="All" />
            <FillterButton buttontype="You'll get" />
            <FillterButton buttontype="You'll give" />
          </div>
          <div className=" h-[1.1px] opacity-70 w-full bg-white mt-2"></div>
          <p className=" text-[16px] text-left  w-full text-grey mt-2 font-normal text-[white]">
            Sort by
          </p>
          <div className=" flex items-center w-full justify-between m-1">
            <FillterButton buttontype="Newest" />
            <FillterButton buttontype="A to Z" />
            <FillterButton buttontype="Oldest" />
          </div>
          <div className=" h-[1.1px] opacity-70 w-full bg-white mt-2"></div>

          <div className=" flex items-center justify-center gap-2">
            <button className=" h-[36px] w-[120px] bg-[#1b2b4b] mt-4 font-medium border-[1.2px] border-solid border-white text-white rounded-lg  ">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
