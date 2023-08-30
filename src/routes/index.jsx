import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="men" element={<MenPage />}/> */}
      </Route>
    </Routes>
  );
}
