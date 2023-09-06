import deliveryBike from "@icons/delivery-bike.png";
import onlineSupport from "@icons/online-support.png";
import moneyRefund from "@icons/money-refund.png";

export default function Features() {
  return (
    <div className="flex justify-center mb-10">
      <div className="grid grid-cols-1 gap-10 w-[85%] md:w-[80%] lg:grid-cols-3 xl:w-[85%]">
        {/* Delivery */}
        <div className="bg-[#faead9] w-full rounded-sm p-4 flex justify-left items-center gap-4">
          <img
            src={deliveryBike}
            alt="Delivery"
            className="object-contain w-14 h-14 ml-[25px] md:ml-[10px] "
          />
          <div>
            <h4 className="text-black font-semibold capitalize text-lg   ">
              ONLINE SUPPORT
            </h4>
            <p className="text-black text-basic pt-[10px]">Order over $200</p>
          </div>
        </div>

        {/* Online Support */}
        <div className="bg-[#f1fbce] border rounded-sm p-4 flex justify-left items-center gap-4">
          <img
            src={onlineSupport}
            alt="Oline-Support"
            className="object-contain w-14 h-14 ml-[25px] md:ml-[10px] "
          />
          <div>
            <h4 className="text-black font-semibold capitalize text-lg ">
              ONLINE SUPPORT
            </h4>
            <p className="text-black text-basic pt-[10px] ">
              Online support 24 hours a day
            </p>
          </div>
        </div>

        {/* Money Return */}
        <div className="bg-[#f6d7f7] border rounded-sm p-4 flex justify-left items-center gap-4">
          <img
            src={moneyRefund}
            alt="Money-Refund"
            className="object-contain w-14 h-14 ml-[25px] md:ml-[10px] "
          />
          <div>
            <h4 className="text-black font-semibold capitalize text-lg ">
              {" "}
              MONEY RETURN
            </h4>
            <p className="text-black text-basic pt-[10px]">
              Back guarantee under 5 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
