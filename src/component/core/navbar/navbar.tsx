import React, { useContext, useEffect, useState } from "react";
import {
  CustomerIcon,
  Logout,
  PurchaeIcon,
  SalesIcon,
  SettingIcon,
  SuppliesIcon,
} from "../../icon";
import Profile from "./profile";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext, UseCurrentPage } from "../../context";
import { useFindpage } from "../../custom";
export default function Navbar() {

  const Activepage = useFindpage();
  const navigate=useNavigate()
  const { currentPage } = useContext(UseCurrentPage);
  const {setcurrentUser}=useContext(CurrentUserContext)||{}
  const [show,setshow]=useState(true)
  useEffect(()=>{
    if(window.innerWidth<400){
      setshow(false)
    }
  },[])
  function handleLogout(){
if(setcurrentUser){
  setcurrentUser(()=>{
    localStorage.removeItem("currentuser")
    return null
  })
  navigate("/login")
}

  }
  // console.log(currentPage)
  return (
    <div className={` min-h-screen py-1 bg-[#0f1525] px-1 max-[400px]:hidden ${show?"w-[200px]":"w-[70px]"}`}>
      <div className=" flex items-center justify-between pr-2">
      <h1 className=" text-center text-[45px] text-white font-semibold ">
        {show?"Trackit":""}
      </h1>
      {/* <button onClick={()=>setshow(false)}>side</button> */}
      </div>
      <div className={`${show?"":"px-[1px]"}`}>
        <Profile show={show} />
      </div>
      <div className=" mt-8 px-2">
        <p className=" text-lg text-white">Parties</p>
        <div className=" mt-2">
          <Link
            to={"/Customers"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.customer
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("customer")}
          >
            <CustomerIcon
              h={show?20:40}
              w={show?20:40}
              c={currentPage.customer ? "white" : "#3d425a"}
            />

            <p className="  text-lg">{show?"Customers":""}</p>
          </Link>
          <Link
            to={"/Suppliers"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.supplier
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("supplier")}
          >
            <SuppliesIcon
               h={show?22:42}
               w={show?22:42}
              c={currentPage.supplier ? "white" : "#3d425a"}
            />
            <p className="  text-lg">{show?"Suppliers":""}</p>
          </Link>
        </div>
        <p className=" text-lg text-white mt-3">Bills</p>
        <div className=" mt-2">
          <Link
            to={"/Sales"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.sales ? "text-white bg-[#1b2b4b]" : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("sales")}
          >
            <SalesIcon
              h={show?20:40}
              w={show?20:40}
              c={currentPage.sales ? "white" : "#3d425a"}
            />
           <p className="  text-lg">{show?"Sales":""}</p>
          </Link>
          <Link
            to={"/Purchase"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.purchase
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("purchase")}
          >
            <PurchaeIcon
             h={show?20:40}
             w={show?20:40}
              c={currentPage.purchase ? "white" : "#3d425a"}
            />
            <p className="  text-lg">{show?"Purchase":""}</p>
          </Link>
          {/* <Link
            to={"/Cashbook"}
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.cashbook
                ? "text-white bg-[#1b2b4b]"
                : "text-[#3d425a]"
            }`}
            onClick={() => Activepage("cashbook")}
          >
            <CashbookIcon
              h={show?20:40}
              w={show?20:40}
              c={currentPage.cashbook ? "white" : "#3d425a"}
            />
            <p className="  text-lg">{show?"Cashbook":""}</p>
          </Link> */}
        </div>
        <p className=" text-lg text-white mt-3">Setting</p>
        <div className=" mt-2">
          <div
            className={`flex items-center gap-2 px-2 rounded-md py-[2px] cursor-pointer ${
              currentPage.setting ? "text-white bg-[#1b2b4b]" : "text-[#3d425a]"
            }`}
            onClick={handleLogout}
          >
            <Logout
             h={show?30:60}
             w={show?25:45}
              
              c={currentPage.setting ? "white" : "#3d425a"}
            />

         <p className="  text-lg">{show?"Logout":""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
