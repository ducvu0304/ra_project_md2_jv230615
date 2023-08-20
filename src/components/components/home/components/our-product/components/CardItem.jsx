/* eslint-disable react/prop-types */
import StarIcon from '@mui/icons-material/Star';

const CardItem = () => {
  return (
    <div className="relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[450px]">
      <div className="h-50 relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-3 pt-4 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Apple AirPods
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            $95.00
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-yellow-700 text-center antialiased">
          <StarIcon/>  <StarIcon />  <StarIcon />  <StarIcon />  <StarIcon />
          {/* With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case. */}
        </p>
      </div>
      <div className="px-3">
        <button
          className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardItem;
