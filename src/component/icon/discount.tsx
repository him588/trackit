import React from "react";
import { detail } from "../type";

function DiscountIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      version="1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <g fill="none" stroke={c} strokeMiterlimit="10" strokeWidth="2">
        <path d="M21.903 5L55 38.097 34.097 59 1 25.903 1 5z"></path>
        <path d="M29.903 5L63 38.097 42.097 59"></path>
        <circle cx="14" cy="18" r="5"></circle>
      </g>
    </svg>
  );
}

export default DiscountIcon;
