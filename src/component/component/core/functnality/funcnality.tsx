import { useRef, useState } from "react";
import { Down, Menu } from "../../icon";
import Dropdown from "./dropdown";

export default function Functionality() {
  const [name, setname] = useState("");
  const arrowref = useRef<HTMLDivElement>(null);

  function handleclick() {
    if (arrowref.current) {
      arrowref.current.style.rotate = "180deg";
    }
  }
  return (
    <div className="w-full flex items-center justify-between mt-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className=" text-[#404040] font-normal text-lg px-2 placeholder:text-[#404040] border-[1.5px]  border-solid border-[#a7a7a7] rounded-md h-[35px] w-[200px] outline-none "
        placeholder="Name of Customer"
      />

      <Dropdown name="Fillter" />
      <Dropdown name="Sort" />
    </div>
  );
}
