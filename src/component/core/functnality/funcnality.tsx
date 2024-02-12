import React, { useState } from "react";
import Dropdown from "./dropdown";
import { person } from "../../type";
type prop = {
  List: person[] | [] | undefined;
  setList: React.Dispatch<React.SetStateAction<person[] | [] | undefined>>;
};
export default function Functionality({ List, setList }: prop) {
  const [name, setname] = useState("");

  return (
    <div className="w-full flex items-center justify-between relative z-40  -mt-1">
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className=" text-[#404040] font-normal bg-transparent text-lg px-2 placeholder:text-[#404040] border-[1.5px]  border-solid border-[#a7a7a7] rounded-md h-[32px] w-[200px] outline-none "
        placeholder="Name of Customer"
      />

      <Dropdown name="Fillter" />
    </div>
  );
}
