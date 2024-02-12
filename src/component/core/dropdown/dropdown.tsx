import { useState } from "react";
import { Down } from "../../icon";

export default function DropDown() {
  const [show, setshow] = useState(false);
  return (
    <div
      onClick={() => setshow(!show)}
      className=" h-full w-full flex items-center justify-between relative cursor-pointer "
    >
      <p>Select category</p>
      <Down h={20} w={20} c="white" />
      {show ? (
        <div className=" w-full flex flex-col gap-2 absolute top-[42px] text-center justify-center bg-[#1b2b4b]">
          <p>Customer</p>
          <p>Supplier</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
