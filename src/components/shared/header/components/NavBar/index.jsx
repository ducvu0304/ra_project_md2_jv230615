import './navbar.css'
import SearchBar from '../SearchBar';


// eslint-disable-next-line react/prop-types
export default function NavBar() {
  return (
    <div className="w-full">
      <div className="lg:flex lg:justify-between lg:items-center lg:mt-4 lg:mx-5 xl:mt-2">
        <ul className="flex gap-7 text-lg justify-center mt-3 md:justify-center lg:ml-12 lg:text-base ">
          <li>New</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Magazine</li>
        </ul>
        <div className='flex justify-center mt-4 md:hidden lg:block lg:w-[200px]'>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
