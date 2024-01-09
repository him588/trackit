import { Name } from "../../core";
import { Addicon } from "../../icon";
type prop = { setaddPerson: React.Dispatch<React.SetStateAction<boolean>> };

export default function CustomerList({ setaddPerson }: prop) {
  // console.log(setaddPerson);
  return (
    <div className="w-full relative">
      <div className=" h-6 w-[101%] bg-[#f7f5f7] mt-2 py-1 flex items-center justify-between">
        <p>Name</p>
        <p>Amount</p>
      </div>
      <div className=" mt-1 flex flex-col gap-1">
        <Name />
      </div>
      <div
        onClick={() => setaddPerson(true)}
        className=" w-12 h-12 bg-[#0f1525] cursor-pointer rounded-lg fixed bottom-1 left-[51%] flex items-center justify-center "
      >
        <Addicon h={50} w={50} c="white" />
      </div>
    </div>
  );
}
