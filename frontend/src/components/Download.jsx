import React from "react";
import imageright from "../assets/paytm002.png";
import imagerLog from "../assets/paytm.svg";
import { FaArrowRight } from "react-icons/fa";

const Download = () => {
  return (
    <div className="flex justify-center items-center p-8 shadow-sm shadow-slate-200 rounded-lg gap-10">
      {/* left */}
      <div className="flex flex-col gap-5">
        <img src={imagerLog} alt="logo" width={`100`} />
        <h1 className="font-bold text-4xl text-black">
          Pay anyone directly <br /> from your bank <br />
          account.
        </h1>
        <p className="font-semibold text-black">
          Pay anyone, everywhere. Make contactless & secure <br />
          payments in-stores or online using Paytm UPI or <br />
          Directly from your Bank Account. Plus, send & receive <br />
          money from anyone.
        </p>
        <div className="flex gap-5 items-center justify-start">
          {/* App Store Button */}
          <a
            href="#"
            className="inline-flex items-center bg-black text-white font-medium rounded-lg text-lg px-5 py-2.5 hover:bg-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            App Store
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="inline-flex items-center bg-black text-white font-medium rounded-lg text-lg px-5 py-2.5 hover:bg-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L69.6 66.6C52 55.9 32 67 32 87v338c0 20 20 31.1 37.6 20.4l255.7-167.6c18-11.8 18-37.7 0-49.5zm16.8 16.8a44.58 44.58 0 010 63.1l-82.5 54.1L441 472.9c18.2 11.5 41-1.2 41-23V62.1c0-21.8-22.8-34.6-41-23L259.6 170.1l82.5 54z"
              />
            </svg>
            Google Play
          </a>
        </div>
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

export default Download;
