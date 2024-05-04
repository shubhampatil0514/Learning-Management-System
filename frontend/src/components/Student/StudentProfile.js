import React, { useState, useEffect } from "react";

const StudentProfile = () => {
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
  return (
    <div className="flex flex-col items-center justify-center">
      {studentDetails && (
        <>
          <img
            src={`http://127.0.0.1:8000${studentDetails?.profile_img}`}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-2xl text-center font-bold">
            {studentDetails.username}
          </h2>
        </>
      )}
    </div>
  );
};

export default StudentProfile;
