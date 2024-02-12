import Bottom from "./bottom";
import Insideheader from "./header";
import MiddleSection from "./middlecontent";

export default function Fulldeatail() {
  return (
    <div className="  h-full w-full relative">
      <div className=" h-[60px] ">
        <Insideheader />
      </div>
      <div className=" h-[calc(100%-110px)]">
        <MiddleSection />
      </div>
      <div className="h-[50px] w-full absolute bottom-0 right-0">
        <Bottom />
      </div>
      <div className=" h-[calc(100%)] absolute top-0 left-0  w-full">
        <img
          src="https://cdn.pixabay.com/photo/2020/01/09/01/00/eyes-4751572_1280.png"
          alt=""
          className=" h-full w-full"
        />
      </div>
    </div>
  );
}
