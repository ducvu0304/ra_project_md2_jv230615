import Banner from "@shared/components/Banner";
import TopSeller from "@components/home/TopSeller";
import Category from "@components/home/category";
import Features from "@components/home/Features";
const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Features />
      <TopSeller />
      <Category />
    </div>
  );
};
export default HomePage;
