// import Design from "../../core";
import { Design } from "../../core";
import Form from "./form";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../icon";
export default function Sighup() {
  return (
    <div className=" min-h-screen w-[100%] flex bg-[#0f1525]">
      <div className=" w-1/2 min-h-screen p-14">
        <h1 className=" text-[45px] font-bold text-center text-white">
          Hello buddy !
        </h1>
        <p className=" text-center mt-3 text-[15px] text-white">
          Simplify your workflow and boost your productivity
          <span className=" block">
            with <span className=" text-base font-semibold">Trackit App.</span>{" "}
            Get started for free.{" "}
          </span>
        </p>
        <Form />
        <div className=" w-full flex items-center justify-center gap-2 mt-6">
          <div className=" h-[1.3px] w-[20%] bg-white"></div>
          <p className=" text-base font-semibold -mt-1 text-white">
            or continue with
          </p>
          <div className=" h-[1.3px] w-[20%] bg-white"></div>
        </div>
        <div className=" flex  gap-8 items-center justify-center mt-5 ">
          <div className="relative inline-flex  group cursor-pointer">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-[2px] group-hover:duration-200 animate-tilt"></div>
            <div
              title="Get quote now"
              className="relative inline-flex items-center justify-center h-[40px] w-[40px]  rounded-full text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj  focus:outline-none focus:ring-[2px] focus:ring-offset-[2px] focus:ring-gray-900"
            >
              <AppleIcon h={20} w={20} c="white" />
            </div>
          </div>
          <div className="relative inline-flex  group cursor-pointer">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-[2px] group-hover:duration-200 animate-tilt"></div>
            <div
              title="Get quote now"
              className="relative inline-flex items-center justify-center h-[40px] w-[40px]  rounded-full text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj  focus:outline-none focus:ring-[2px] focus:ring-offset-[2px] focus:ring-gray-900"
            >
              <GoogleIcon h={20} w={20} c="white" />
            </div>
          </div>
          <div className="relative inline-flex  group cursor-pointer">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-[2px] group-hover:duration-200 animate-tilt"></div>
            <div
              title="Get quote now"
              className="relative inline-flex items-center justify-center h-[40px] w-[40px]  rounded-full text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj  focus:outline-none focus:ring-[2px] focus:ring-offset-[2px] focus:ring-gray-900"
            >
              <FacebookIcon h={33} w={33} c="white" />
            </div>
          </div>
        </div>
        <p className=" text-sm text-center mt-8 font-semibold text-white ">
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
