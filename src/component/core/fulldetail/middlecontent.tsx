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
  const bottomref = useRef<HTMLDivElement | null>(null);
  const boxref = useRef<HTMLDivElement | null>(null);
  function handlescroll() {
    boxref.current?.scrollTo({
      top: boxref.current?.scrollHeight,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    bottomref.current?.scrollIntoView();
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
      className=" h-full  w-full relative z-20 p-1 overflow-scroll scrollbar-hide "
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
      <div ref={bottomref}></div>
      <div
        onClick={handlescroll}
        className=" fixed bottom-14 rounded-lg right-2 h-[50px] w-[45px] bg-[white] flex items-center justify-center cursor-pointer  "
      >
        <DownArrowIcon h={30} w={25} c="#16233e" />
      </div>
    </div>
  );
}
export default MiddleSection;
