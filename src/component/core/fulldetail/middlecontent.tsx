import { useContext, useEffect, useRef, useState } from "react";
import DefaultMsg from "./defaultmsg";
import { SelectedPersonContext } from "../../context";
import { entry } from "../../type";
import Entry from "./entry";
import DateComponent from "./date";
import { SortEntryAndDate } from "../../helper";
import { DownArrowIcon } from "../../icon";
type InsideObject = { date: string; entries: entry[] };

function MiddleSection() {
  const PersonDetails = useContext(SelectedPersonContext)?.selectedPerson;
  const [EntriesAndDateArray, setEntriesAndDateArray] = useState<
    InsideObject[]
  >([]);
  // const bottomref = useRef<HTMLDivElement>();
  const boxref = useRef<HTMLDivElement | null>(null);
  function handlescroll() {
    boxref.current?.scrollTo({
      top: boxref.current?.scrollHeight,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    handlescroll()
  }, [EntriesAndDateArray]);
  useEffect(() => {
    SortEntryAndDate({ PersonDetails, setEntriesAndDateArray });
    return () => {
      setEntriesAndDateArray([]);
    };
  }, [PersonDetails]);
  return (
    <div
      ref={boxref}
      className=" h-full  w-full relative z-20 px-1 py-1 overflow-scroll scrollbar-hide bg-gray-900 "
    >
      {PersonDetails?.entries.length === 0 ? (
        <DefaultMsg />
      ) : (
        <div>
          {EntriesAndDateArray.map((entry, index) => {
            return (
              <div key={index}>
                <DateComponent date={entry.date} />
                {entry.entries.map((ent) => {
                  return <Entry entry={ent} key={ent.msdid} />;
                })}
              </div>
            );
          })}
        </div>
      )}
      {/* <div className="" ref={bottomref}></div> */}

      <div
        onClick={handlescroll}
        className=" fixed bottom-16 rounded-lg right-2 h-[50px] w-[45px] bg-[white] flex items-center justify-center cursor-pointer  "
      >
        <DownArrowIcon h={30} w={25} c="#16233e" />
      </div>
    </div>
  );
}
export default MiddleSection;
