export default function Entry() {
    const account="customer"
  return <div className=" py-2 w-full flex items-center gap-2  relative hover:bg-[#f0f0f8] cursor-pointer">
    <div className=" h-[50px] w-[50px] rounded-full bg-[#163816] flex items-center justify-center text-[35px] text-white">
        H
    </div>
    <div className=" text-[#0f1525] flex flex-col gap-1">
          <p className=" text-base text-[#0f1525] font-medium  text-camel-case ml-1">
            2 kg allo
          </p>
     <div className=" flex gap-1">
        <div className=" h-[25px] rounded-3xl flex items-center justify-center px-3 bg-green-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20      ">
            <p className=" text-[#0f1525] font-medium">Sales</p>
        </div>
        <div className=" h-[25px] rounded-3xl flex items-center justify-center px-3 bg-purple-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20      ">
            <p className=" text-[#0f1525] font-medium">Recieved</p>
        </div>
     </div>
    </div>
    <div className=" absolute right-0">
          <p className="text-[grey] font-normal">{account==="customer"?"You'll get":"You'll give"}</p>
          <p className={`  text-right font-semibold ${account==="customer"?"text-[green]":"text-[#bd3b3b]"}`}>₹ 300</p>
    </div>
  </div>;
}

