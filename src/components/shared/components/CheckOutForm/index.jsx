import OrderSummary from "./OrderSummary";
import ContactForm from "./contact";
import Payments from "./Payments";
import { useState } from "react";

export default function CheckOutForm() {
  const [isPayment, setIsPayment] = useState(false);
  const [shipping, setShipping] = useState(0);

  const handleShipping = (type) => {
    if (type === "express") {
      setShipping(50000);
    } else {
      setShipping(0);
    }
  };

  return (
    <div className="flex justify-center items-center bg-black/60 py-10">
      <div className="bg-slate-200 grid grid-cols-1 w-full lg:grid-cols-2 lg:w-[85%]">
        <div className=" ">
          {isPayment ? (
            <Payments />
          ) : (
            <ContactForm handleShipping={handleShipping} />
          )}

          <div className="flex justify-between px-10 ">
            <button
              onClick={() => setIsPayment(!isPayment)}
              className={`${
                isPayment ? "btn--active" : "btn--non-active"
              } flex items-center`}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Back step
            </button>
            <button
              onClick={() => setIsPayment(!isPayment)}
              className={`${isPayment ? "btn--non-active" : "btn--active"}`}
            >
              Payment
              <i className="fa-solid fa-arrow-right mt-1 ml-2"></i>
            </button>
          </div>
        </div>
        <div className="">
          <OrderSummary shipping={shipping} />
        </div>
      </div>
    </div>
  );
}
