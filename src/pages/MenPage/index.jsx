/* eslint-disable no-unused-vars */
import api from "@api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardProduct from "@shared/components/Card";
import Pagination from "@shared/components/Pagination";
import BreadCrumbs from "@shared/components/BreadCrumbs";
import Sort from "@shared/components/Sort";
import MobileFilter from "@shared/components/Filter/Mobile";

export default function MenPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productTotal, setProductTotal] = useState(1);
  const [sortType, setSortType] = useState("");

  const filterType = useSelector((store) => store.filter);
  const { running, tennis, twoMillion, threeMillion, fourMillion } = filterType;

  useEffect(() => {
    let perPage = 21;
    let endIndex = currentPage * perPage;
    let startIndex = endIndex - perPage;
    let data = [];
    let filterByPrice = [];
    let filterByCategory = [];

    const fetchData = async () => {
      const response = await api.product.findProductByGender("MEN");

      if (response.status === 200) {
        if (running && tennis) {
          filterByCategory = [...response.data];
        } else if (running) {
          filterByCategory = response.data.filter(
            (item) => item.category === "RUNNING SHOES",
          );
        } else if (tennis) {
          filterByCategory = response.data.filter(
            (item) => item.category === "TENNIS SHOES",
          );
        } else {
          filterByCategory = [...response.data];
        }

        if (twoMillion) {
          filterByPrice = filterByCategory.filter(
            (item) => item.price < "2000000",
          );
        } else if (threeMillion) {
          filterByPrice = filterByCategory.filter(
            (item) => item.price < "3000000",
          );
        } else if (fourMillion) {
          filterByPrice = filterByCategory.filter(
            (item) => item.price < "4000000",
          );
        } else {
          filterByPrice = filterByCategory;
        }

        const number = Math.ceil(filterByPrice.length / perPage);

        for (startIndex; startIndex < endIndex; startIndex++) {
          if (filterByPrice[startIndex]) {
            data.push(filterByPrice[startIndex]);
          }
        }

        if (sortType) {
          switch (sortType) {
            case "HightToLow":
              data.sort((a, b) => b.price - a.price);
              setProducts(data);
              break;
            case "LowToHight":
              data.sort((a, b) => a.price - b.price);
              setProducts(data);
              break;
            case "AToZ":
              data.sort((a, b) => (a.name < b.name ? -1 : 1));
              setProducts(data);
              break;
            case "ZToA":
              data.sort((a, b) => (a.name < b.name ? 1 : -1));
              setProducts(data);
              break;
          }
        } else {
          setTotalPages(number);
          setProducts(data);
          setProductTotal(filterByPrice.length);
        }
      }
    };
    fetchData();
  }, [currentPage, sortType, filterType]);

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
      <BreadCrumbs name="Men" />
      {/* =======Small Screen====== */}
      <div className="relative flex items-center w-full  justify-center mt-3 md:hidden">
        <div className="mr-1">
          <MobileFilter />
        </div>
        <Sort />
      </div>
      <div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-3xl text-blue-900 font-semibold">
            <span>Shoes</span>
            <span className="ml-2 text-xl">({productTotal} Products)</span>
          </p>
          <div className="relative hidden md:block md:flex   ">
            <div className="mr-1">
              <MobileFilter />
            </div>
            <Sort setSortType={setSortType} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-4 lg:grid-cols-3">
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
