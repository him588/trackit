import React from "react";
type Icon = {
  h: number;
  w: number;
  c: string;
};

function PurchaeIcon({ h, w, c }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      className="icon"
      viewBox="0 0 1024 1024"
    >
      <g fill={c}>
        <path d="M585.1 640.1V823l164.6 91.4L914.3 823V640.1l-164.6-91.4-164.6 91.4zm256 139.9l-91.4 50.8-91.4-50.8v-96.8l91.4-50.8 91.4 50.8V780z"></path>
        <path d="M713.6 737.454a36.6 36.6 0 1072.256-11.72 36.6 36.6 0 10-72.255 11.72z"></path>
        <path d="M109.7 109.7v804.6h438.9v-73.2H182.9V182.9h658.3V512h73.1V109.7z"></path>
        <path d="M694.9 380.9v58H768V256H585.2v73.1h58L507.3 464.9l-109.7-73.1-167.4 167.5 51.7 51.7L407 485.9l109.7 73.2zM256 694.9h256V768H256z"></path>
      </g>
    </svg>
  );
}

export default PurchaeIcon;