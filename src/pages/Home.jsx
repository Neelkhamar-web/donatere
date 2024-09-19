import React from "react";
import "../App.css"; // Ensure this is imported if you are using a separate CSS file
import Vector13 from "../assets/Vector 13.png";
import Vector14 from "../assets/Vector 14.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-[#1a7b6f] h-screen flex flex-col text-white font-poppins p-4 relative">
        <div className="container mx-auto flex flex-col items-end md:items-end pr-4 md:pr-16">
          <h1 className="text-4xl md:text-6xl text-right mt-16 md:mt-32 pr-2 md:pr-8 font-light">
            tiny<span className="font-bold text-4xl md:text-6xl">tribute</span>
          </h1>
          <span className="text-3xl md:text-6xl font-extrabold mt-4 block pr-2 md:pr-8 text-right">
            Honour Through Giving
          </span>
          <span className="text-lg md:text-2xl mt-4 block pr-2 md:pr-8 text-right">
            Celebrate your cherished ones by lending a helping hand
            <br /> to the ones in need.
          </span>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 pr-2 md:pr-8">
            <Link to="/donation">
              <button className="bg-white text-[#1a7b6f] py-2 px-4 rounded text-lg md:text-xl">
                New Tribute
              </button>
            </Link>
            <button className="bg-transparent text-white border border-white py-2 px-4 rounded text-lg md:text-xl">
              Tribute History
            </button>
          </div>
        </div>
        <img
          className="absolute top-0 right-0 md:right-0 w-24 md:w-auto md:top-16"
          src={Vector13}
          alt="Vector 13"
        />
      </div>
      <img
        className="absolute bottom-0 right-0 md:right-0 w-full md:w-auto object-cover"
        src={Vector14}
        alt="Vector 14"
      />
      <img
        className="absolute bottom-0 right-0 md:right-0 h-48 md:h-64"
        src={Vector}
        alt="Vector"
      />
    </>
  );
};

export default Home;
