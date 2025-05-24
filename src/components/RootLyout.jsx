import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Fotter from "./Fotter";
import { Outlet } from "react-router-dom";

const RootLyout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default RootLyout;
