import { useCallback, useContext } from "react";
import { SelectedPersonContext } from "../context";
import { entry } from "../type";
import useUpdateCustomer from "./updatecustomer";

function useAddEntry() {
  type prop = { argument: string; amount: string; type: string };
  const SetselectedPerson = useContext(
    SelectedPersonContext
  )?.setselectedPerson;
  const UpdateCurrentuser = useUpdateCustomer();

  const AddEntry = useCallback(
    (prop: prop) => {
      const CurrentDate = new Date();
      const NewEntry: entry = {
        msdid: Date.now(),
        date: new Date().toLocaleDateString("en-GB"),
        time: `${CurrentDate.getHours()}:${CurrentDate.getMinutes()}`,
        argument: prop.argument,
        amount: +prop.amount,
        type: prop.type,
        Ispaymentrecieved: false,
      };

      if (SetselectedPerson) {
        SetselectedPerson((prev) => {
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
    [SetselectedPerson, UpdateCurrentuser]
  );
  return AddEntry;
}
export default useAddEntry;
