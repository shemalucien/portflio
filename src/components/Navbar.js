import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                  Lucien Shema
                </a>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            Home
          </a>
          <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            About me
          </a>
          <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            Projects
          </a>
          <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            Experience
          </a>
          <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            Blogs
          </a>
          <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-5">
            Contact
          </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
            </div>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
               About
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
               Projects
            </a>    
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
               Experience
            </a>   
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
               Blogs
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
               Contact
            </a>
          </div>
        </div>
      </nav>
    </header>

  );
}