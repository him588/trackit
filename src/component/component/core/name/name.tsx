export default function Name() {
  return (
    <div className="flex items-center gap-2 relative">
      <div className=" h-[45px] w-[45px] bg-opacity-30  bg-[#b437b4] text-[#b437b4] rounded-full text-3xl font-normal flex items-center justify-center">
        H
      </div>
      <div>
        <p className=" text-lg font-normal">Himanshu</p>
        <p className=" text-sm text-[#6a6969]">3 days ago</p>
      </div>
      <div className=" absolute right-0">
        <p className="text-[grey] font-normal">You'll give</p>
        <p className=" text-[green] text-right font-semibold">₹450</p>
      </div>
    </div>
  );
}
