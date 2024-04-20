import React from "react";
import { detail } from "../type";

function CoupanIcon({ h, w, c }: detail) {
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
        <path d="M57 18c-1.504 1.504-2.705 2-5 2-4.59 0-8-3.41-8-8 0-2.295.496-3.496 2-5l-6-6L1 40l6 6c1.504-1.504 2.705-2 5-2 4.59 0 8 3.41 8 8 0 2.295-.496 3.496-2 5l6 6 39-39-6-6z"></path>
        <path d="M26 15L30 19"></path>
        <path d="M45 34L49 38"></path>
        <path d="M32 21L36 25"></path>
        <path d="M39 28L43 32"></path>
      </g>
    </svg>
  );
}

export default CoupanIcon;
