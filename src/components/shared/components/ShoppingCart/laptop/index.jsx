/* eslint-disable react/prop-types */
import "./style.css";
import { changeVND } from "@Js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import ProductInFo from "./components/Product.jsx";
import { Link } from "react-router-dom";

export default function LaptopCart({ cartProducts, handleCheckOut }) {
  const [subTotal, setSubTotal] = useState(0);
  const carts = useSelector((store) => store.cart.products);

  useEffect(() => {
    const value = carts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    setSubTotal(value);
  }, [carts]);

  return (
    <div className="bg-[#e7e7e7] px-8 py-4 pb-10">
      <div className="bg-slate-50 px-6 py-3">
        <h2 className="text-center text-3xl mb-4">YOUR CART</h2>
        <div className="flex gap-x-10">
          <div className="flex-1 w-full">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-left font-semibold">
                  <th>
                    <p className="ml-5">PRODUCT</p>
                  </th>
                  <th className="text-center">PRICE</th>
                  <th className="text-center">QUANTITY</th>
                  <th className="">SUB TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.length > 0
                  ? cartProducts.map((item, index) => (
                      <ProductInFo key={index} item={item} />
                    ))
                  : ""}
              </tbody>
              <tfoot>
                <tr className="">
                  <td colSpan={6}>
                    <div className="flex justify-between text-gray-700">
                      {/* Shipping-Information */}
                      <div className="text-sm">
                        <h4 className="text-base font-semibold">
                          SHIPPING INFOMARTION
                        </h4>
                        <p className="">
                          Note that deliveries may be delayed due to the festive
                          season
                        </p>
                        <p className="hover:text-blue-800 hover:font-semibold cursor-pointer underline mt-2">
                          Find out more
                        </p>
                      </div>

                      {/* Policy */}
                      <div className="text-sm">
                        <h4 className="text-base font-semibold">
                          RETURNS POLICY
                        </h4>
                        <p> 14 days free returns</p>
                        <div className="mt-2">
                          <p className="hover:text-blue-800 hover:font-semibold  cursor-pointer underline">
                            Please read our
                          </p>
                          <p className="hover:text-blue-800 hover:font-semibold  cursor-pointer underline my-1">
                            Find out more
                          </p>
                          <p className="hover:text-blue-800 hover:font-semibold  cursor-pointer underline">
                            Disclaimer here
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Right-pane */}
          <div className="w-[450px]">
            <table className="order-sumary">
              <tr>
                {" "}
                <th colSpan={2}>ODER SUMARY</th>{" "}
              </tr>
              <tbody className="text-gray-600">
                <tr>
                  <td colSpan={2}>
                    <p className="code-sub-title"> Have A Promo Code?</p>
                  </td>
                </tr>
                <tr>
                  <td className="code">
                    <input
                      className="px-2 h-[30px]"
                      placeholder="Enter Promo Code"
                      type="text"
                    />
                  </td>
                  <td className="">
                    <div className="border-[1px] text-center py-1 px-2 rounded-md bg-gray-500/60 text-white cursor-pointer hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                      APPLY
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-align--right">
                    <span>{changeVND(subTotal.toString())} đ</span>
                  </td>
                </tr>
                <tr>
                  <td>Voucher Discount</td>
                  <td className="text-align--right">0 đ</td>
                </tr>
                <tr>
                  <td>Cart Discount</td>
                  <td className="text-align--right">0 đ</td>
                </tr>
                <tr>
                  <td>Shipping Charges</td>
                  <td className="text-align--right">0 đ</td>
                </tr>
                <tr>
                  <td className="title">TOTAL</td>
                  <td className="text-align--right w-[200px]">
                    <span>{changeVND(subTotal.toString())} đ</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="">
                  <td colSpan={2}>
                    <div>
                      <p className="text-sm text-justify text-gray-600">
                        Your oder total does not yet include deliverry charges,
                        if applicable, which will be reflected at Checkout
                      </p>
                      <div
                        onClick={() => handleCheckOut()}
                        className="border-[1px] text-center my-2 py-2 bg-gray-500/60 cursor-pointer rounded-md text-white hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                      >
                        Proceed To Checkout
                      </div>
                      <div className="border-[1px] text-center my-2 py-2 bg-gray-500/60 cursor-pointer rounded-md text-white hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                        <Link to="/">Continue Shopping</Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-neutral-200 p-4">
    //   <div className="bg-white px-20">
    //     <p className="text-center text-3xl p-5">Shopping Cart</p>
    //     <div className="flex">
    //       {/* Left-pane */}
    //       <div className="mr-12 flex-1">
    //         <table className="w-full">
    //           <thead>
    //             <tr className="h-10 text-base text-neutral-800 text-left border-b-[1px]">
    //               <th className="font-normal pl-10">Product</th>
    //               <th className="font-normal">Quantity</th>
    //               <th className="font-normal">Price</th>
    //               <th className="font-normal">Remove</th>
    //               <th className="font-normal text-right">Sub Total</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr className="h-10 text-left border-b-[1px]">
    //               <td className="font-normal">
    //                 <div className="flex items-center">
    //                   <img
    //                     className="w-[200px]"
    //                     src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B750_100_0020052226_RT_Large.jpg"
    //                     alt=""
    //                   />
    //                   <div className="ml-10">
    //                     <p className="text-lg font-semibold mb-5">
    //                       Wooden Stool
    //                     </p>
    //                     <div className="text-gray-600 text-sm">
    //                       <p>
    //                         Color:{" "}
    //                         <span className="font-semibold text-gray-800">
    //                           Light Brown
    //                         </span>
    //                       </p>
    //                       <p>
    //                         Delivery:{" "}
    //                         <span className="font-semibold text-gray-800">
    //                           2 days
    //                         </span>
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="font-normal">
    //                 <div className="flex justify-between px-4 border-[1px] w-[80px]">
    //                   <div className="cursor-pointer">
    //                     <i className="fa-solid fa-caret-left"></i>
    //                   </div>
    //                   <span>1</span>
    //                   <div className="cursor-pointer">
    //                     <i className="fa-solid fa-caret-right"></i>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td>$95,00</td>
    //               <td className="font-normal">
    //                 <div className="text-red-600 cursor-pointer hover:underline">Remove</div>
    //               </td>
    //               <td className="font-normal text-right text-lg ">$185,00</td>
    //             </tr>

    //           </tbody>
    //         </table>
    //       </div>

    //       {/* Right-pane */}
    //       <div className="container--right">
    //         <div className="right-pane">
    //           <div className="product-detai--top">
    //             <h2 className="product-catlog">UNISEX TABLE TENNIS SHOES</h2>
    //             <h2 className="product-name">ATTACK DOMINATE FF 2</h2>
    //             <div className="rating">
    //             </div>
    //             <h3 className="product-price">2.660.000đ</h3>
    //           </div>
    //           <div className="product-detail--bottom">
    //             <div className="product-color">
    //               <h3>
    //                 COLOR: <span className="text--thin"> BLACK/PURE SILVER</span>{" "}
    //               </h3>
    //             </div>
    //             <div className="product-width">
    //               <h3>
    //                 WIDTH: <span className="text--thin">STANDARD</span>
    //               </h3>
    //             </div>
    //             <div className="product-size">
    //               <h3>
    //                 SIZE(VN):{" "}
    //                 <span id="size" className="text--thin ">
    //                   42
    //                 </span>{" "}
    //               </h3>{" "}
    //             </div>
    //             <div className="choose-size">
    //               {/* <span class="size" onclick="setSize(0)" >37</span>
    //                             <span class="size" onclick="setSize(1)">38</span>
    //                             <span class="size" onclick="setSize(2)">39</span>
    //                             <span class="size" onclick="setSize(3)">40</span>
    //                             <span class="size" onclick="setSize(4)" >41</span>
    //                             <span class="size size-active" onclick="setSize(5)">42</span>
    //                             <span class="size" onclick="setSize(6)">43</span> */}
    //             </div>
    //             <div className="quantity product-quantity">
    //               <span className="minus" onclick="quantity(0)">
    //                 -
    //               </span>
    //               <input
    //                 className="count"
    //                 type="number"
    //                 name="quantity"
    //                 min={0}
    //                 id="countQuantity"
    //                 defaultValue={1}
    //               />
    //               <span className="plus" onclick="quantity(1)">
    //                 +
    //               </span>
    //             </div>
    //           </div>
    //           <div className="add-to-cart">
    //             <button className="btn" onclick="addToCart()">
    //               ADD TO CART
    //             </button>
    //           </div>
    //           <div className="more-info">
    //             <h4 className="sub-tiitle">Country of Origin: VIETNAM</h4>
    //             <ul className="more-info-list">
    //               <li>
    //                 <b>Free</b> shipping on orders above 1.500.000₫*
    //               </li>
    //               <li>
    //                 <b>Easy</b> returns. Read More
    //               </li>
    //               <li>
    //                 <b>Join OneASICS™</b> now to enjoy free shipping on all orders
    //               </li>
    //               <li>
    //                 <b>20%-30% off selected items.</b>
    //                 <a href="./men.html">
    //                   <u>Shop Now</u>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
