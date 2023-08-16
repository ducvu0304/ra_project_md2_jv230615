import CardItem from "./CardItem";
import { useState, useEffect } from "react";

let dataProduct = [];

const Cards = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/products";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const updateProduct = [...products];
    updateProduct.splice(id, 1);
    setProducts(updateProduct);
  };

  return (
    <div className="mt-3">
      <div>
        <p className="text-4xl font-semibold text-center">Our Products</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iure
          ex placeat vel quo facere expedita?
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-col-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0 &&
            products.map((item, index) => (
              <CardItem
                key={index}
                item={item}
                handleDelete={handleDelete}
                id={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Cards;
