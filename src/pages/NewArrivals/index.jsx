import React, { useEffect, useState } from "react";
import CardProduct from "@shared/components/Card";
import Pagination from "@shared/components/Pagination";
import Filter from "@shared/components/Filter";
import api from "@api";
import { useSelector } from "react-redux";
import BreadCrumbs from "@shared/components/BreadCrumbs";
import Sort from "@shared/components/Sort";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productTotal, setProductTotal] = useState(1);

  useEffect(() => {
    let perPage = 12;
    let endIndex = currentPage * perPage;
    let startIndex = endIndex - perPage;

    const fetchData = async () => {
      const response = await api.product.findAllProduct();

      if (response.status === 200) {
        const number = Math.ceil(response.data.length / perPage);
        const data = [];

        for (startIndex; startIndex < endIndex; startIndex++) {
          if (response.data[startIndex]) {
            data.push(response.data[startIndex]);
          }
        }
        setTotalPages(number);
        setProducts(data);
        setProductTotal(response.data.length);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleSetPage = (name) => {
    if (name === "next") {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    } else if (name === "prev") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="px-4 lg:px-20">
      <BreadCrumbs />
      <div className="md:hidden">
        <Filter productTotal={productTotal} />
      </div>

      <div className="">
        <div className="flex items-center justify-between mt-4">
          <p className="text-3xl text-blue-900 font-semibold">
            <span>Shoes</span>
            <span className="ml-2 text-xl">({productTotal} Products)</span>
          </p>
          <div className="flex ">
            <div className="hidden md:block">
              <Filter productTotal={productTotal} />
            </div>
            <Sort />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-4 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map((item) => (
            <CardProduct key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleSetPage={handleSetPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
