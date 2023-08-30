import React from "react";
import ProductGrid from "./components/product-grid";
import Filter from "@shared/components/filter/Filter";

export default function Men() {
  return (
    <div className="my-8">
      <Filter />
      <ProductGrid />
    </div>
  );
}
