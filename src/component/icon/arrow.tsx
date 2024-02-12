import React from "react";
import { detail } from "../type";

function DownArrowIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={c}
        fillRule="evenodd"
        d="M12 3a1 1 0 011 1v13.586l5.293-5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V4a1 1 0 011-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default DownArrowIcon;
