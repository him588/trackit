// import Design from "../../core";
import { Design } from "../../core";
import Form from "./form";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../icon";
export default function Sighup() {
  return (
    <div className=" min-h-screen w-[100%] flex">
      <div className=" w-1/2 min-h-screen p-14">
        <h1 className=" text-[45px] font-bold text-center">Hello buddy !</h1>
        <p className=" text-center mt-3 text-[15px]">
          Simplify your workflow and boost your productivity
          <span className=" block">
            with <span className=" text-base font-semibold">Trackit App.</span>{" "}
            Get started for free.{" "}
          </span>
        </p>
        <Form />
        <div className=" w-full flex items-center justify-center gap-2 mt-6">
          <div className=" h-[1.3px] w-[20%] bg-black"></div>
          <p className=" text-base font-semibold -mt-1">or continue with</p>
          <div className=" h-[1.3px] w-[20%] bg-black"></div>
        </div>
        <div className=" flex  gap-4 items-center justify-center mt-5 ">
          <div className=" flex h-11 w-11 items-center justify-center bg-black rounded-full">
            <AppleIcon h={20} w={20} c="white" />
          </div>
          <div className=" flex h-11 w-11 items-center justify-center bg-black rounded-full">
            <GoogleIcon h={20} w={20} c="white" />
          </div>
          <div className=" flex h-11 w-11 items-center justify-center bg-black rounded-full">
            <FacebookIcon h={33} w={33} c="white" />
          </div>
        </div>
        <p className=" text-sm text-center mt-8 font-semibold ">
          Not a member?{" "}
          <span className=" text-green-800 cursor-pointer">Register now</span>
        </p>
      </div>
      <div className=" w-1/2 min-h-full  py-10 px-10">
        <Design />
      </div>
    </div>
  );
}
