import React, { useEffect, useState } from "react";
import CardProduct from "@shared/components/Card";
import Pagination from "@shared/components/Pagination";
import Filter from "@shared/components/Filter";
import api from "@api";

export default function MenPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let perPage = 16;
    let endIndex = currentPage * perPage;
    let startIndex = endIndex - perPage;

    const fetchData = async () => {
      const response = await api.products.findAllProductsByGender("MEN");

      if (response.status === 200) {
        const number = Math.ceil(response.data.length / perPage);
        const data = [];

        for (startIndex; startIndex < endIndex; startIndex++) {
          if(response.data[startIndex]) {
            data.push(response.data[startIndex]);
          }

        }
        setTotalPages(number);
        setProducts(data);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleSetPage = (name) => {
    if(name === 'next') {
      if(currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }else if(name === 'prev') {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  return (
    <div className="bg-[#f7f7f7] pb-6">
      <div>
        <Filter products={products} />
      </div>
      <div className="grid grid-cols-1 mx-10 md:grid-cols-2 pt-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <CardProduct key={item.id} product={item} />
        ))}
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
