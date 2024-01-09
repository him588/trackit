import { useContext, useState } from "react";
import Input from "./input";
import { user } from "../../type";
import { useAdduser } from "../../custom";
import { CurrentUserContext, UserContext } from "../../context";

export default function Form() {
  const users = useContext(UserContext);
  const currentuser = useContext(CurrentUserContext);
  console.log(users?.setUsers);
  console.log(currentuser?.currentUser);
  const [inputs, setinputs] = useState<user>({
    name: "",
    email: "",
    password: "",
    accountholder: null,
  });
  const [errors, seterrors] = useState({ name: "", email: "", password: "" });
  const AddUser = useAdduser();

  function handleclick() {
    AddUser(inputs, seterrors);
  }
  return (
    <div className=" flex flex-col gap-2 mt-11 justify-center items-center relative">
      <Input
        placeholder="Name"
        value={inputs.name}
        onchange={(value) => {
          setinputs((prev) => {
            return { ...prev, name: value };
          });
          seterrors((prev) => {
            return { ...prev, name: "" };
          });
        }}
        error={errors.name}
      />
      <Input
        placeholder="Email"
        value={inputs.email}
        onchange={(value) => {
          setinputs((prev) => {
            return { ...prev, email: value };
          });
          seterrors((prev) => {
            return { ...prev, email: "" };
          });
        }}
        error={errors.email}
      />
      <Input
        placeholder="Password"
        value={inputs.password}
        onchange={(value) => {
          setinputs((prev) => {
            return { ...prev, password: value };
          });
          seterrors((prev) => {
            return { ...prev, password: "" };
          });
        }}
        error={errors.password}
      />
      {/* <p className=" text-sm font-semibold ml-[220px]">Forgot Password?</p> */}
      <button
        onClick={handleclick}
        className=" h-11 w-[300px] mt-1 rounded-full text-[white] text-base font-semibold bg-[black] "
      >
        Sigh up
      </button>
    </div>
  );
}
