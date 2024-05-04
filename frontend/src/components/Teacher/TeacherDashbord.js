import React, { useState, useEffect } from "react";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import TeacherSidemenu from "./TeacherSidemenu";
import TotalCounts from "./TotalCounts";
import LectureForm from "./LectureForm";
import TeacherProfile from "./TeacherProfile";
import CurrentDayCalendar from "../CurrentDayCalendar";
import PieChart from "./PieChart";
import TeacherOptions from "./TeacherOptions";

function TeacherDashboard() {
  return (
    <div className="flex bg-gray-100 h-screen">
      <TeacherSidemenu />

      <div className="h-screen md:w-9/12 font-sans">
        <div className="flex items-center justify-between bg-white px-4 rounded-lg m-2 cursor-pointer">
          <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg m-1 cursor-pointer">
            <input
              type="text"
              placeholder="Search..."
              className=" rounded-lg outline-none"
            />
            <IoSearchOutline />
          </div>
          <GoBell />
        </div>

        <div className="">
         <TotalCounts />
        </div>

        <div className=" h-96">
         
        </div>

        <div className="">
         <TeacherOptions />
        </div>

      </div>

      <div className="h-screen w-3/12  font-sans">
        <div className=" bg-white rounded-lg m-2 p-4 items-center justify-center">
          <TeacherProfile />
          <CurrentDayCalendar />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
