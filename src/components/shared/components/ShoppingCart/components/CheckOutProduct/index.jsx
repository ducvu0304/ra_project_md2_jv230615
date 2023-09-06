import React from "react";

export default function CheckOutProduct() {
  return (
    <div className="text-white w-full border-b-[1px] border-white/60">
      <div className="flex my-1 ">
        <div className="w-[100px]">
          <img
            src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=285,height=215,quality=75,format=auto,fit=cover,g=top/in-resources/92ab8ec8-2216-4f1c-8333-c10c5e7d01c9/Images/ProductImages/Source/1011B764_100_0020053081_RT_Large.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-between w-full">
            <p>ASIC</p>
            <p>$95,00</p>
          </div>
          <p>Black</p>
          <p>
            Quantity: <span>1</span>
          </p>
        </div>
      </div>
    </div>
  );
}
