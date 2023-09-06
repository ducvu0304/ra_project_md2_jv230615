import "./navbar.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavBar() {
  return (
    <div className="w-full">
      <ul className="flex justify-center items-center gap-7 text-lg ">
        {/* <li className="cursor-pointer hover:underline hover:text-primary-v1">
          <Link to="/new">New</Link>
        </li> */}
        <li className="cursor-pointer hover:underline hover:text-primary-v1">
          <Link to="/men">Men</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:text-primary-v1">
          <Link to="/women">Women</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:text-primary-v1">
          <Link to="/page404">Kids</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:text-primary-v1">
          <Link to="/page404">Magazine</Link>
        </li>
      </ul>
    </div>
  );
}
