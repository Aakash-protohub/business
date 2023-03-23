import logo from "../assets/logo.png";
import sendArrow from "../assets/send.png";
//comopnents import
import Button from "../components/Global/Button";

const HomeHero = ({ heading, subheading }) => {
  return (
    <div className="relative w-full bg-[url('/src/assets/Home/Banner.png')] bg-contain bg-no-repeat bg-right-top bg-opacity-20 h-full md:h-[100vh] p-2 ">
      {/* NAVBAR */}
      <nav className="px-2 sm:px-4 py-2.5 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center px-5">
            <img src={logo} className="h-10 mr-3 sm:h-14" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BrandName</span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent border-[#BBDEFB] md:border-0 md:hover:border-b-4 pb-3 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white border-transparent hover:border-[#BBDEFB] md:border-b-4 pb-3 "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white border-transparent hover:border-[#BBDEFB] md:border-b-4 pb-3 "
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white border-transparent hover:border-[#BBDEFB] md:border-b-4 pb-3 "
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="relative bg-opacity-70 h-[660px] w-full flex flex-col items-start justify-center p-2 md:p-5 gap-5">
        <p className="font-semibold text-left text-black m-0 sm:w-[55%] text-[24px] sm:text-[40px] leading-[normal]">
          {heading}
        </p>
        <p className="font-normal text-left text-black my-4 w-full md:w-[65%] text-[22px] leading-10">
          {subheading}
        </p>
        <Button type="outline" text="LEARN MORE" stylecustom="btnAnimation font-semibold" icon={true} src={sendArrow} iconStyle={{ height: "18px", width: "20px",marginLeft:"10px" }}/>
      </div>
    </div>
  );
};

export default HomeHero;
