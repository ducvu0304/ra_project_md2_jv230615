import React from "react";
import AboutUsImg from "@images/AboutUs.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function AboutUs() {
  return (
    <div className=" bg-[#c2a09e] mb-32 h-[750px] w-full  lg:h-[600px] ">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[400px] lg:h-[700px] relative top-[-30px] flex justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.-F5SxoN_G0HOFH2cfx0sHwHaHa?pid=ImgDet&rs=1"
            alt=""
            className=""
          />
        </div>
        <div className="flex items-center">
          <div className=" text-white px-10 m-3  ">
            <p className=" text-3xl">
              Discover Your Personal Style and the Confidence That Comes with
              It.
            </p>
            <p className="">
              Tempora aliqua cillum accusamus aperiam pharetra cupidatat
              fermentum viverra delectus quidem incidunt tempus itaque quam, id
              blandit dolores, proin reiciendis. Nostrum proin sem veniam
              veritatis inceptos!
            </p>
            <button className="border-solid text-center w-[150px] h-[50px] hover:bg-blue-gray-700">
              <ArrowRightAltIcon className="pb-1" />
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
