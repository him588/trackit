export default function HomeNav() {
  return (
    <div className=" h-[100px] w-full font-[Ubuntu] py-4 px-10  flex items-center justify-between">
      <h1 className=" text-[30px] font-semibold leading-8">
        Trac<span className=" block">kit</span>
      </h1>
      <div className=" flex gap-10">
        <p className=" cursor-pointer hover:underline underline-offset-4 decoration-2 hover:decoration-[pink] hover:text-[17px]">
          About us
        </p>
        <p className=" cursor-pointer hover:underline underline-offset-4 decoration-2 hover:decoration-[pink] hover:text-[17px]">
          Pricing
        </p>
        <p className=" cursor-pointer hover:underline underline-offset-4 decoration-2 hover:decoration-[pink] hover:text-[17px]">
          Contact us
        </p>
      </div>
      <div className=" flex gap-3">
        <button className=" text-[18px] w-[100px] bg-[pink] rounded-3xl ">
          Sigh up
        </button>
        <button className=" text-[18px] bg-[pink] w-[100px]  py-2 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
}
