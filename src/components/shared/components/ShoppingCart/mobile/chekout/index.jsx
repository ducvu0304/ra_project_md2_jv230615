/* eslint-disable react/prop-types */
import "./checkout.css";
import { useEffect, useState } from "react";
import { changeVND } from "@Js";

export default function CheckOut({ cartProducts }) {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let values = cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setSubTotal(values);
  }, []);

  return (
    <div className="box-checkout w-fullmd:w-[330px]">
      <table className="order-sumary">
        <tr>
          <th colSpan={2}>ODER SUMARY</th>
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
              <span className="sub-total">
                {changeVND(subTotal.toString())} đ
              </span>
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
            <td className="text-align--right">
              <span id="sumary">{changeVND(subTotal.toString())} đ</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="">
            <td colSpan={2}>
              <div>
                <p className="text-sm text-justify text-gray-600">
                  Your oder total does not yet include deliverry charges, if
                  applicable, which will be reflected at Checkout
                </p>
                <div className="border-[1px] text-center my-2 py-2 bg-gray-500/60 cursor-pointer rounded-md text-white hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                  Proceed To Checkout
                </div>
                <div className="border-[1px] text-center my-2 py-2 bg-gray-500/60 cursor-pointer rounded-md text-white hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                  Continue Shopping
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
