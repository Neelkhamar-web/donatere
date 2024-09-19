import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="w-full text-[#1a7b6f]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 h-20">
        <GiHamburgerMenu style={{ color: "#1a7b6f", fontSize: "2rem" }} />
        <span className="text-3xl font-light">
          <span style={{ color: "#1a7b6f", fontWeight: "300" }}>tiny</span>
          <span style={{ color: "#1a7b6f", fontWeight: "700" }}>Tribute</span>
        </span>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
