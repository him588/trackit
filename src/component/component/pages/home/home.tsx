import Design from "./design";
import HomeNav from "./homenav";

export default function Home() {
  return (
    <div className=" h-screen min-w-[100vh]">
      <HomeNav />
      <Design />
    </div>
  );
}
