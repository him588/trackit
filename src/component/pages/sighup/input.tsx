import { user } from "../../type";

type input = {
  placeholder: string;
  value: string;
  onchange: (value: string) => void;
  error: string;
};

export default function Input({ placeholder, value, onchange, error }: input) {
  // function handlechange(e: React.ChangeEvent<HTMLInputElement>) {}
  return (
    <>
      <input
        type="text"
        className=" h-10 w-[300px] border-[1.5px] px-4 text-lg outline-none placeholder:text-[grey] border-solid border-[#9d9d9d] rounded-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
      <p>{error}</p>
    </>
  );
}
