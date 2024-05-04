import React, { useState, useEffect } from "react";

const TeacherProfile = () => {
  const [teacherDetails, setTeacherDetails] = useState(null);
  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    if (teacherId) {
      fetch(`http://127.0.0.1:8000/teacher/profile/${teacherId}`)
        .then((response) => response.json())
        .then((data) => setTeacherDetails(data))
        .catch((error) =>
          console.error("Error fetching student details:", error)
        );
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      {teacherDetails && (
        <>
          <img
            src={`http://127.0.0.1:8000${teacherDetails?.profile_img}`}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-2xl text-center font-bold">
            {teacherDetails.username}
          </h2>
        </>
      )}
    </div>
  );
};

export default TeacherProfile;
