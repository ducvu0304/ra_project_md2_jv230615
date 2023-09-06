/* eslint-disable no-unused-vars */
import api from "@api";
import { search, searchByCharacter } from "@Js";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@store/product.slice";
import { Navigate } from "react-router-dom";

export default function SearchBar() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.product.findAllProduct();
      if (response.status === 200) {
        setProducts(response.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchValues = async () => {
      const characterData = await searchByCharacter(inputValue, products);
      const searchData = await search(inputValue, characterData);

      setSearchData(searchData);
    };

    searchValues();
  }, [inputValue]);

  return (
    <div className="relative">
      <div className="relative lg:flex">
        <i
          className="
              fa-solid fa-magnifying-glass
              absolute top-2 left-2 text-gray-300 
              cursor-pointer
              "
        ></i>
        <input
          name="searchValue"
          className="search bg-[#f3f4f6] text-slate-800 h-[32px] w-full pl-7 pr-3 rounded-lg"
          type="text"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {searchData.length > 0 ? (
        <div className="absolute overflow-auto transition-all ease-in-out duration-300  bg-[#f3f4f6] w-[225px] h-[160px] mt-1 text-gray-600 z-10">
          {searchData.map((item, index) => (
            <div
              onClick={() => dispatch(productActions.search(item))}
              key={index}
              className="transition-colors ease-in-out duration-100 cursor-pointer px-2 py-1 w-full hover:bg-gray-500 hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {product.isSearchValue ? <Navigate to="/detail" /> : ""}
    </div>
  );
}
