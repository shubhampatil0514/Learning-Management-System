import React, { useState, useEffect } from "react";
import Sidemenu from "./Sidemenu";
import Subject from "./Subject";
import LectureForm from "./LectureForm";
import ChartBar from "./ChartBar";

function StudentDashboard() {
  const [teacherDetails, setTeacherDetails] = useState(null);
  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (teacherId) {
      fetch(`http://127.0.0.1:8000/teacher/profile/${teacherId}`)
        .then((response) => response.json())
        .then((data) => setTeacherDetails(data))
        .catch((error) => console.error("Error fetching student details:", error));
    }
  }, []);

  return (
    <div className="flex">
      <Sidemenu />
      <div className="h-screen w-full bg-gray-700 ">
        {/* Profile */}
        <div className="flex items-center justify-between bg-white px-4 rounded">
          {teacherDetails && (
            <>
              <h2 className="text-2xl font-bold">
                Welcome, {teacherDetails.username}
              </h2>
              <img
                src={`http://127.0.0.1:8000${teacherDetails?.profile_img}`}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </>
          )}
        </div>

        <LectureForm/>
      </div>
    </div>
  );
}

export default StudentDashboard;
