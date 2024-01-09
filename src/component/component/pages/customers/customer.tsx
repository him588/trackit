import { Navbar } from "../../core";
import RenderCustomer from "./rendercustomer";

export default function Customer() {
  return (
    <div className=" min-h-screen flex">
      <Navbar />
      <div className=" w-[40%] min-h-screen">
        <RenderCustomer />
      </div>
    </div>
  );
}
