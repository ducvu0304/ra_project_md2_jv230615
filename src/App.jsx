import { Route, Routes } from "react-router-dom";

import Layout from "./pages";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import LuxeForm from "@shared/components/LuxeForm";
import ProductDetail from "@shared/components/ProductDetail";
import WomenPage from "./pages/WomenPage";
import NewArrivals from "./pages/NewArrivals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewArrivals />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/login" element={<LuxeForm />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
