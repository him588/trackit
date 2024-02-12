import { InfoIcon } from "../../icon";

export default function DefaultMsg() {
  return (
    <div className=" w-full h-9 flex items-center justify-center   ">
      <div className=" text-center bg-[#a1d4c0] cursor-pointer flex px-4 py-1 mt-10 rounded-sm text-sm text-[#3b3a3a] hover:border-[grey] hover:border-solid hover:border-[1px]">
        <div className=" mt-1 mr-1">
          <InfoIcon h={15} w={15} c="" />
        </div>
        This buisness uses a secure service From Trackit to manage the enteries.
      </div>
    </div>
  );
}
