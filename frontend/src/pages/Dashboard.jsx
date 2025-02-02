import React from "react";
import logo from "../assets/svg1.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* navabar */}
      <div className="flex items-center justify-between p-5 bg-red-100/20 px-20 shadow-black/5 shadow-md">
        <div className="flex items-center justify-center gap-3">
          <img src={logo} alt="logo" className="w-10" />
          <p className="font-bold text-2xl">Paytm</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("logToken");
          }}
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Log out
        </button>
      </div>
      {/* body */}
      <div className="">
        {/* search */}
        <div className="flex items-center justify-end p-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 px-6 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="ml-4 text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-3 transition-all"
          >
            Search
          </button>
        </div>

        {/* inner */}
        <div className="grid grid-cols-1 items-center justify-start md:grid-cols-2 lg:grid-cols-4 p-4">

          <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md w-full transition duration-300 ease-in-out hover:-translate-y-0.5">
            <p className="text-lg font-semibold text-gray-700">Tejas</p>
            <button
            onClick={() => {
              navigate("/transfer")
            }}
            className="px-4 py-2 text-white bg-blue-600 hover:cursor-pointer hover:bg-blue-700 rounded-lg shadow transition-all">
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
