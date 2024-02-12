import React from "react";
import { person } from "../type";
import { entry } from "../type";
type InsideObject = { date: string; entries: entry[] };

type prop = {
  PersonDetails: person | null;
  setEntriesAndDateArray: React.Dispatch<React.SetStateAction<InsideObject[]>>;
};
function SortEntryAndDate({ PersonDetails, setEntriesAndDateArray }: prop) {
  const AllDates: string[] = [];
  PersonDetails?.entries.forEach((entry) => {
    if (!AllDates.includes(entry.date)) {
      AllDates.push(entry.date);
    }
  });
  AllDates.forEach((date) => {
    const EntryOfThisDate = PersonDetails?.entries.filter(
      (entry) => entry.date === date
    );
    if (EntryOfThisDate) {
      setEntriesAndDateArray((prev) => {
        const entriesarray = [
          ...prev,
          { date: date, entries: EntryOfThisDate },
        ];
        return entriesarray;
      });
    }
  });
}
export default SortEntryAndDate;
