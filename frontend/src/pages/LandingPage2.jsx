import React from "react";
import Navbar from "../components/Navbar";
import Recharges from "../components/Recharges";
import Business from "../components/Business";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PaytmMoney from "../components/PaytmMoney";
import Download from "../components/Download";

const LandingPage2 = () => {
  return (
    <>
      <div className="ml-40 mr-40">
        <Navbar />
      </div>
      <div className="bg-[#E0F5FD] h-40 absolute w-full"></div>
      <div className="relative top-5 ml-40 mr-40 space-y-14 mb-14">
        <Hero />
        <Recharges />
        <PaytmMoney />
        <Download />
        <Business />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage2;
