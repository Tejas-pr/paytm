import React from "react";
import paytmLogo from "../assets/paytm.svg";
import logoutImg from "../assets/logoutImg.svg";
import { Link, useNavigate } from "react-router-dom";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("logToken");
  return (
    <div className="flex justify-between items-center p-3">
      <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
        <img src={paytmLogo} alt="logo" />
      </div>

      <div className="flex justify-center items-center gap-5 font-semibold text-sm">
        <Link className="flex items-center justify-center gap-1" to={"#"}>
          Ticket Booking <IoIosArrowDown size={12} />{" "}
        </Link>
        <Link className="flex items-center justify-center gap-1" to={"#"}>
          Recharge & Bills <IoIosArrowDown size={12} />{" "}
        </Link>
        <Link className="flex items-center justify-center gap-1" to={"#"}>
          Payments & Services <IoIosArrowDown size={12} />{" "}
        </Link>
        <Link className="flex items-center justify-center gap-1" to={"#"}>
          Paytm for Business <IoIosArrowDown size={12} />{" "}
        </Link>
        <Link className="flex items-center justify-center gap-1" to={"#"}>
          Company <IoIosArrowDown size={12} />{" "}
        </Link>
      </div>

      <div className="flex justify-center items-center gap-5 font-semibold text-sm">
        <div className="flex justify-center items-center hover:cursor-pointer">
          <LiaDownloadSolid />
          <p>Download App</p>
        </div>

        <div className="flex justify-center items-center bg-[#002970] text-white rounded-3xl hover:cursor-pointer">
          <img src={logoutImg} alt="logout" className="p-1" />
          {!token ? (
            <p
              className="px-2 mr-1 cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </p>
          ) : (
            <p
              className="px-2 mr-1 cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Sign Out
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
