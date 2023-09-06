/* eslint-disable react/prop-types */

import { cartActions } from "@store/cart.slice";
import { useDispatch } from "react-redux";
import { changeVND } from "@Js";
import { useEffect, useState } from "react";

export default function ProductInFo({ item }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (id) => {
    if (quantity > 1) {
      dispatch(cartActions.decreaseQuantity(id));
    }
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <tr>
      <td>
        <div className="flex gap-6">
          <div className="w-[150px]">
            <img
              className="w-full h-full object-contain"
              src={item.img}
              alt="product-image"
            />
          </div>
          <div className="flex flex-col justify-between pb-6 pt-4">
            <p className="font-semibold text-lg">{item.name}</p>
            <div className="text-xs">
              <p>Color: Red black</p>
              <p className="my-[1px]">Delivery: 2 days</p>
              <p className="cursor-pointer font-semibold underline hover:text-blue-700">
                See details
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="text-sm w-[100px] text-center">
        {changeVND(item.price)} đ
      </td>
      <td className="w-[100px]">
        <div className="flex justify-between px-4 border-[1px] w-[80px]">
          <div
            className="cursor-pointer"
            onClick={() => handleDecreaseQuantity(item.id)}
          >
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <span>{quantity}</span>
          <div
            className="cursor-pointer"
            onClick={() => handleIncreaseQuantity(item.id)}
          >
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </td>
      <td className="w-[120px]">
        {changeVND((item.price * quantity).toString())} đ
      </td>
      <td className="action">
        <span
          onClick={() => dispatch(cartActions.removeProduct(item.id))}
          className="text-gray-500 cursor-pointer hover:text-red-600 hover:underline"
        >
          remove
        </span>
      </td>
    </tr>
  );
}
