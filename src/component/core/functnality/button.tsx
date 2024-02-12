import { useState } from "react";

type button = { buttontype: string };
export default function FillterButton({ buttontype }: button) {
  const [isClicked, setisClicked] = useState(false);
  return (
    <button
      onClick={() => setisClicked(!isClicked)}
      className={`" border-[1.3px] text-[15px] border-solid border-[white]  outline-none px-3 py-1 rounded-md transition-all duration-200 hover:px-[14px] hover:py-[5px] hover:shadow-xl ${
        isClicked ? "bg-white text-[#15223c]" : "bg-none text-white"
      } `}
    >
      {buttontype}
    </button>
  );
}
