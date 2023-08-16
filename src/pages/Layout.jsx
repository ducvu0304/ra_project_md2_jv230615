import React from "react";
import Header from "../components/shared/header";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
