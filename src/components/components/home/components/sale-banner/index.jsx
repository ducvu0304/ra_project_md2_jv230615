import "./banner.css";
import summerBanner from "@images/summer-sale-banner.jpg";

export default function SaleBanner() {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 gap-6 mb-[50px] md:grid-cols-2 lg:grid-cols-2 h-[665px] my-[50px] ">
        <div>
          <img
            src="https://i.pinimg.com/originals/fe/90/c7/fe90c792efad71561e3b3e241a4449f6.jpg"
            alt=""
            className=" rounded-[16px] "
          />
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.nqmHjtrn_qUAgnj5zOF61wHaEx?pid=ImgDet&w=626&h=403&rs=1"
            alt=""
            className="rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
