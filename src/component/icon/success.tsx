import React from "react";
import { detail } from "../type";

function SuccessIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="#4BB543"
      stroke="#4BB543"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.293 4.293L10 13.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414z"
      ></path>
    </svg>
  );
}

export default SuccessIcon;
