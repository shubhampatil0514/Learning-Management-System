import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      <header class="bg-white">
        <div class="px-4 sm:px-6 md:mx-4 ">
          <div class="flex h-20 items-center justify-between">
            <div class="md:flex md:items-center md:gap-12">
              <img
                src="../image/Learning.png"
                alt="Learning Image"
                class="h-16 md:mr-16"
              />
            </div>

            <div class="hidden md:block md:mr-16">
              <nav aria-label="Global">
                <ul class="flex items-center gap-8 text-base">
                  <li>
                    <a
                      class="text-gray-500 hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500  hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500  hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500  hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500  hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      Support{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500  hover:text-gray-700/75 hover:bg-fuchsia-500 hover:rounded-md hover:p-2"
                      href="/"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:relative">
                <button
                  className="rounded-md bg-pink-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-pink-700 flex items-center"
                  onClick={toggleDropdown}
                >
                  <span>Login</span>
                  <IoChevronDownOutline className="ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Link
                      to="/login/teacher"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Login As Teacher
                    </Link>
                    <Link
                      to="/login/student"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Login As Student
                    </Link>
                  </div>
                )}
              </div>

              <div className="hidden sm:flex">
                <Link
                  to="/signup/student"
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-text-bg"
                >
                  Signup
                </Link>
              </div>
              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
