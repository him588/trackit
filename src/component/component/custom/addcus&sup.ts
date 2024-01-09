import { useCallback, useContext } from "react";
import { CurrentUserContext, UserContext } from "../context";
// import { person } from "../type";

function useAddPerson() {
  const currentUser = useContext(CurrentUserContext);
  const setcurrentUser = useContext(CurrentUserContext);
  const users = useContext(UserContext);
  const setUsers = useContext(UserContext);
  console.log(currentUser);
  console.log(setcurrentUser);
  console.log(users);
  console.log(setUsers);

  const AddPerson = useCallback(() => {
    // console.log("hello");

    console.log(setcurrentUser);
    console.log(users);
    console.log(setUsers);

    if (!currentUser || !users || !setcurrentUser || !setUsers) {
      console.log("retuning tu initial stage");
      return;
    }
    console.log("hello2");
    // const newPerson: person = {
    //   id: String(Date.now()),
    //   name: "himanshu",
    //   type: "customers",
    //   entries: null,
    //   date: "",
    // };

    // setUsers((prevUsers) => {
    //   const indexofCurrentUser = prevUsers.findIndex(
    //     (user) => user.email === currentUser.email
    //   );

    //   if (indexofCurrentUser === -1) {
    //     return prevUsers;
    //   }

    //   const updatedUsers = [...prevUsers];
    //   updatedUsers[indexofCurrentUser] = {
    //     ...updatedUsers[indexofCurrentUser],
    //     accountholder: [
    //       ...(updatedUsers[indexofCurrentUser].accountholder || []),
    //       newPerson,
    //     ],
    //   };

    //   // Handle local storage errors
    //   try {
    //     localStorage.setItem("users", JSON.stringify(updatedUsers));
    //   } catch (error) {
    //     console.error("Error storing data in local storage:", error);
    //   }

    //   return updatedUsers;
    // });

    // setcurrentUser((prevCurrentUser) => {
    //   const indexofCurrentUserInUsers = users.findIndex(
    //     (user) => user.email === prevCurrentUser?.email
    //   );

    //   if (indexofCurrentUserInUsers === -1) {
    //     return prevCurrentUser;
    //   }

    //   // Handle local storage errors
    //   try {
    //     localStorage.setItem(
    //       "currentuser",
    //       JSON.stringify(users[indexofCurrentUserInUsers])
    //     );
    //   } catch (error) {
    //     console.error("Error storing data in local storage:", error);
    //   }

    //   return users[indexofCurrentUserInUsers];
    // });
  }, [currentUser, setcurrentUser, users, setUsers]);

  return AddPerson;
}

export default useAddPerson;
