import { useCallback, useContext } from "react";
import { person, user } from "../type";
import { CurrentUserContext, UserContext } from "../context";

export default function useUpdateCustomer() {
  const setcurrentUser = useContext(CurrentUserContext)?.setcurrentUser;
  const SetUser = useContext(UserContext)?.setUsers;
  const updatecussup = useCallback(
    (person: person) => {
      if (setcurrentUser) {
        setcurrentUser((prev) => {
          // const newuser = prev;
          const IndexOfPerson = prev?.accountholder?.findIndex(
            (account) => account.id === person?.id
          );

          if (IndexOfPerson !== -1 && IndexOfPerson !== undefined && prev) {
            const personarray = [...prev?.accountholder];
            personarray[IndexOfPerson] = person;
            const updatedcurrentuser = { ...prev, accountholder: personarray };
            try {
              localStorage.setItem(
                "currentuser",
                JSON.stringify(updatedcurrentuser)
              );
            } catch (error) {
              console.log("There is an issue in set entry:", error);
            }
            return updatedcurrentuser;
          }

          console.log("no changes has been done");
          return prev;
        });
        if (SetUser)
          SetUser((prevUsers) => {
            const Getfromlocal = localStorage.getItem("currentuser");
            const CurrentUser: user = Getfromlocal
              ? JSON.parse(Getfromlocal)
              : "";
            const IndexOfCurrentUser = prevUsers.findIndex(
              (user) => user.email === CurrentUser.email
            );
            prevUsers.splice(IndexOfCurrentUser, 1, CurrentUser);
            try {
              localStorage.setItem("users", JSON.stringify(prevUsers));
            } catch (error) {
              console.log("this face an issue in updating Users", error);
            }
            return prevUsers;
          });
      }
    },
    [SetUser, setcurrentUser]
  );
  return updatecussup;
}
