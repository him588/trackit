import Bottom from "./bottom";
import Insideheader from "./header";
import MiddleSection from "./middlecontent";

export default function Fulldeatail() {
  return (
    <div className="w-full h-screen flex-col items-center overflow-hidden">
      <div className=" h-[60px]">
        <Insideheader />
      </div>
      <div className=" h-[calc(100%-120px)] bg-red-400 max-h-screen overflow-hidden">
        <MiddleSection />
      </div>
      <div className="h-[60px] w-full">
        <Bottom />
      </div>
      
    </div>
  );
}
