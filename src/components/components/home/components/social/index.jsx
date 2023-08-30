import React from "react";

export default function Social() {
  return (
    <div className="2xl:flex justify-center items-center  md:py-12 py-9 xl:px-20 sm:px-6 px-4 ">
      <div className="md:flex hidden flex-col space-y-6 xl:space-y-0 xl:flex-row justify-center items-center">
        <div className="flex  justify-between w-full   items-center space-x-6 xl:space-x-8 ">
          {/* Image-1 */}
          <div className="flex justify-center items-center xl:ml-[170px]">
            <img
              className="h-[700px]"
              src="https://i.ebayimg.com/images/g/fmwAAOSw9txg3S~h/s-l1600.jpg"
              alt="shoes and clothes"
            />
          </div>
          {/* Block-2 */}
          <div className="flex flex-col justify-between  xl:mt-0  items-center space-y-6  xl:space-y-8">
            {/* Block-2-top */}
            <div className="flex flex-col xl:flex-row justify-between h-full xl:mr-[230px] xl:w-[900px] space-y-8 xl:space-y-0 ">
              <div className="md:w-72 mx-1 md:h-64 lg:mt-4 xl:mt-0 flex flex-col justify-center items-center text-center">
                <p className=" text-3xl xl:text-4xl font-semibold  leading-7 xl:leading-9 text-center text-gray-800">
                  Our Instagram
                </p>
                <p className=" text-base leading-6 mt-3 text-center text-gray-600">
                  Follow us on instagram and tag us to get featured on our
                  timeline
                </p>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
                >
                  @Ourinstaname
                </a>
              </div>
              <div className=" ">
                <img
                  className="hidden w-[500px] xl:block"
                  src="https://image.commarts.com/images1/8/5/0/9/905848_102_1160_ODkxMDM4ODg4LTIwNzQ4NDQ2NDg.jpg"
                  alt="jewellery"
                />
                <img
                  className="xl:hidden"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TJhzPv7lBB671eDGGKCZ0YhGqQ0Y9-tesq9gIPc2pYM6VUbT7qWloqu54ynL8r4lM4I&usqp=CAU"
                  alt="shoes and clothes"
                />
              </div>
            </div>
            {/* Block-2-bottom */}
            <div className="hidden xl:flex flex-row justify-center  items-center space-x-6 xl:space-x-8">
              <div className>
                <img
                  className="h-[250px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TJhzPv7lBB671eDGGKCZ0YhGqQ0Y9-tesq9gIPc2pYM6VUbT7qWloqu54ynL8r4lM4I&usqp=CAU"
                  alt="jewellery"
                />
              </div>
              <div className>
                <img
                  className="w-2/3"
                  src="https://cms-static.asics.com/system/fr_articles/1975/image/kayano1.20180801100618528102822.middle.jpg?20180807080556"
                  alt="watch"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Ipad Screen */}
        <div className="xl:hidden flex flex-row justify-between space-x-6 xl:space-x-8">
          <div className>
            <img
              className
              src="https://i.ebayimg.com/images/g/FjEAAOSwm~1cTLLV/s-l1600.jpg"
              alt="jewellery"
            />
          </div>
          <div className>
            <img
              className
              src="https://cms-static.asics.com/system/fr_articles/1975/image/kayano1.20180801100618528102822.middle.jpg?20180807080556"
              alt="watch"
            />
          </div>
        </div>
      </div>
      {/* Mobile Screen */}
      <div className="md:hidden flex justify-center items-center flex-col">
        <div className="w-80  flex flex-col justify-center items-center text-center">
          <p className=" text-3xl lg:text-4xl font-semibold  leading-7 lg:leading-9 text-center text-gray-800">
            Our Instagram
          </p>
          <p className=" text-base leading-6 mt-3 text-center text-gray-600">
            Follow us on instagram and tag us to get featured on our timeline
          </p>
          <a
            href="javascript:void(0)"
            className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
          >
            @Ourinstaname
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center space-y-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TJhzPv7lBB671eDGGKCZ0YhGqQ0Y9-tesq9gIPc2pYM6VUbT7qWloqu54ynL8r4lM4I&usqp=CAU"
            alt="shoes and clothes"
          />
          <img
            src="https://image.commarts.com/images1/8/5/0/9/905848_102_1160_ODkxMDM4ODg4LTIwNzQ4NDQ2NDg.jpg"
            alt="shoes and clothes"
          />
          <img
            src="https://cms-static.asics.com/system/fr_articles/1975/image/kayano1.20180801100618528102822.middle.jpg?20180807080556"
            alt="jewellery"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4RVNA9SdzKiXQ2l3W8w12EVCI4GW_GICtg&usqp=CAU"
            alt="watch"
          />
        </div>
      </div>
    </div>
  );
}
