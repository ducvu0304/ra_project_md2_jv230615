import React from "react";
import video from "@static/videos/GELNIMBUS_25_Tech_Features_ASICS_1080p.mp4";

export default function Banner() {
  return (
    <div className="mb-10">
      <video className="w-full" src={video} autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
