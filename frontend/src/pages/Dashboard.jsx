import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/svg1.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {

  // add debounching
  // show only 5 users on search
  const [search, setSearch] = React.useState([]);
  const [filter, setFilter] = useState();
  const [balance, setBalance] = useState();
  const navigate = useNavigate();
  const handleDashboarddata = async (filter = "") => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/bulk?filter=${filter}`
      );
      const data = response.data;
      console.log(data);
      setSearch(data.user || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearch([]);
    }
  };  

  const handleDashboardbalance = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/account/balance`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("logToken")}`
        }
      });
      const data = response.data;
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  

  useEffect(() => {
    handleDashboardbalance();
  }, []);

  useEffect(() => {
    handleDashboarddata(filter);
  }, [filter]);

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
            navigate("/signin")
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
        <div className="flex items-center justify-between p-6">
          <p className="font-bold text-xl">Your current balance: {balance}</p>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setFilter(e.target.value)}
            className="w-60 px-6 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* inner */}
        <div className="grid grid-cols-1 items-center justify-start md:grid-cols-2 lg:grid-cols-4 p-4 gap-10">
          {search.length > 0 && search.map((user) => (
              <div key={user._id} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-md w-full transition duration-300 ease-in-out hover:-translate-y-0.5">
                <p className="text-lg font-semibold text-gray-700">{user.firstName} {user.lastName}</p>
                <button
                onClick={() => {
                  navigate(`/transfer?id=${user._id}&name=${user.firstName}`);
                }}
                className="px-4 py-2 text-white bg-blue-600 hover:cursor-pointer hover:bg-blue-700 rounded-lg shadow transition-all">
                  Send Money
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
