type input = {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
  error: string;
};

export default function Input({
  placeholder,
  value,
  handleChange,
  error,
}: input) {
  return (
    <div className=" flex flex-col items-start ">
      <input
        type="text"
        className={`h-10 w-[310px] text-white border-[1.5px] px-4 text-base outline-none  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-slate-300 placeholder:text-[white]   rounded-full ${
          error === ""
            ? "border-white placeholder:text-white"
            : "border-red-700 placeholder:text-red-700"
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p className=" text-base ml-2 text-red-700 text-start">{error}</p>
    </div>
  );
}
