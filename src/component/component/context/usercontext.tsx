import React, { ReactNode, createContext, useState, useEffect } from "react";
import { user } from "../type";
type ContextType = {
  users: user[] | null;
  setUsers: React.Dispatch<React.SetStateAction<user[]>>;
};

const UserContext = createContext<ContextType | undefined>(undefined);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<user[]>([]);
  // Retrieve user data from local storage on component mount
  useEffect(() => {
    const localUserString = localStorage.getItem("users");
    const localUsers: user[] | null = localUserString
      ? JSON.parse(localUserString)
      : null;
    if (localUsers) {
      setUsers(localUsers);
    }
  }, []);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
