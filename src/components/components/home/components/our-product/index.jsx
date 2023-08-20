import Card from "./components/CardItem";

export default function OurProduct() {
  return (
    <div className="container ">
      <div className="text-center">
        <p className="text-[35px] font-semibold">Our Product</p>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          velit?
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-6 mb-[50px] md:grid-cols-2 lg:grid-cols-4 mt-[50px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
