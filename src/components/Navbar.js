import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle clicks outside the navbar
  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest('.navbar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener on component mount
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className="sticky top-0 z-10 bg-blue-600">

      <nav className="text-white font-bold"> {/* Make the text bold and white */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#about" className="title-font font-medium mb-4 md:mb-0 ml-3 text-xl">
                Lucien Shema
              </a>
            </div>
            <div className="hidden px-2 py-2 md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Add the "active" class to the current page */}
                <a href="" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  Home
                </a>
                <a href="#about" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  About me
                </a>
                <a href="#projects" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  Projects
                </a>
                <a href="#experiences" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  Experience
                </a>
                <a href="#blogs" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  Blogs
                </a>
                <a href="#contact" className="block mt-4 px-1 py-1 rounded-md hover:text-white hover:bg-blue-500 lg:inline-block lg:mt-0 text-white-200">
                  Contact
                </a>
                {/* <Link to="signup" className="rounded-md px-1 py-1 hover:text-white hover:bg-blue-500">
                  Signup
                </Link> */}
                <button className="top-6 right-2" onClick={props.toggleDarkMode}>
                  {darkMode ? <FaMoon /> : <FaSun />}
                </button>
              </div>
            </div>
            <>
            <button className="inline-flex items-right justify-right md:hidden absolute top-6 right-2 " onClick={props.toggleDarkMode}>
                {darkMode ? <FaMoon /> : <FaSun />}
              </button>
              {/* The menu icon/button */}
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white transition duration-150 ease-in-out md:hidden"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </>


            <div className={`${isOpen ? "block absolute top-0 right-0 static" : "hidden"} md:hidden`}>
              <div className="px-2 pt-2 pb-3 sm:px-3 bg-blue-600">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  Projects
                </a>
                <a
                  href="#experiences"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  Experience
                </a>
                <a
                  href="#blogs"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  Blogs
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
                {/* <Link to="signup" className="block px-3 py-2 rounded-md text-base font-medium  focus:outline-none focus:text-white focus:bg-blue-500 transition duration-150 ease-in-out">
                    Signup
                  </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

