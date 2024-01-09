import { AppleIcon, FacebookIcon, GoogleIcon } from "../../icon";

import { Design } from "../../core";
import Form from "./form";
// import { useContext } from "react";
// import { UserContext } from "../../context";

export default function Login() {
  return (
    <div className=" min-h-screen w-[100%] flex justify-center items-center">
      <div className=" w-1/2 min-h-screen p-6">
        <h1 className=" text-[45px] text-[#0f1525] font-bold text-center">
          Welcome Back !
        </h1>
        <p className=" text-center mt-3 text-[15px] text-[#0f1525]">
          Simplify your workflow and boost your productivity
          <span className=" block">
            with <span className=" text-base font-semibold">Trackit App.</span>{" "}
            Get started for free.{" "}
          </span>
        </p>
        <Form />
        <div className=" w-full flex items-center justify-center gap-2 mt-6">
          <div className=" h-[1.3px] w-[20%] bg-[#0f1525]"></div>
          <p className=" text-base font-semibold text-[#0f1525] -mt-1">
            or continue with
          </p>
          <div className=" h-[1.3px] w-[20%] bg-[#0f1525]"></div>
        </div>
        <div className=" flex  gap-4 items-center justify-center mt-5 ">
          <div className=" flex h-11 w-11 items-center justify-center bg-[#0f1525] rounded-full">
            <AppleIcon h={20} w={20} c="white" />
          </div>
          <div className=" flex h-11 w-11 items-center justify-center bg-[#0f1525] rounded-full">
            <GoogleIcon h={20} w={20} c="white" />
          </div>
          <div className=" flex h-11 w-11 items-center justify-center bg-[#0f1525] rounded-full">
            <FacebookIcon h={33} w={33} c="white" />
          </div>
        </div>
        <p className=" text-sm text-[#0f1525] text-center mt-8 font-semibold ">
          Not a member?{" "}
          <span className=" text-green-800 cursor-pointer">Register now</span>
        </p>
      </div>
      <div className=" w-1/2 min-h-screen px-16 py-5    ">
        <Design />
      </div>
    </div>
  );
}
