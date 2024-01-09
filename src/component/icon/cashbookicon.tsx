import React from "react";
type Icon = { h: number; w: number; c: string };
function CashbookIcon({ h, w, c }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={c} strokeWidth="1.5">
        <path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 004 18.224"></path>
        <path
          strokeLinecap="round"
          d="M8 7h8M8 10.5h5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"
        ></path>
        <path
          strokeLinecap="round"
          d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"
        ></path>
      </g>
    </svg>
  );
}

export default CashbookIcon;
