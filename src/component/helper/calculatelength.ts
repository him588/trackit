import { person } from "../type";

function calculatelength(array: person[], type: string): number {
  return array.filter((person) => person.type === type).length;
}
export default calculatelength;
