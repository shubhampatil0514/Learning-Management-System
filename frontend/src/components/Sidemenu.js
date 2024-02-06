import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { RxDashboard } from "react-icons/rx";
import { FiLayers } from "react-icons/fi";
import { LuBookMinus } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

function Sidemenu() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.clear();
      navigate("/");
    };

  return (

      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-gray-900 h-screen pt-4 relative duration-300`}
      >
        <img
          src="../image/control.png"
          className={`absolute cursor-pointer -right-3 top-12 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="mt-2 mb-4 flex flex-col h-full">
          <div className="border-b border-gray-600 pb-2">
            <img
              src="../image/logo.png"
              className={`cursor-pointer duration-500 w-16 h-16 rounded-full ${
                !open ? "w-12 h-12" : ""
              } mx-auto`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              } ml-2 text-center`}
            >
              Student Dashboard
            </h1>
          </div>
          <ul className="pt-6 flex-grow px-2">
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <RxDashboard />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <FiLayers />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Live Lectures
              </span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <LuBookMinus />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Assignment
              </span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <SlCalender />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Schedule
              </span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <MdOutlineBarChart />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                My Quiz
              </span>
            </li>
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800">
              <IoAnalytics />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Analysis
              </span>
            </li>
          </ul>
          <div className="mt-auto border-t border-gray-600">
            <ul>
              <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 mt-2 hover:bg-gray-800"
               onClick={handleLogout}>
                <RiLogoutCircleLine />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Sidemenu
