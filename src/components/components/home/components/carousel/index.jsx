const Carousel = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[700px] "
        src="https://www.laiamagazine.com/wp-content/uploads/2020/06/westman-atelier-sticks-819x1024.jpg"
        alt=""
      />
      <div className="absolute top-1/3 left-[15%] w-[400px] sm: w-[200px]">
        <p className="text-5xl font-parisienne text-white">Beauty Kits</p>
        <p className="font-istok_web">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
          excepturi, temporibus quas quo doloribus! Velit culpa delectus nam
          neque!
        </p>
        <button className="uppercase bg-black text-white w-40 h-8 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Carousel;
