import { useContext, useState } from "react";
// import { Addicon } from "../../icon";
// import { motion } from "framer-motion";
import { useAddEntry } from "../../custom";
import { SelectedPersonContext } from "../../context";

export default function Bottom() {
  const SelectedPerson = useContext(SelectedPersonContext)?.selectedPerson
    
  console.log(SelectedPerson)

  const [Input, setInputs] = useState({
    argument: "",
    amount: "",
    type: SelectedPerson?.type === "supplier" ? "purchase" : "sales",
    createdby:SelectedPerson?.id
  });
  const addentry = useAddEntry();
  const pattern = /^[0-9]+$/;
  function handleadd() {
    if (Input.argument === "") {
      alert("Please enter Sale");
      return;
    }
    if (Input.amount === "") {
      alert(
        `${SelectedPerson?.type === "customer" ? "Enter sales" : "Enter purchase"}`
      );
      return;
    }
    if (Input.amount === "") {
      alert(
        `${SelectedPerson?.type === "customer" ? "Enter sales" : "Enter purchase"}`
      );
      return;
    }
    if(Input.createdby!==undefined){
      addentry(Input);
    }
    
    setInputs((prev) => {
      return { ...prev, amount: "", argument: "" };
    });
  }

  return (
    <div className=" w-full h-auto p-1 flex relative z-50  justify-end">
      <div className=" h-[50px] w-[100%] flex items-center justify-center cursor-pointer bg-[#f3f3ff]">
        <div className=" w-full h-full px-3 flex gap-2 justify-between">
          <input
            type="text"
            className=" h-full w-[300px] outline-none px-2 rounded-md"
            placeholder={`${
              SelectedPerson?.type === "customer" ? "Enter sales" : "Enter purchase"
            }`}
            onClick={(e) => e.stopPropagation()}
            value={Input.argument}
            onChange={(e) =>
              setInputs((prev) => {
                return { ...prev, argument: e.target.value };
              })
            }
          />
          <input
            type="text"
            inputMode="numeric"
            className=" h-full w-[200px] outline-none px-2 rounded-md"
            placeholder="Amount "
            value={Input.amount}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              const value = e.target.value;
              setInputs((prev) => {
                return {
                  ...prev,
                  amount:
                    pattern.test(value) || value === ""
                      ? e.target.value
                      : prev.amount,
                };
              });
            }}
          />
          <button
            className=" h-full w-[100px] rounded-md text-white bg-[#16233e] text-base font-medium"
            onClick={handleadd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
