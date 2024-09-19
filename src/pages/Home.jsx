import React from "react";
import "../App.css"; // Ensure this is imported if you are using a separate CSS file
import Vector13 from "../assets/Vector 13.png";
import Vector14 from "../assets/Vector 14.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-[#1a7b6f] h-screen flex flex-col text-white font-poppins p-8 relative">
        <div className="container mx-auto pl-16">
          <h1 className="text-6xl text-left mt-32 pl-8 font-light">
            tiny<span className="font-bold text-6xl">tribute</span>
          </h1>
          <span className="text-6xl font-extrabold mt-4 block pl-8 mt-8">
            Honour Through Giving
          </span>
          <span className="text-2xl mt-4 block pl-8">
            Celebrate your cherished ones by lending a helping hand
            <br /> to the ones in need.
          </span>
          <div className="flex space-x-4 mt-4 pl-8">
            <Link to="/donation">
              <button className="bg-white text-[#1a7b6f] py-3 px-6 rounded text-xl">
                New Tribute
              </button>
            </Link>
            <button className="bg-transparent text-white border border-white py-3 px-6 rounded text-xl">
              Tribute History
            </button>
          </div>
        </div>
        <div>
          <img className=" absolute top-0 right-96" src={Vector13} />
        </div>
      </div>
      <img
        className="border border-green-800  absolute bottom-56 w-full"
        src={Vector14}
      />
      <img className="absolute bottom-28 right-64 h-64 pr-4" src={Vector} />
    </>
  );
};

export default Home;
