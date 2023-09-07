import React from "react";
import "./loading.scss";

export default function Loading() {
  const customDiv = {
    backgroundImage:
      "https://i.pinimg.com/originals/29/38/a3/2938a3b0772876c56082d65731c23692.gif",
  };
  return (
    <>
      <div className={customDiv}></div>
      <div className="loading_container flex flex-col">
        <img
          className="rotating-image"
          src="https://hips.hearstapps.com/hmg-prod/images/asics-trainers-on-sale-1598283871.gif"
        />
        <div className="spinner-container flex justify-between relative">
          {/* <Spinner />  */}

          {/* <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
          <div className="spinner-grow text-light m-2"></div> */}
        </div>
      </div>
    </>
  );
}

// <div className='relative top-0'>
//     <img
//     src="https://hips.hearstapps.com/hmg-prod/images/asics-trainers-on-sale-1598283871.gif"
//     alt="lazy-load.png" />
//     <div className='absolute bottom-[22%] left-[44%]' >
//       <Spinner />
//     </div>
// </div>
//
