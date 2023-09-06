import cart from "@icons/shopping-cart.png";

export default function MyAccount() {
  return (
    <div className="w-full h-full flex items-end">
      <ul className="bg-gray-50 dark:bg-gray-800 py-3 px-4 flex flex-col space-y-6  w-full select-none">
        <li>
          <div className="cursor-pointer flex items-center space-x-3 ml-1 text-gray-800 dark:text-white hover:underline">
            <div>
              <svg
                className="fill-stroke"
                width={18}
                height={20}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-base">My account</p>
          </div>
        </li>
        <li>
          <div className="cursor-pointer flex items-center space-x-3 focus:outline-none text-gray-800 dark:text-white hover:underline">
            <div className="relative">
              <img className="w-6" src={cart} alt="cart-icon" />
              <div className="absolute top-[-8px] right-[-8px] w-5 h-5 flex justify-center items-center bg-white border-2 rounded-full">
                0
              </div>
            </div>
            <p className="text-base">Cart</p>
          </div>
        </li>
        <li>
          <div className="cursor-pointer flex items-center space-x-3 text-gray-800 dark:text-white hover:underline">
            <p className="text-base">Logout</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
