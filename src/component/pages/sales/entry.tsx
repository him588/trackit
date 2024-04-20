import { CoupanIcon, DiscountIcon } from "../../icon";
import { entry } from "../../type";

export default function Entry({ entry }: { entry: entry }) {
  const account = "customer";
  return (
    <div className=" py-2 w-full flex items-center gap-2  relative hover:bg-[#f0f0f8] cursor-pointer border-b-[1.2px] border-[#bebebe] border-solid">
      {/* <div className=" h-[45px] w-[45px] rounded-full bg-[#163816] flex items-center justify-center text-[35px] text-white">
        H
    </div> */}
      <div className=" w-[50px] h-full flex items-center justify-center bg-[#0f1525] rounded-r-lg">
        {entry.type === "sales" ? (
          <DiscountIcon h={25} w={25} c="white" />
        ) : (
          <CoupanIcon h={25} w={25} c="white" />
        )}
      </div>
      <div className=" text-[#0f1525] flex flex-col gap-2">
        <p className=" text-base text-[#0f1525] text-[20px] font-medium uppercase ml-2">
          {entry.argument}
        </p>
        <div className=" flex gap-1">
          <div className=" h-[25px] rounded-3xl flex items-center justify-center px-3 bg-green-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20      ">
            <p className=" text-[#0f1525] font-medium">
              {entry.type === "sales" ? "Sales" : "Purchase"}
            </p>
          </div>
          <div
            className={` h-[25px] rounded-3xl flex items-center justify-center px-3  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ${
              entry.Ispaymentrecieved ? "bg-purple-600" : " bg-red-500"
            }`}
          >
            <p className=" text-[#0f1525] font-medium">
              {entry.Ispaymentrecieved ? "Recieved" : "Unpaid"}
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute right-0">
        <p className="text-[grey] font-normal">
          {account === "customer" ? "Amount" : "Amount"}
        </p>
        <p
          className={`  text-right font-bold ${
            account === "customer" ? "text-[#16233e]" : "text-[#1b2b4b]"
          }`}
        >
          ₹ {entry.amount}
        </p>
      </div>
    </div>
  );
}
