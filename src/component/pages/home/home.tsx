// import Design from "./design";
// import HomeNav from "./homenav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const router=useNavigate()
  useEffect(()=>{
    router("/login")
  },[router])
  const [IsAnimate, setIsAnimate] = useState(false);
  const [SecondBox, setSecondBox] = useState(false);
  return (
    <div className=" h-screen min-w-[100vh] p-6">
      {/* FIRST ANIMATION  */}
      {/* <motion.div
        className=" h-[250px] w-[250px] bg-[#29a27a] "
        animate={{
          x: IsAnimate ? 700 : 0,
          opacity: IsAnimate ? 1 : 0.5,
          rotate: IsAnimate ? 360 : 0,
        }}
        initial={{ opacity: 0.2 }}
        transition={{ stiffness: 100, type: "spring" }}
        onClick={() => setIsAnimate(!IsAnimate)}
      ></motion.div> */}

      {/* SECOND ANIMATION */}
      {/* <motion.div
        className=" h-[200px] w-[200px] bg-[#3bc5a0] mt-[40px] ml-11  "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        dragConstraints={{ right: 20, left: 10, top: 40, bottom: 20 }}
        drag
      ></motion.div> */}

      {/* THIRD ANIMATION */}

      <motion.div
        animate={{ x: 0 }}
        // transition={{ stiffness: 100, type: "tween" }}
        initial={{ x: -1000 }}
        className="h-[250px] w-[250px] bg-[#269b8b] rounded-md flex items-center justify-between flex-col p-3"
      >
        <div className=" h-[50px] w-[50px] bg-white rounded-md "></div>
        <div className=" h-[50px] w-[50px] bg-white rounded-md "></div>
        <div className=" h-[50px] w-[50px] bg-white rounded-md"></div>
      </motion.div>
    </div>
  );
}
