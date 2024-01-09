import { useContext, useState } from "react";
import Input from "./input";
import { UserContext } from "../../context";
import { CurrentUserContext } from "../../context/currentcontext";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [Inputs, setInputs] = useState({ email: "", password: "" });
  const [Errors, setErrors] = useState({ email: "", password: "" });
  const Users = useContext(UserContext)?.users;
  const Navigate = useNavigate();
  const SetCurrentUser = useContext(CurrentUserContext)?.setcurrentUser;

  function handleClick() {
    const CheckUserExist = Users?.find((user) => user.email === Inputs.email);
    console.log(CheckUserExist);

    if (CheckUserExist === undefined) {
      alert("Please go to login page");
      setErrors((prev) => {
        return { ...prev, email: "User not registered" };
      });
    } else {
      if (CheckUserExist.password === Inputs.password) {
        console.log("user matched");
        SetCurrentUser?.(() => {
          localStorage.setItem("currentuser", JSON.stringify(CheckUserExist));
          return CheckUserExist;
        });
        Navigate("/customers");
      } else {
        setErrors((prev) => {
          return { ...prev, password: "Please enter correct password" };
        });
      }
    }
  }
  return (
    <div className=" flex flex-col gap-2 mt-11 justify-center items-center relative">
      <Input
        placeholder="Username"
        value={Inputs.email}
        handleChange={(value) => {
          setInputs((prev) => {
            return { ...prev, email: value };
          });
        }}
        error={Errors.email}
      />
      <Input
        placeholder="Password"
        value={Inputs.password}
        handleChange={(value) => {
          setInputs((prev) => {
            return { ...prev, password: value };
          });
        }}
        error={Errors.password}
      />
      <p className=" text-sm font-semibold ml-[220px]">Forgot Password?</p>
      <button
        className=" h-11 w-[350px] bg-[#0f1525] mt-3 rounded-full text-[white] text-base font-semibold  "
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
}
