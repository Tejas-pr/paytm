import React from "react";
import imageright from "../assets/paytm001.png";
import imagerLog from "../assets/paytm01.png";
import { FaArrowRight } from "react-icons/fa";

const PaytmMoney = () => {
  return (
    <div className="flex justify-center items-center p-10 shadow-sm shadow-slate-200 rounded-lg gap-10">
      {/* left */}
      <div className="flex flex-col gap-5">
        <img src={imagerLog} alt="logo" width={`100`} />
        <h1 className="font-bold text-4xl text-black">
          Build Long-term <br /> Wealth & Achieve your <br /> Goals.
        </h1>
        <p className="font-semibold text-black">
          Investing on Paytm Money is transparent, low-cost and <br />
          commission-free. Buy stocks & mutual funds that can <br />
          help you create wealth & realise your dreams.
        </p>
        <button className="flex items-center gap-1 bg-[#002970] text-white py-2 px-9 font-semibold rounded-full hover:cursor-pointer w-fit">
          Learn More <FaArrowRight />{" "}
        </button>
      </div>
      {/* right  */}
      <div className="w-full h-full max-w-[475px] max-h-[440px]">
        <img
          src={imageright}
          alt="right img"
          className="w-[700px] h-auto object-fill"
        />
      </div>
    </div>
  );
};

export default PaytmMoney;
