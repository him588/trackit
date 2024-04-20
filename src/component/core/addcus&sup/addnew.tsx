import { useState } from "react";
import { useAddPerson } from "../../custom";

type prop = {
  setaddPerson: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
};

function AddCusandSup({ setaddPerson, type }: prop) {
  const AddPerson = useAddPerson();
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);

  function handleclick() {
    if (input.length > 2) {
      seterror(false);
      AddPerson(input, type);
      setaddPerson(false);
      setinput("");
    } else {
      seterror(true);
    }
  }
  return (
    <div className=" absolute h-full w-full top-0 left-0 z-50 flex flex-col items-center justify-center">
      <div className="  w-[280px] bg-[#0f1525] p-2 rounded-md">
        <input
          type="text"
          className={`h-[40px] w-full bg-[#1b2b4b] outline-none rounded-md px-2 text-lg text-[white] placeholder:text-white`}
          placeholder="Enter name..."
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
            seterror(false);
          }}
        />

        <p className=" text-[14px] text-red-800 ">
          {" "}
          {error ? " Name shouldn't less than 3 char" : ""}{" "}
        </p>
        {/* <div
          className={`h-[40px] w-full bg-[#1b2b4b] outline-none rounded-md px-2 text-[18px] text-[white] placeholder:text-white mt-2`}
        >
          {" "}
          {/* <DropDown /> */}
        {/* </div> */}
        <div className=" w-full mt-4 flex  gap-2">
          <button
            onClick={() => setaddPerson(false)}
            className=" h-[42px] w-[75px] text-lg font-semibold bg-[#1b2b4b] rounded-md text-white "
          >
            Cancel
          </button>
          <button
            onClick={handleclick}
            className=" h-[42px] w-[75px] text-lg font-semibold bg-[#1b2b4b] rounded-md text-white "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddCusandSup;
