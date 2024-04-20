import { user, entry, person } from "../type";

function fillterentry(user: user, type: string) {
  const entries: entry[] = [];
  user.accountholder.forEach((person: person) => {
    person.entries.forEach((entry: entry) => {
      entries.push(entry);
    });
  });
  const newentries = entries.filter((entry) => entry.type === type);
  //   console.log(newentries);
  return newentries;
}
export default fillterentry;
