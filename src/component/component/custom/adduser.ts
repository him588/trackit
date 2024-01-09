import React, { useCallback, useContext } from "react";
import { user } from "../type";

import { CurrentUserContext } from "../context";
import { UserContext } from "../context";

export default function useAdduser() {
  const NameError = "Name is not less than 3 char";
  const EmailError = "Email must contain @gmail.com";
  const PasswordError = "Password not less than 6 char";
  // const Users = useContext(Usercontext).users;
  const Users = useContext(UserContext)?.users;
  const SetCurrentUser = useContext(CurrentUserContext)?.setcurrentUser;

  const setUsers = useContext(UserContext)?.setUsers;
  const AddUser = useCallback(
    (
      inputs: user,
      seterrors: React.Dispatch<
        React.SetStateAction<{ name: string; email: string; password: string }>
      >
    ) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (inputs.name.length < 4) {
        seterrors((prev) => {
          return { ...prev, name: NameError };
        });
        return;
      } else if (!emailRegex.test(inputs.email)) {
        seterrors((prev) => {
          return { ...prev, email: EmailError };
        });
        return;
      } else if (inputs.password.length < 7) {
        seterrors((prev) => {
          return { ...prev, password: PasswordError };
        });
        return;
      } else {
        const checkEmail = Users?.filter((user) => user.email === inputs.email);
        if (!checkEmail || checkEmail?.length <= 0) {
          setUsers?.((prev) => {
            localStorage.setItem("users", JSON.stringify([...prev, inputs]));
            return [...prev, inputs];
          });
          if (SetCurrentUser) {
            SetCurrentUser((prev) => {
              localStorage.setItem("currentuser", JSON.stringify(inputs));
              return inputs;
            });
          }
        } else {
          alert("user already exists");
        }
      }
    },
    [SetCurrentUser, Users, setUsers]
  );
  return AddUser;
}
