import { entry, person } from "../type";

function calculateamount(persons: person[], type: string) {
  const fillterdarray = persons.filter((person) => person.type === type);
  const entries: entry[] = [];
  let price = 0;
  //   console.log(fillterdarray);
  fillterdarray.forEach((array) => {
    array.entries.forEach((entry) => entries.push(entry));
  });
  entries.forEach((entry) => {
    price = price + entry.amount;
  });

  return price;
}
export default calculateamount;
