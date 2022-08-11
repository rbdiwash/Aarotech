import React from "react";
import logo from "../assets/WhiteLogo.jpeg";
import { FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className="bg-primary text-white border-gray-200 dark:bg-gray-900">
        <div className=" flex flex-wrap justify-between items-center mx-auto container px-4 md:px-6 py-2.5">
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
            Welcome to Aarotech Qatar pvt. ltd
          </span>

          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="mr-6 text-md font-medium text-gray-500 dark:text-white hover:underline"
            >
              <MdEmail />
            </a>
            <a
              href="tel:5541251234"
              className=" text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </nav>
      <nav className="p-3 bg-white  border-gray-200  shadow top-0 sticky z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-16" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Aarotech
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 "
            aria-controls="navbar-solid-bg"
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
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-[#ec1f24] hover:font-bold block uppercase text-lg  py-2 pr-4 pl-3   rounded md:bg-transparent  md:p-0   md:dark:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#ec1f24] hover:font-bold block uppercase text-lg py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#ec1f24] hover:font-bold block uppercase text-lg py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#group"
                  className="hover:text-[#ec1f24] hover:font-bold block uppercase text-lg py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 "
                >
                  Group
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#ec1f24] hover:font-bold block uppercase text-lg py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400  dark:hover:bg-gray-700 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// <header id="header-wrap" className="relative">
//   <div className=" top-0  w-full z-30 duration-300 sticky">
//     <div className="container">
//       <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
//         <a className="navbar-brand" href="index.html">
//           <img src={logo} className="h-20" alt="Logo" />
//         </a>
//         <button
//           className="navbar-toggler focus:outline-none block lg:hidden"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="toggler-icon"></span>
//           <span className="toggler-icon"></span>
//           <span className="toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
//             <li className="nav-item">
//               <a className="page-scroll active" href="#hero-area">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#services">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#feature">
//                 feature
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#team">
//                 Team
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#testimonial">
//                 Testimonial
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#pricing">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="page-scroll" href="#contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="header-btn hidden sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
//           <a
//             className="text-blue-600 border border-blue-600 px-10 py-3 rounded-full duration-300 hover:bg-blue-600 hover:text-white"
//             href="#feature"
//           >
//             FAQ
//           </a>
//         </div>
//       </nav>
//     </div>
//   </div>
// </header>;
