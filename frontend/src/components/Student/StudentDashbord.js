import React, { useState,  useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import StudentSidemenu from "./StudentSidemenu";
import StudentProfile from "./StudentProfile";
import CurrentDayCalendar from "../CurrentDayCalendar";
import PieChart from "../Teacher/PieChart";
import Subject from "./Subject";
import Lectures from "./Lectures";
import ChartBar from "./ChartBar";

function StudentDashboard() {
  const navigate = useNavigate();
  const [studentDetails, setStudentDetails] = useState(null);
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      fetch(`http://127.0.0.1:8000/student/profile/${studentId}`)
        .then((response) => response.json())
        .then((data) => setStudentDetails(data))
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, []);

  const handleClick = () =>{
    navigate('/dashbord/student/quiz');
  }

  return (
    <div className="flex bg-gray-100 h-screen">
      <StudentSidemenu />

      <div className="h-screen md:w-9/12 font-sans">
        <div className="flex items-center justify-between bg-white px-4 rounded-lg m-2 cursor-pointer">
          <h2 className="text-2xl font-bold">Student Dashboard</h2>
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
          <Subject />
        </div>

        <div className="flex ">
          <div className=" ">
            <Lectures />
          </div>

          <div className=" w-full h-full">
            <div className="mx-2 my-1 p-6 bg-pink-600 text-white py-2 text-center rounded-md h-full flex  cursor-pointer items-center justify-center"
            onClick={handleClick}
            >
              <h2 className="text-2xl font-bold bg-pink-600 text-white py-2 rounded-md ">
                Start Quize
              </h2>
              <img
                src="../image/next.png"
                alt="Student Icon"
                className="w-8 h-8 ml-2 "
              />
            </div>
            
          </div>
        </div>
      </div>

      <div className="h-screen w-3/12  font-sans">
        <div className=" bg-white rounded-lg m-2 p-4 items-center justify-center">
          <StudentProfile />
          <CurrentDayCalendar />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
