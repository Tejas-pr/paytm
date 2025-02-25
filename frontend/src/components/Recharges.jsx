import { CiMobile3 } from "react-icons/ci";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdInstallMobile } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { MdBroadcastOnHome } from "react-icons/md";


const Recharges = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-start shadow-sm shadow-slate-200 p-5 rounded-lg w-full gap-2">
        <div className="font-semibold text-lg">
          <h1>Recharges</h1>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <CiMobile3 size={40} />
            <p className="text-[12px]">Mobile</p>
            <p className="text-[12px]">Recharge</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <MdOutlineSettingsInputAntenna size={40} />
            <p className="text-[12px]">DTH</p>
            <p className="text-[12px]">Recharge</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <IoCarSportOutline size={40} />
            <p className="text-[12px]">FasTag</p>
            <p className="text-[12px]">Recharge</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <FaArrowRight size={30} />
            <p className="text-[12px]">View All</p>
            <p className="text-[12px]">Products</p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#00B8F5] p-3 gap-2 rounded-md text-white">
            <div className="rounded-full bg-white p-2">
                <MdInstallMobile color="black" size={20} />
            </div>
            <p className="text-start">
                Do Mobile Recharge and win ₹100 cashback. Promo: <b>TAKEITALL</b>
            </p>
            <div className="py-1 px-8 rounded-full border border-white hover:cursor-pointer">
                Recharge
            </div>
        </div>


      </div>


      <div className="flex flex-col items-start justify-start shadow-sm shadow-slate-200 p-5 rounded-lg w-full gap-2">
        <div className="font-semibold text-lg">
          <h1>Bill Payments</h1>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <CiCreditCard1 size={40} />
            <p className="text-[12px]">Credit Card</p>
            <p className="text-[12px]">Payment</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <FaRegLightbulb size={40} />
            <p className="text-[12px]">Electricity</p>
            <p className="text-[12px]">Bill</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <MdBroadcastOnHome size={40} />
            <p className="text-[12px]">BroadBand</p>
            <p className="text-[12px]">Bill</p>
          </div>
          <div className="flex flex-col p-5 items-center justify-center hover:shadow-sm hover:shadow-slate-300 hover:cursor-pointer rounded-md">
            <FaArrowRight size={30} />
            <p className="text-[12px]">View All</p>
            <p className="text-[12px]">Products</p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#2F82ED] p-3 gap-2 rounded-md text-white">
            <div className="rounded-full bg-white p-2">
                <MdInstallMobile color="black" size={20} />
            </div>
            <p className="text-start">
                Do BroadBand Recharge and win ₹100 cashback. Promo: <b>TAKEITALL</b>
            </p>
            <div className="py-1 px-8 rounded-full border border-white hover:cursor-pointer">
                Pay
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Recharges;
