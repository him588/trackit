type prop = {
  setaddPerson: React.Dispatch<React.SetStateAction<boolean>>;
  AddPerson: () => void;
};

function AddCusandSup({ setaddPerson, AddPerson }: prop) {
  function handleclick() {
    // console.log("object");

    console.log(AddPerson());
  }
  return (
    <div className=" absolute h-full w-full top-0 left-0 z-50 flex flex-col items-center justify-center">
      <div className="  w-[320px] bg-[#0f1525] p-2 rounded-md">
        <input
          type="text"
          className=" h-[40px] w-full bg-[#1b2b4b] outline-none rounded-md px-2 text-lg text-[white] placeholder:text-white"
          placeholder="Enter name..."
        />
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
