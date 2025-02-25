import React from "react";
import imageright from "../assets/leftpaytm.png";
import imagerLog from "../assets/paytmb.png";
import { FaArrowRight } from "react-icons/fa";

const Business = () => {
  return (
    <div className="flex justify-center items-center p-10 shadow-sm shadow-slate-200 rounded-lg">
      {/* left */}
      <div className="flex flex-col gap-5">
        <img src={imagerLog} alt="logo" width={`100`}/>
        <h1 className="font-bold text-4xl text-black">Accept payments <br /> online & offline</h1>
        <p className="font-semibold text-black">
          Millions of small & big businesses use Paytm to accept  <br />
          payments anywhere any time with a wide range of <br />
          solutions for all kind of merchants.
        </p>
        <button className="flex items-center gap-1 bg-[#002970] text-white py-2 px-9 font-semibold rounded-full hover:cursor-pointer w-fit">Learn More <FaArrowRight /> </button>
      </div>
      {/* right  */}
      <div className="w-full h-full max-w-[475px] max-h-[440px]">
        <img src={imageright} alt="right img" className="w-[700px] h-auto object-fill" />
      </div>
    </div>
  );
};

export default Business;
