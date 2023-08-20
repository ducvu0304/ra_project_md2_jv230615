
export default function BannerContent() {
  return (
    <div className="relative mb-[20px] h-[269px] md:h-[500px] ">
      <img
        src="https://therainydays.co.uk/wp-content/uploads/2017/05/mens-banner-1.jpg"
        alt="image 1"
        className="w-full h-full "
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black opacity-60 ">
      </div>
      <div className="absolute bottom-[70px] w-full h-[150px] lg:bottom-[150px] xl:bottom-[100px] ">
          <div className="px-[40px]">
            <div className="text-white">
              <p className="text-2xl font-bold">20% Off On Tank Tops</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
            </div>
            <button className="w-full bg-white py-[10px] text-black font-bold mt-[20px]">SHOP NOW</button>
          </div>
      </div>
    </div>
  );
}
