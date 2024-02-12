import React from "react";
import { detail } from "../type";

function DotIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M13 5a1 1 0 10-2 0 1 1 0 002 0zM13 12a1 1 0 10-2 0 1 1 0 002 0zM13 19a1 1 0 10-2 0 1 1 0 002 0z"></path>
      </g>
    </svg>
  );
}

export default DotIcon;
