import Navbar from "./navigation/Navbar";
import Top from "./header-top/Top";

const Header = () => {
  return (
    <header className="shadow-sm bg-white">
      <Top />
      <Navbar />
    </header>
  );
};

export default Header;
