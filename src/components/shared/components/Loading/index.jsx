import "./loading.css";
import logo from "@images/logo.png";

export default function Loading() {
  return (
    <div className="absolute top-0 bg-white w-full z-10  ">
      <div className="loading flex justify-center items-center border-2 overflow-hidden">
        <img src={logo} alt="logo-image" />
      </div>
    </div>
  );
}
