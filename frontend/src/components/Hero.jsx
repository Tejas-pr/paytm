import paytmTraverl from "../assets/Paytm_Travel_Logo.svg";
import { Link } from "react-router-dom";
import { MdOutlineFlight } from "react-icons/md";
import { PiBusDuotone } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { PiAirplaneInFlight } from "react-icons/pi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";

const Hero = () => {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-5 md:gap-10">
            <Link className="flex items-center justify-center gap-2">
              <MdOutlineFlight /> Flights
            </Link>
            <Link className="flex items-center justify-center gap-2">
              <PiBusDuotone /> Bus
            </Link>
            <Link className="flex items-center justify-center gap-2">
              <IoTrainOutline /> Trains
            </Link>
            <Link className="flex items-center justify-center gap-2">
              <PiAirplaneInFlight /> Intl. Flights
            </Link>
          </div>
  
          {/* Logo */}
          <div className="mt-4 md:mt-0">
            <img src={paytmTraverl} alt="travel logo" className="w-32 md:w-40" />
          </div>
        </div>
  
        {/* Booking Section */}
        <div className="rounded-2xl p-5 gap-5 flex flex-col mt-5 bg-white border border-gray-300">
          {/* Top - Trip Selection */}
          <div className="flex items-center flex-wrap gap-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="trip" className="peer hidden" />
              <div className="w-5 h-5 border border-[#00B9F5] rounded-full flex items-center justify-center peer-checked:bg-[#00B9F5]">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              <span>One Way</span>
            </label>
  
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="trip" className="peer hidden" />
              <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-[#00B9F5]">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              <span>Round Trip</span>
            </label>
          </div>
  
          {/* Middle - Search Inputs */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-evenly w-full gap-2">
            <label className="flex flex-col">
              <span className="text-xs text-[#7D7D7D]">From</span>
              <input type="text" placeholder="Delhi (DEL)" className="w-[110px] min-w-[80px] font-bold text-black" />
            </label>
  
            <div className="flex rounded-full p-1 border border-[#06BAF5]">
              <HiMiniArrowsRightLeft size={14} className="text-[#06BAF5]" />
            </div>
  
            <label className="flex flex-col">
              <span className="text-xs text-[#7D7D7D]">To</span>
              <input type="text" placeholder="Shivamogga (SHV)" className="w-[140px] min-w-[80px] font-bold text-black" />
            </label>
  
            <div className="w-px h-6 bg-gray-300"></div>
  
            <label className="flex flex-col">
              <span className="text-xs text-[#7D7D7D]">Depart</span>
              <input type="text" placeholder="Sat, 01 Mar 25" className="w-[110px] min-w-[80px] font-bold text-black" />
            </label>
  
            <div className="w-px h-6 bg-gray-300"></div>
  
            <label className="flex flex-col">
              <span className="text-xs text-[#7D7D7D]">Return</span>
              <input type="text" placeholder="Add Return" className="w-[110px] min-w-[80px] font-bold text-[#26A8DA]" />
            </label>
  
            <div className="w-px h-6 bg-gray-300"></div>
  
            <label className="flex flex-col">
              <span className="text-xs text-[#7D7D7D]">Passenger & Class</span>
              <input type="text" placeholder="1 Traveller, Economy" className="w-[140px] min-w-[100px] font-bold text-black" />
            </label>
  
            <button className="bg-[#00BAF2] text-white px-4 py-2 text-sm rounded-lg font-bold hover:cursor-pointer">
              Search Flights
            </button>
          </div>
  
          {/* Bottom - Special Offers */}
          <div>
            <hr className="border-[#7D7D7D]" />
  
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-5 mt-3 text-sm">
              <div>
                <p className="text-[#857D7D]">Special Fares (optional)</p>
                <p className="text-[#27AE8E]">Extra Savings</p>
              </div>
  
              <div className="flex flex-wrap gap-2 text-[12px]">
                <div className="flex flex-col items-center justify-center px-2 py-1 border border-slate-400 rounded-md">
                  <p className="font-semibold">Armed Forces</p>
                  <p className="text-[#7D7D7D]">Up to ₹600 off</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-1 border border-slate-400 rounded-md">
                  <p className="font-semibold">Student</p>
                  <p className="text-[#7D7D7D]">Extra Baggage</p>
                </div>
                <div className="flex flex-col items-center justify-center px-2 py-1 border border-slate-400 rounded-md">
                  <p className="font-semibold">Senior Citizen</p>
                  <p className="text-[#7D7D7D]">Up to ₹600 off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero