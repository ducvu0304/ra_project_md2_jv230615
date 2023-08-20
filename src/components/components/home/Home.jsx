import AboutUs from "./components/about-us";
import CarouselWithContent from "./components/carousel/Carousels";
import Features from "./components/features/Features";
import OurProduct from "./components/our-product";
import SaleBanner from "./components/sale-banner";
// import BlockShop from "./components/shops";

const Home = () => {
  return (
    <div>
      <CarouselWithContent />
      <AboutUs />
      <OurProduct />
      <SaleBanner />
      {/* <BlockShop /> */}
      <Features />
    </div>
  );
};
export default Home;
