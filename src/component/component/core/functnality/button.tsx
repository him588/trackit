type button = { buttontype: string };
export default function FillterButton({ buttontype }: button) {
  return (
    <button className=" border-[1.3px] text-lg border-solid border-[#6d6d6d] outline-none px-3 rounded-md">
      {buttontype}
    </button>
  );
}
