import BannerContent from "@shared/banner/BannerContent";

export default function BlockShop() {
  return (
    <div className="container mx-[40px]">
      <div className="grid grid-cols-1 gap-6 mb-[50px] lg:grid-cols-3 mt-[50px]">
        <BannerContent />
        <BannerContent />
        <BannerContent />
      </div>
    </div>
  );
}
