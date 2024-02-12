import React, { ReactNode, createContext, useState } from "react";
import { person } from "../type";

type state = {
  selectedPerson: person | null;
  setselectedPerson: React.Dispatch<React.SetStateAction<person | null>>;
};

const SelectedPersonContext = createContext<state>({
  selectedPerson: null,
  setselectedPerson: () => null,
});

function SelectedPersonContextProvider({ children }: { children: ReactNode }) {
  const [selectedPerson, setselectedPerson] = useState<person | null>(null);

  return (
    <SelectedPersonContext.Provider
      value={{ selectedPerson, setselectedPerson }}
    >
      {children}
    </SelectedPersonContext.Provider>
  );
}

export { SelectedPersonContext, SelectedPersonContextProvider };
