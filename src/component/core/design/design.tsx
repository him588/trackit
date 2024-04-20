// import image from "../../images/[removal.ai]_a1640eb0-18e1-42b9-9ee7-87fe13aa96d0-aiony-haust-3tll_97hnjo-unsplash_5NYG3I.png";
import image from "../../images/photo-1534528741775-53994a69daeb-removebg-preview.png"

export default function Design() {
  return (
    <div className=" min-h-[95vh] w-[95%] p-7 relative flex flex-col justify-end shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl bg-[#0c1329]   overflow-hidden  ">
      <div className=" h-[150px] w-[150px]  border-solid z-10 border-b-[2px] border-l-[2px] absolute bottom-[20px] left-[20px]"></div>
      <div className=" h-[150px] w-[150px]  border-solid z-10 border-t-[2px] border-r-[2px] absolute top-[20px] right-[20px]"></div>
      <img
        src={image}
        alt=""
        className=" w-full h-[110%] absolute left-0  opacity-60    bottom-0 z-0"
      />
      <h1 className=" relative z-50 text-[40px] font-semibold text-white">
        We are here to{" "}
        <span className=" block">
          {" "}
          <span className="text-[45px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            simplify
          </span>{" "}
          you Expense
        </span>
      </h1>
    </div>
  );
}
