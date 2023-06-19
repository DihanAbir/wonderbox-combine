import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navber from "../components/Shared/Navber";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
