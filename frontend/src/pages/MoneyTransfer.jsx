import React from "react";
import { User, Send, ArrowRight } from "lucide-react";

const MoneyTransfer = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <Send className="text-blue-600" /> Send Money
        </h1>

        {/* User Info */}
        <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
            <User />
          </div>
          <p className="text-lg font-medium text-gray-700">Friend Name</p>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Transfer Input */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Transfer Money:</h2>
        <input
          type="text"
          placeholder="Enter amount"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Send Button */}
        <div className="mt-4">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Send <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransfer;
