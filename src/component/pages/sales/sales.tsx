import { useContext, useState, useEffect } from "react";
import {  Navbar } from "../../core";
import TopNav from "./topnav";
import { CurrentUserContext, UseCurrentPage } from "../../context";
import { calculateamount, fillterentry } from "../../helper";
import { entry } from "../../type";
import Input from "./input";
import Entry from "./entry";

export default function Sales() {
  const CurrentUser = useContext(CurrentUserContext)?.currentUser;
  const currentpage = useContext(UseCurrentPage).currentPage;
  const [sales, setsales] = useState<number | undefined>(0);
  const [purchase, setpurchase] = useState<number | undefined>(0);
  const [Entries, setEntries] = useState<entry[]>([]);

  useEffect(() => {
    setsales(() => {
      if (CurrentUser?.accountholder)
        return calculateamount(CurrentUser.accountholder, "customer");
    });
    setpurchase(() => {
      if (CurrentUser)
        return calculateamount(CurrentUser.accountholder, "supplier");
    });
  }, [CurrentUser]);
  useEffect(() => {
    if (
      CurrentUser !== undefined &&
      CurrentUser !== null &&
      currentpage.sales
    ) {
      setEntries(fillterentry(CurrentUser, "sales"));
      return;
    }
    if (
      CurrentUser !== undefined &&
      CurrentUser !== null &&
      currentpage.purchase
    ) {
       setEntries(  fillterentry(CurrentUser, "purchase"));
      return;
    }
  }, [currentpage, CurrentUser]);
  // if(CurrentUser!==undefined && CurrentUser!==null){setEntries(fillterentry(CurrentUser))}
  // console.log(Entries)
  console.log(Entries)

  return (
    <div className=" min-h-screen flex overflow-hidden">
      <Navbar />

      <div className=" w-[30%] p-2 py-6 max-h-screen bg-[#f3f3fc] border-r-[1.4px] border-solid border-[#a9a8a8] max-[400px]:w-[100%] max-[400px]:border-r-0">
        <TopNav />
        <div className=" h-[1.3px] w-full bg-[#cacaca] mt-3"></div>
        <div className=" flex items-center justify-between py-2">
          <div className=" flex gap-2 ">
            {" "}
            <p className="text-[grey] font-normal">Total Sales:</p>
            <p className=" text-[green] font-semibold">₹{sales}</p>
          </div>
          <div className=" flex gap-2 ">
            {" "}
            <p className="text-[grey] font-normal">Total Purchase:</p>
            <p className=" text-[#bd3b3b] font-semibold">₹{purchase}</p>
          </div>
        </div>
        <div className="mt-2">
          <Input List={Entries} setList={setEntries} />
        </div>
        <div className=" h-6 w-[100%] bg-[grey] bg-opacity-10 text-black mt-2 p-1 rounded-md flex items-center justify-between">
          <p>Entry</p>
          <p>Amount</p>
        </div>
        <div className=" mt-1 flex h-[405px]   flex-col gap-2 overflow-y-scroll scrollbar-hide">
          {Entries.map((item, index) => {
            return <Entry entry={item} key={index} />;
          })}
          {/* <Entry /> */}
          {/* {List?.map((item, index) => (
          <Name account={item} key={index} /> */}
        </div>
      </div>
      <div className=" w-[calc(100%-30%-200px)] max-h-screen bg-[#f3f3fc] max-[400px]:hidden"></div>
    </div>
  );
}
