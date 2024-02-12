import { useContext, useEffect } from "react";
import { Name } from "../../core";
import { CurrentUserContext, UseCurrentPage } from "../../context";
import { person } from "../../type";
// import { Addicon } from "../../icon";
type prop = {
  List: person[] | undefined;
  setList: React.Dispatch<React.SetStateAction<person[] | undefined>>;
};

export default function CustomerList({ List, setList }: prop) {
  const currentUser = useContext(CurrentUserContext)?.currentUser;
  const currentpage = useContext(UseCurrentPage).currentPage;
  // const [selected, setselected] = useState(false);

  useEffect(() => {
    if (currentpage.customer) {
      const newarray = currentUser?.accountholder.filter(
        (person) => person.type === "customer"
      );
      setList(newarray);
    } else if (currentpage.supplier) {
      const newarray = currentUser?.accountholder.filter(
        (person) => person.type === "supplier"
      );
      setList(newarray);
    }
  }, [currentpage, currentUser, setList]);

  // console.log(setaddPerson);
  return (
    <div className="w-full relative ">
      <div className=" h-6 w-[100%] bg-[grey] bg-opacity-10 text-black mt-2 p-1 rounded-md flex items-center justify-between">
        <p>Name</p>
        <p>Amount</p>
      </div>
      <div className=" mt-1 flex h-[400px] pb-1 flex-col gap-2 overflow-y-scroll scrollbar-hide">
        {List?.map((item, index) => (
          <Name id={item.id} key={index} />
        ))}
      </div>
    </div>
  );
}
