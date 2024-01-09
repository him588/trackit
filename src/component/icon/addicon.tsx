import React from "react";
import { detail } from "../type";

function Addicon({ h, w, c }: detail) {
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
        d="M11.25 12.75V18h1.5v-5.25H18v-1.5h-5.25V6h-1.5v5.25H6v1.5h5.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Addicon;
