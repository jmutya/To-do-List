import React from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/SideBar";

const MainLayout = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col items-center gap-8 md:gap-8 lg:gap-8">
      <Nav />
      <Outlet  />
    </div>
  );
};

export default MainLayout;