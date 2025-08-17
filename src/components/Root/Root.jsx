import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
