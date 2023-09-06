/* eslint-disable react/prop-types */
import { changeVND } from "@Js";
import { useDispatch } from "react-redux";
import { cartActions } from "@store/cart.slice";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (id) => {
    if (product.quantity > 1) {
      dispatch(cartActions.decreaseQuantity(id));
    }
  };

  return (
    <div className="flex justify-between mx-4 mb-3 pt-2 border-b-[1px] border-t-[1px] border-orange-200">
      <div className="flex justify-between ">
        <img
          className="w-[150px]"
          src={
            product.img
              ? product.img
              : "https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B600_004_0020044289_RT_Large.jpg"
          }
          alt="product-image"
        />
      </div>
      <div className="flex-1 ml-4">
        <div className="">
          <p className="text-blue-900 font-semibold">
            {product.name ? product.name : "GEL-EXCITE 10"}
          </p>
          <p className="text-xs my-1 text-primary-v1">
            {product.category ? product.category : "Running"}
          </p>
          <p className="text-sm text-orange-800">
            {product.price ? changeVND(product.price) : "0"} đ
          </p>
        </div>
        {/* left */}
        <div className=" ">
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex justify-between items-center mt-2 px-2 border-[1px] w-[80px]">
              <div
                className="cursor-pointer text-lg"
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                <i className="fa-solid fa-caret-left"></i>
              </div>
              <span className="w-7 text-center border-l-2 border-r-2">
                {product.quantity ? product.quantity : "1"}
              </span>
              <div
                className="cursor-pointer text-lg"
                onClick={() =>
                  dispatch(cartActions.increaseQuantity(product.id))
                }
              >
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div
              onClick={() => dispatch(cartActions.removeProduct(product.id))}
              className="cursor-pointer text-gray-500/60  hover:text-red-500"
            >
              <i className="fa-solid fa-trash text-sm"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
