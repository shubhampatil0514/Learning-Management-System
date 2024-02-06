import React, { useState, useEffect } from "react";
import Sidemenu from "./Sidemenu";
import Subject from "./Subject";
import Lectures from "./Lectures";
import ChartBar from "./ChartBar";

function StudentDashboard() {
  const [studentDetails, setStudentDetails] = useState(null);
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      fetch(`http://127.0.0.1:8000/student/profile/${studentId}`)
        .then((response) => response.json())
        .then((data) => setStudentDetails(data))
        .catch((error) => console.error("Error fetching student details:", error));
    }
  }, []);

  return (
    <div className="flex">
      <Sidemenu />
      <div className="h-screen w-full bg-gray-700 ">
        {/* Profile */}
        <div className="flex items-center justify-between bg-white px-4 rounded">
          {studentDetails && (
            <>
              <h2 className="text-2xl font-bold">
                Welcome, {studentDetails.username}
              </h2>
              <img
                src={`http://127.0.0.1:8000${studentDetails?.profile_img}`}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </>
          )}
        </div>

        <Subject />

        <div className="md:flex md:justify-between mb-6">
          <Lectures />

          <ChartBar />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
