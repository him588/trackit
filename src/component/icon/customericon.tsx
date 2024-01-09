import React from "react";
type detail = {
  h: number;
  w: number;
  c: string;
};
function CustomerIcon({ h, w, c }: detail) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 -1 24 24"
    >
      <path
        fill={c}
        fillRule="evenodd"
        d="M8 2a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12A6 6 0 018 0zM2 21.098a1 1 0 11-2 0V19a5 5 0 015-5h6a5 5 0 015 5v2.1a1 1 0 11-2 0v-2.1a3 3 0 00-3-3H5a3 3 0 00-3 3v2.1zM15.8 2.08a1 1 0 01.398-1.96 6.001 6.001 0 010 11.76 1 1 0 11-.397-1.96 4.002 4.002 0 000-7.84zM19 16a1 1 0 110-2 5 5 0 015 5v2.098a1 1 0 11-2 0V19a3 3 0 00-3-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CustomerIcon;
