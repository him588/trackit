import { useCallback, useContext } from "react";
import { SelectedPersonContext, UseCurrentPage } from "../context";
import { entry } from "../type";
import useUpdateCustomer from "./updatecustomer";

function useAddEntry() {
  type prop = { argument: string; amount: string; type: string;createdby:string|undefined };
  const SetselectedPerson = useContext(
    SelectedPersonContext
  )?.setselectedPerson;
  const UpdateCurrentuser = useUpdateCustomer();
 const currentpage=useContext(UseCurrentPage).currentPage
 console.log(currentpage)

  const AddEntry = useCallback(
    (prop: prop) => {
      const CurrentDate = new Date();
      const NewEntry: entry = {
        msdid: Date.now(),
        date: new Date().toLocaleDateString("en-GB"),
        time: `${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`,
        argument: prop.argument,
        amount: +prop.amount,
        type:currentpage.customer===true?"sales":"purchase"  ,
        Ispaymentrecieved: false,
        createdby:prop.createdby
      };

      if (SetselectedPerson) {
        SetselectedPerson((prev) => {
          console.log(NewEntry)
          if (prev) {
            const updatedPerson = {
              ...prev,
              entries: [...prev.entries, NewEntry],
            };
            UpdateCurrentuser(updatedPerson);
            return updatedPerson;
          } else {
            if (prev !== null) {
              UpdateCurrentuser(prev);
            }

            return prev;
          }
        });
      }
    },
    [SetselectedPerson, UpdateCurrentuser,currentpage]
  );
  return AddEntry;
}
export default useAddEntry;
