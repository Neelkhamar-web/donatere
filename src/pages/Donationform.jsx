import React, { useState, useEffect } from "react";
import Donateindividual from "./Donateindividual";
import "../App.css";
import { BsSliders } from "react-icons/bs";

const Donationform = () => {
  const [organization, setOrganization] = useState([]);
  const [organizationname, setOrganizationname] = useState("");

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/donate"); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setOrganization(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle click to set the selected organization name
  const handleclick = (id) => {
    const item = organization.find((item) => item.id === id);
    const { name } = item;
    setOrganizationname(name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen border border-gray">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#E7E7E7] p-4">
        <h1 className="text-3xl font-semibold text-[#466D68] mb-4">
          Select Non-Profit
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-[#466D68] bg-white rounded-lg placeholder-[#466D68] mb-4"
          onChange={(e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredOrganizations = organization.filter((item) =>
              item.name.toLowerCase().includes(searchTerm)
            );
            setOrganization(filteredOrganizations);
          }}
        />
        {organization.map((item) => (
          <div
            key={item.id}
            className="block p-2 text-[#466D68] hover:bg-[#1A7B6F] hover:text-white cursor-pointer"
            onClick={() => handleclick(item.id)}
          >
            {item.name}
          </div>
        ))}

        <div className="flex  pt-[90%]">
          <button className="bg-[#466D68] text-white border border-white py-3 px-6 rounded text-xl flex items-center justify-between gap-6 w-[40%] h-12">
            Filter
            <BsSliders />
          </button>

          <button className="bg-[#466D68] text-white border border-white py-3 px-6  rounded text-xl flex items-center justify-center w-[40%] h-12">
            Check
          </button>
        </div>
      </div>

      {/* Donation Form */}
      <div className="w-[60%] p-6 bg-white rounded-lg">
        <Donateindividual name={organizationname} />
      </div>
    </div>
  );
};

export default Donationform;
