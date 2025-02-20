import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdOutlineFlight } from "react-icons/md";
import { PiBusDuotone } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { PiAirplaneInFlight } from "react-icons/pi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";


const LandingPage2 = () => {
  return (
    <>
      <div className="ml-40 mr-40">
        <Navbar />
      </div>
      <div className="bg-[#E0F5FD] h-40 absolute w-full"></div>
      <div className="relative top-5 ml-40 mr-40">
        <Hero />
      </div>
    </>
  );
};

export default LandingPage2;

const Hero = () => {
  return (
    <div>
      <div className="w-full flex items-center gap-10">
        <Link className="flex items-center justify-center gap-2">
          {" "}
          <MdOutlineFlight /> Flights
        </Link>
        <Link className="flex items-center justify-center gap-2">
          {" "}
          <PiBusDuotone /> Bus
        </Link>
        <Link className="flex items-center justify-center gap-2">
          {" "}
          <IoTrainOutline /> Trains
        </Link>
        <Link className="flex items-center justify-center gap-2">
          {" "}
          <PiAirplaneInFlight /> Intl. Flights
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-4 gap-5 flex flex-col mt-5">
        {/* top */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              value="one-way"
              className="peer hidden"
            />
            <div className="w-5 h-5 border-1 border-[#00B9F5] rounded-full flex items-center justify-center peer-checked:bg-[#00B9F5]">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span>One Way</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              value="round-trip"
              className="peer hidden"
            />
            <div className="w-5 h-5 border-1 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-[#00B9F5] peer-checked:bg-[#00B9F5]">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span>Round Trip</span>
          </label>
        </div>
        {/* middle */}
        <div className="flex items-center gap-5">
            <label htmlFor="From" className="flex flex-col w-30">
              <span>From</span>
              <input type="text" value={"Bengaluru"} className=""/>
            </label>

            <div className="flex rounded-full p-1 border-1 border-[#06BAF5]">
              <HiMiniArrowsRightLeft className="text-[#06BAF5]"/>
            </div>
            
            <label htmlFor="to" className="flex flex-col">
              <span>To</span>
              <input type="text" value={"Shivamogga"}/>
            </label>
            <div className="w-px h-6 bg-gray-300"></div>

            <label htmlFor="to" className="flex flex-col">
              <span>Depart</span>
              <input type="text" value={"Sun, 23 Feb 25"}/>
            </label>
            <div className="w-px h-6 bg-gray-300"></div>

            <label htmlFor="to" className="flex flex-col">
              <span>Return</span>
              <input type="text" value={"Add Return"}/>
            </label>
            <div className="w-px h-6 bg-gray-300"></div>

            <label htmlFor="to" className="flex flex-col">
              <span>Passenger & Class</span>
              <input type="text" value={"Shivamogga"}/>
            </label>
            <div className="w-px h-6 bg-gray-300"></div>

        </div>
        {/* bottom */}
        <div className="">
          <hr className=""/>

        </div>
      </div>

    </div>
  );
};
