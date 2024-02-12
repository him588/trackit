export default function DateComponent({ date }: { date: string }) {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className="  px-3 py-1  bg-[#a1d4c0] text-[#3b3a3a] rounded-lg">
        {date}
      </div>
    </div>
  );
}
