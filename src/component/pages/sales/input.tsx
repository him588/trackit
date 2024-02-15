import React, { useContext, useState } from "react";
// import Dropdown from "./dropdown";
import { entry } from "../../type";
import { CurrentUserContext, UseCurrentPage } from "../../context";
type prop = {
  List: entry[];
  setList: React.Dispatch<React.SetStateAction<entry[]>>;
};
export default function Input({ List, setList }: prop) {
  const [name, setname] = useState("");
  const currentUser=useContext(CurrentUserContext)?.currentUser
  const currentpage=useContext(UseCurrentPage).currentPage
  
  return (
    <div className="w-full flex items-center justify-between relative z-40  -mt-1">
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className=" text-[#404040] h-[30px] w-[180px] font-normal bg-transparent text-base px-2 placeholder:text-[#404040] border-[1.5px]  border-solid border-[#a7a7a7] rounded-md  outline-none "
        placeholder="Name of Entry"
       
      />

      {/* <Dropdown name="Fillter" /> */}
    </div>
  );
}
