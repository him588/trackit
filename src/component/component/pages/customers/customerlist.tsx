import { Name } from "../../core";

export default function CustomerList() {
  return (
    <div className="w-full">
      <div className=" h-6 w-[101%] bg-[#f7f5f7] mt-2 py-1 flex items-center justify-between">
        <p>Name</p>
        <p>Amount</p>
      </div>
      <div className=" mt-1 flex flex-col gap-1">
        <Name />
      </div>
    </div>
  );
}
