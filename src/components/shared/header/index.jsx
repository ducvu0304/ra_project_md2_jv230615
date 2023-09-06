// import Navbar from "./navigation/NavbarV1";

import { useState } from "react";
import Sidebar from "./components/SideBar";
import MyAccount from "./components/myaccount/MyAccount";
import Navbar from "./components/NavBar";
import Logo from "./components/Logo";
import Account from "./components/Account";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full px-4 lg:flex lg:justify-between dark:bg-gray-900 lg:px-16">
      {/* =======Logo====== */}
      <div className="flex justify-between items-center">
        <Logo />

        {/*================================= Small and Medium screen ===========================*/}
        {/* Menu Bar */}
        <div className="relative lg:hidden">
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl mt-2 mr-1 cursor-pointer"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } absolute right-0 z-50 w-[360px] md:w-[724px]`}
          >
            <SideBar />
          </div>
        </div>
      </div>
      {/*Search Bar */}
      <div className="mb-5 lg:hidden">
        <SearchBar showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {/*================================= Large screen ===========================*/}
      <div className="hidden lg:block flex-1">
        <div className="flex justify-between items-center flex-1 px-5 pt-2">
          <div className="flex-1 mr-5">
            <Navbar />
          </div>
          <div className="">
            <SearchBar />
          </div>
          <div className="">
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
