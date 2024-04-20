import React from "react";
import { detail } from "../type";

function Logout({h,w,c}:detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={c} strokeLinecap="round" strokeWidth="1.5">
        <path d="M12 20a8 8 0 110-16"></path>
        <path strokeLinejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"></path>
      </g>
    </svg>
  );
}

export default Logout;