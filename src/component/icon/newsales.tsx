import React from "react";
import { detail } from "../type";

function NewSalesIcon({ h, w, c }: detail) {
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
        d="M14 15.657V10m0 0H8.343M14 10l-8.364 8.364m4.607 2.464a9 9 0 10-7.071-7.071"
      ></path>
    </svg>
  );
}

export default NewSalesIcon;
