import React from "react";
import Header from "../components/shared/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
