export default function Profile(show:{show:boolean}) {
  console.log(show.show)
  return (
    <div className=" h-[70px] py-1 px-2 w-full gap-2 items-center cursor-pointer bg-[#16233e] mt-2 rounded-md flex">
      <div className={`"w-[50px] h-[50px] rounded-md  bg-[#f829ba] flex justify-center items-center ${show?"w-[50px]":"w-[65px]"}`}>
        <p className=" text-[40px] font-medium text-white">H</p>
      </div>
      {show.show?<div>
        <p className=" text-lg text-white">{show?"Himanshu":""}</p>
        <p className=" text-green-700 -mt-2 text-base font-semibold">
          <span className=" text-[50px] leading-3 -mt-5">.</span> Online
        </p>
      </div>:""}
      
    </div>
  );
}
