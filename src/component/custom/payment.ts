import { useCallback, useContext } from "react";
import { entry } from "../type";
import { SelectedPersonContext } from "../context";
import useUpdateCustomer from "./updatecustomer";
// import { UpdateCurrentuser } from "../helper";

function useHandlePayment() {
  const setselectedperson = useContext(SelectedPersonContext).setselectedPerson;

  const UpdateCurrentuser = useUpdateCustomer();

  const Payment = useCallback(
    (entry: entry) => {
      const newentry = { ...entry, Ispaymentrecieved: true };
      setselectedperson((person) => {
        const IndexOfPerson = person?.entries.findIndex(
          (p) => p.msdid === entry.msdid
        );
        if (IndexOfPerson !== undefined && IndexOfPerson !== -1 && person) {
          const entries = [...person?.entries];
          entries[IndexOfPerson] = newentry;
          person?.entries.splice(IndexOfPerson, 1, newentry);
          const updatedPerson = { ...person, entries: entries };
          UpdateCurrentuser(updatedPerson);
          return updatedPerson;
        }
        console.log("hello");

        if (person !== null) {
          UpdateCurrentuser(person);
        }
        return person;
      });
    },
    [setselectedperson, UpdateCurrentuser]
  );
  return Payment;
}
export default useHandlePayment;
