import { useCallback, useContext } from "react";
import { CurrentUserContext, UserContext } from "../context";
import { person } from "../type";

function useAddPerson() {
  const currentUser = useContext(CurrentUserContext)?.currentUser;
  const setcurrentUser = useContext(CurrentUserContext)?.setcurrentUser;
  const users = useContext(UserContext)?.users;
  const setUsers = useContext(UserContext)?.setUsers;
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Ensure 2 digits
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensure 2 digits
    return `${hours}:${minutes}`;
  }

  const AddPerson = useCallback(
    (input: string, persontype: string) => {
      const ColorArray = [
        "#113540",
        "#112640",
        "#2d1140",
        "#401130",
        "#2d1140",
        "#13643e",
        "#112c40",
        "#11412a",
      ];

      if (!currentUser || !users || !setcurrentUser || !setUsers) {
        console.log("retuning tu initial stage");
        return;
      }

      function getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const randomInteger = getRandomInt(0, 7);
      //SET NAME FIRST WORD CAPITAL//
      const FirstChar = input.charAt(0).toUpperCase();
      const AllChar = input.slice(1, input.length);
      const NewName = `${FirstChar}${AllChar}`;

      const newPerson: person = {
        id: String(Date.now()),
        name: NewName,
        type: persontype,
        entries: [],
        date: new Date().toLocaleString(),
        color: ColorArray[randomInteger],
        time: getCurrentTime(),
      };

      setUsers((prevUsers) => {
        const indexofCurrentUser = prevUsers.findIndex(
          (user) => user.email === currentUser.email
        );

        if (indexofCurrentUser === -1) {
          return prevUsers;
        }

        const updatedUsers = [...prevUsers];
        updatedUsers[indexofCurrentUser] = {
          ...updatedUsers[indexofCurrentUser],
          accountholder: [
            newPerson,
            ...(updatedUsers[indexofCurrentUser].accountholder || []),
          ],
        };

        // Handle local storage errors
        try {
          localStorage.setItem("users", JSON.stringify(updatedUsers));
        } catch (error) {
          console.error("Error storing data in local storage:", error);
        }

        return updatedUsers;
      });

      setcurrentUser((prevCurrentUser) => {
        const indexofCurrentUserInUsers = users.findIndex(
          (user) => user.email === prevCurrentUser?.email
        );
        const UpdatedUser = localStorage.getItem("users");

        if (indexofCurrentUserInUsers === -1) {
          return prevCurrentUser;
        }
        if (UpdatedUser) {
          const NewUsers = JSON.parse(UpdatedUser);
          try {
            localStorage.setItem(
              "currentuser",
              JSON.stringify(NewUsers[indexofCurrentUserInUsers])
            );
          } catch (error) {
            console.error("Error storing data in local storage:", error);
          }

          return NewUsers[indexofCurrentUserInUsers];
        }

        // Handle local storage errors
      });
    },
    [currentUser, setcurrentUser, users, setUsers]
  );

  return AddPerson;
}

export default useAddPerson;
