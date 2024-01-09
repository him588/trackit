import { useCallback, useContext } from "react";
import { findCurrentPage } from "../type";
import { UseCurrentPage } from "../context";

export default function useFindpage() {
  const { setcurrentPage } = useContext(UseCurrentPage);
  const activePage = useCallback(
    (key: string) => {
      setcurrentPage((prev: findCurrentPage) => {
        const newState: findCurrentPage = Object.keys(prev).reduce(
          (acc, currKey) => ({ ...acc, [currKey]: false }),
          {} as findCurrentPage
        );

        // Use type assertion here
        newState[key as keyof findCurrentPage] = true;
        console.log(prev);

        return newState;
      });
    },
    [setcurrentPage]
  );
  //   console.log(activePage);
  return activePage;
}
