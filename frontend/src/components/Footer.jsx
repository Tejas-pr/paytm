import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-4 mb-0 pb-0">
      {/* top */}
      <div className="flex justify-between items-center ml-40 mr-40">
        <p
          className="hover:underline hover:cursor-pointer"
          onClick={() => {
            window.open("https://tejaspr-portfolio.vercel.app/", "_blank");
          }}
        >
          © 2025 Tejas
        </p>
        <div className="flex gap-5">
          <p>Follow Us</p>
          <div className="flex gap-5">
            <FaInstagram
              className="hover:cursor-pointer"
              size={23}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/tejas_p_r?igsh=MWs5Y3kxenptYXIxdA==",
                  "_blank"
                );
              }}
            />
            <CiLinkedin
              size={23}
              className="hover:cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/tejas-p-r-057a4622a/",
                  "_blank"
                );
              }}
            />
            <FaXTwitter
              size={23}
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://x.com/Tejas67061437", "_blank");
              }}
            />
            <FaGithubSquare
              size={23}
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("https://github.com/Tejas-pr", "_blank");
              }}
            />
            <MdOutlineMailOutline
              size={23}
              className="hover:cursor-pointer"
              onClick={() => {
                window.open("mailto:tejas.teju02@gmail.com");
              }}
            />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="mb-0 pb-0 mt-5">
        <div className="bg-[#00BAF2] w-full h-4"></div>
        <div className="bg-[#002970] w-full h-4"></div>
      </div>
    </div>
  );
};

export default Footer;
