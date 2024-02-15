import React, { useContext, useEffect, useState } from "react";
// import Dropdown from "./dropdown";
import { person } from "../../type";
import { CurrentUserContext, UseCurrentPage } from "../../context";
type prop = {
  List: person[] | undefined;
  setList: React.Dispatch<React.SetStateAction<person[]| undefined>>;
};
export default function Functionality({ List, setList }: prop) {
  const [name, setname] = useState("");
  const currentUser=useContext(CurrentUserContext)?.currentUser
  const currentpage=useContext(UseCurrentPage).currentPage
  useEffect(()=>{
    if(currentpage.customer){
      const customerentry=currentUser?.accountholder.filter(user=>user.type==="customer")
      const fillteritem=customerentry?.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()))
      setList(fillteritem)
    }else if(currentpage.supplier){
      const customerentry=currentUser?.accountholder.filter(user=>user.type==="supplier")
      const fillteritem=customerentry?.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()))
      setList(fillteritem)
    }else return
  },[currentpage,currentUser,setList,name])

  return (
    <div className="w-full flex items-center justify-between relative z-40  -mt-1">
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className=" text-[#404040] h-[30px] w-[180px] font-normal bg-transparent text-base px-2 placeholder:text-[#404040] border-[1.5px]  border-solid border-[#a7a7a7] rounded-md  outline-none "
        placeholder="Name of Customer"
       
      />

      {/* <Dropdown name="Fillter" /> */}
    </div>
  );
}
