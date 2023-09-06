import { Route, Routes } from "react-router-dom";

import Layout from "./pages";
import Page404 from "./components/components/404";
import LazyLoad from "@shared/components/LazyLoad/LazyLoad";
import MenPage from "./pages/MenPage";
import ShoppingCart from "@shared/components/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={LazyLoad(() => import("@pages/HomePage"))()} />
        {/* <Route
          path="/new"
          element={LazyLoad(() => import("@pages/NewArrivals"))()}
        /> */}
        <Route
          path="/men"
          // element={<MenPage />}
          element={LazyLoad(() => import("@pages/MenPage"))()}
        />
        <Route
          path="/women"
          element={LazyLoad(() => import("@pages/WomenPage"))()}
        />
        <Route
          path="/login"
          element={LazyLoad(() => import("@shared/components/LuxeForm"))()}
        />
        <Route
          path="/detail"
          element={LazyLoad(() => import("@shared/components/ProductDetail"))()}
        />
        <Route
          path="/shopping-cart"
          element={<ShoppingCart />}
          // LazyLoad(() => import("@shared/components/ShoppingCart"))()
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
