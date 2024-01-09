import image from "../../images/[removal.ai]_a1640eb0-18e1-42b9-9ee7-87fe13aa96d0-aiony-haust-3tll_97hnjo-unsplash_5NYG3I.png";

export default function Design() {
  return (
    <div className=" min-h-[95vh] w-full relative flex items-center justify-center rounded-3xl bg-[#0f1525] ">
      <div className=" h-[400px] w-[400px]  border-solid z-10 border-b-[2px] border-l-[2px] absolute bottom-[20px] left-[20px]"></div>
      <img
        src={image}
        alt=""
        className=" w-full h-[110%]   absolute bottom-0 z-0"
      />
    </div>
  );
}
