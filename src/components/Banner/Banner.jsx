// src/components/Banner/Banner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import BannerPic from "../../../Asset/Banner-pic.jpg"; // Adjust the path as necessary

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/listedbooks");
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center p-8 gap-2 "
      style={{
        backgroundColor: "#F3F3F3",
        height: "554px",
        borderRadius: "20px",
      }}
    >
      {/* Left side */}
      <div className="flex-1 text-black ml-8">
        <h1 className="text-4xl font-bold mb-4">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button
          onClick={handleClick}
          className="btn bg-[#23BE0A] mt-4 text-white px-6 py-2 hover:bg-green-700 transition"
        >
          View The List
        </button>
      </div>

      <div className="flex-1">
        <img
          src={BannerPic}
          alt="Books Banner"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
