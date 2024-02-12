import { useState } from "react";
import { DeleteIcon, NewSalesIcon, SuppliesIcon } from "../../icon";
import { entry } from "../../type";
import { useDeleteEntry, useHandlePayment } from "../../custom";

export default function Entry({ entry }: { entry: entry }) {
  const Payment = useHandlePayment();
  const DeleteFun = useDeleteEntry();
  const [checkbox, Setcheckbox] = useState(entry.Ispaymentrecieved);
  const [Delete, setDelete] = useState(false);

  function handlechange() {
    Setcheckbox((prev) => !prev);
    Payment(entry);
  }
  function handleDelete() {
    setDelete((prev) => !prev);
    DeleteFun(entry);
  }
  return (
    <div>
      {Delete ? (
        ""
      ) : (
        <div className=" p-1 w-full relative h-[225px]">
          <div
            className={` h-[220px] w-[350px] absolute pb-1 pt-1 rounded-lg  ${
              checkbox
                ? " pl-1 right-1 bg-[#4BB543]"
                : "pr-1 left-1 bg-[#d43838] "
            }`}
          >
            <div className=" h-full w-full bg-[#f3f3ff] rounded-lg px-3 py-2">
              <div className=" w-full flex justify-between items-center">
                <p className=" text-sm font-bold text-[grey]">{entry.time}</p>
                <p className=" text-[#10153b] text-base font-semibold ">
                  {entry.amount}
                </p>
              </div>
              <div
                className={`"mt-2 w-full px-2 py-1 h-[60px]  bg-opacity-10  rounded-sm border-[1px] border-dashed   flex items-center justify-between ${
                  checkbox
                    ? " bg-[#4BB543] border-[#4BB543]"
                    : "border-[#d43838] bg-[#d43838] "
                }`}
              >
                <div className=" h-full flex flex-col gap-[2px]">
                  <p className=" text-sm font-semibold text-[grey]">
                    {entry.type}
                  </p>
                  <div className=" text-[#10153b] text-base font-semibold mt-1 flex items-center gap-1 ">
                    <div
                      className={`" h-[20px] w-[20px]  bg-opacity-20 rounded-full flex items-center justify-center ${
                        checkbox ? " bg-[#4BB543]" : "bg-[#d43838] "
                      }`}
                    >
                      <NewSalesIcon
                        h={15}
                        w={15}
                        c={checkbox ? "#4BB543" : "#d43838"}
                      />
                    </div>

                    <p>Sales</p>
                  </div>
                </div>
                <div className=" h-full flex flex-col gap-[2px]">
                  <p className=" text-sm font-semibold text-[grey]">Category</p>
                  <div className=" text-[#10153b] text-base font-semibold mt-1 flex items-center gap-1 ">
                    <SuppliesIcon h={20} w={20} c={"#10153b"} />
                    <p>Shop</p>
                  </div>
                </div>
              </div>
              <div className=" mt-2 pb-4 border-b-[1px] border-dashed border-[grey]">
                <p className=" text-sm font-bold text-[grey]">Statement</p>
                <p className=" text-[#10153b] text-base font-semibold">
                  {entry.argument}
                </p>
              </div>
              <div className="w-full flex justify-between items-center py-2">
                <div className="text-sm  text-[#10153b] font-semibold flex items-center gap-1">
                  <p>Payment complete : </p>
                  {checkbox ? (
                    <p>Done</p>
                  ) : (
                    <input
                      type="checkbox"
                      className=" h-[14px] w-[14px] outline-none mt-[2px] cursor-pointer"
                      name=""
                      id=""
                      onChange={handlechange}
                    />
                  )}
                </div>
                <div className=" cursor-pointer" onClick={handleDelete}>
                  <DeleteIcon h={20} w={20} c="#10153b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
