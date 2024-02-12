import React from "react";
import { detail } from "../type";

function InfoIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={h}
      height={w}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M0 0H24V24H0z"></path>
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11v6M11.75 8V7h.5v1h-.5z"
        ></path>
      </g>
    </svg>
  );
}

export default InfoIcon;
