import { useCallback, useContext } from "react";
import { entry } from "../type";
import { SelectedPersonContext } from "../context";
import useUpdateCustomer from "./updatecustomer";
// import { UpdateCurrentuser } from "../helper";

function useDeleteEntry() {
  const setselectedperson = useContext(SelectedPersonContext).setselectedPerson;
  const UpdateCurrentuser = useUpdateCustomer();

  const DeleteEntry = useCallback(
    (entry: entry) => {
      setselectedperson((person) => {
        const Entries = person?.entries.filter((p) => p.msdid !== entry.msdid);
        if (Entries && person !== null) {
          person = { ...person, entries: Entries };
        }
        // if (IndexOfPerson !== undefined) {
        //   person?.entries.splice(IndexOfPerson, 1);
        // }
        // console.log(person);

        // if (person !== null) {
        //   UpdateCurrentuser(person);
        // }
        console.log(person);
        if (person !== null) {
          UpdateCurrentuser(person);
        }
        return person;
      });
    },
    [setselectedperson, UpdateCurrentuser]
  );
  return DeleteEntry;
}
export default useDeleteEntry;
