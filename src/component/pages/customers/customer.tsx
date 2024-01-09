import { useContext, useState } from "react";
import { Navbar } from "../../core";
import RenderCustomer from "./rendercustomer";
import { AddCusandSup } from "../../component/core";
import { useAddPerson } from "../../component/custom";
import { CurrentUserContext, UserContext } from "../../context";

export default function Customer() {
  const [addPerson, setaddPerson] = useState(false);
  const AddPerson = useAddPerson();
  const user = useContext(UserContext)?.users;
  const currentuser = useContext(CurrentUserContext)?.currentUser;
  console.log(user);
  console.log(currentuser);

  // console.log(Addperson);
  return (
    <div className=" min-h-screen flex">
      <Navbar />

      {addPerson ? (
        <AddCusandSup setaddPerson={setaddPerson} AddPerson={AddPerson} />
      ) : (
        ""
      )}

      <div className=" w-[40%] min-h-screen">
        <RenderCustomer setaddPerson={setaddPerson} />
      </div>
    </div>
  );
}
