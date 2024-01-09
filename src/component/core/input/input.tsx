type input = {
  field: string;
};

function Input({ field }: input) {
  return (
    <div className="w-full flex flex-col gap-1">
      <p className="font-bold relative flex items-center">
        {field}
        <span className="text-[35px] leading-[20px] text-[#f44c4c]">
          *
        </span>{" "}
      </p>

      <input
        type="text"
        className="w-[350px] h-[45px] border-[1.2px] border-solid border-[grey] rounded-full outline-none px-5 text-[20px] font-medium placeholder:text-[16px] max-[900px]:w-[100%] "
      />

      {/* {error && <p className={`text-[14px] text-[red]`}>{error}</p>} */}
    </div>
  );
}
export default Input;
