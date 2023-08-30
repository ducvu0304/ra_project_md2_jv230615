/* eslint-disable react/prop-types */
import StarIcon from "@mui/icons-material/Star";

const CardItem = () => {
  return (
    <div className="relative min-w-[300px] rounded-xl text-gray-700 shadow-md lg:max-w-[500px]">
      <div>
        <div className="relative  overflow-hidden rounded-xl  bg-clip-border text-gray-700">
          <img
            src="https://th.bing.com/th/id/R.2aa106027149d46d625922f4bd956653?rik=j354bmvFmqt6vg&pid=ImgRaw&r=0"
            className="bg-[#e1dd86] p-[50px] h-full w-full object-cover"
          />
        </div>
        <div className="px-3 pt-4">
          <p className="block font-sans text-sm font-normal leading-normal text-yellow-700 antialiased">
            <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
          </p>
          <div className=" flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Asics Gel Lyte 3
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $95.00
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative bottom-[-13px] text-center text-xl border-solid border-orange-400 border-[1px] w-8 rounded-[50%] cursor-pointer">
            <i className="fa-solid fa-bag-shopping text-orange-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
