import React from "react";
import { detail } from "../type";
function Menu({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M7 12h10m-8 6h6"
      ></path>
    </svg>
  );
}

export default Menu;
