import React, { useState } from "react";
import "../App.css";

const Donateindividual = ({ name }) => {
  const [donationAmount, setDonationAmount] = useState(0);
  const platformCharges = 0;
  const paymentGatewayCharges = 10;

  const handleDonationClick = (amount) => {
    setDonationAmount(amount);
  };

  const totalAmount = donationAmount + platformCharges + paymentGatewayCharges;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-[20%]"></div>
      <div className="w-full md:w-[55%] p-4 md:p-6 bg-white rounded-md">
        <span className="text-[#466D68] font-poppins text-xl md:text-2xl mt-4 block">
          You are donating to:
        </span>
        <h1 className="text-[#466D68] font-poppins text-3xl md:text-4xl font-semibold mt-2">
          {name}
        </h1>
        <h3 className="text-[#466D68] mt-12 text-xl md:text-2xl">
          Tribute Details.
        </h3>

        {/* First Name and Last Name Inputs */}
        <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full md:w-1/2 p-2 border border-2 border-[#466D68] bg-white rounded-lg placeholder-[#466D68] font-poppins"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full md:w-1/2 p-2 border border-2 border-[#466D68] bg-white rounded-lg placeholder-[#466D68] font-poppins"
          />
        </div>

        {/* Company Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 border border-2 border-[#466D68] bg-white rounded-lg placeholder-[#466D68] font-poppins"
          />
        </div>

        {/* Donation Amount Selection */}
        <div className="mb-4 mt-12">
          <label className="block mb-2 font-bold font-poppins text-[#466D68] text-lg md:text-xl">
            Select Donation Amount:
          </label>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
            {[500, 1000, 1500, 2000].map((amount) => (
              <button
                key={amount}
                className="border border-2 border-[#466D68] w-full md:w-1/4 p-2 text-[#466D68] rounded-md hover:bg-[#466D68] hover:text-white font-poppins"
                onClick={() => handleDonationClick(amount)}
              >
                ₹{amount}
              </button>
            ))}
          </div>

          {/* OR Separator */}
          <div className="relative flex items-center my-4">
            <hr className="w-full border-t-2 border-[#466D68]" />
            <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 text-[#466D68]">
              OR
            </span>
          </div>

          {/* Enter Custom Donation Amount */}
          <div className="mt-4">
            <input
              type="number"
              placeholder="Enter Amount"
              className="w-full p-2 border border-2 border-[#466D68] bg-white rounded-lg placeholder-[#466D68] font-poppins"
              onChange={(e) => setDonationAmount(Number(e.target.value))}
            />
          </div>

          {/* Donation Summary */}
          <div className="text-[#466D68] font-poppins space-y-2 mt-8">
            <div className="flex justify-between">
              <p>Donation Amount:</p>
              <p>₹{donationAmount}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Platform Charges:</p>
              <p>₹{platformCharges}</p>
            </div>
            <div className="flex justify-between mb-8">
              <p>Payment Gateway Charges:</p>
              <p>₹{paymentGatewayCharges}</p>
            </div>
            <hr className="my-6 border-t-2 border-[#466D68]" />
            <div className="flex justify-between font-semibold text-lg md:text-2xl">
              <p className="text-[#466D68]">Total:</p>
              <p className="text-[#466D68]">₹{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%]"></div> {/* Right Spacer */}
    </div>
  );
};

export default Donateindividual;
