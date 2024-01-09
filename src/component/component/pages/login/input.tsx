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
    <>
      <input
        type="text"
        className=" h-11 w-[350px] border-[1.5px] px-4 text-lg outline-none placeholder:text-[grey] border-solid border-[#9d9d9d] rounded-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <p>{error}</p>
    </>
  );
}
