import { Navbar, TopNav } from "../../core";

export default function Suppliers() {
  return (
    <div className=" flex">
      <Navbar />
      <div className=" w-[40%] h-full bg-[#fcfcfe] p-2 py-6  ">
        <TopNav />
        <div className=" h-[1.2px] w-full bg-[#cacaca] mt-3"></div>
      </div>
    </div>
  );
}
