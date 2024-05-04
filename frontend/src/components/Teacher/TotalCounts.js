import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalCounts = () => {
  const [totalStudents, setTotalStudents] = useState(null);
  const [totalTeachers, setTotalTeachers] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/student/total", {})
      .then((response) => setTotalStudents(response.data.total_students))
      .catch((error) => console.error("Error fetching total students:", error));

    axios
      .get("http://127.0.0.1:8000/teacher/total", {})
      .then((response) => setTotalTeachers(response.data.total_teachers))
      .catch((error) => console.error("Error fetching total teachers:", error));
  }, []);

  return (
    <div className=" md:flex md:justify-between rounded-xl p-3 bg-white m-2">
      <div className="relative flex items-center justify-center w-60 h-28 bg-fuchsia-700 my-2 rounded-lg cursor-pointer">
        <img
          src="../image/student2.png" 
          alt="Student Icon"
          className="absolute left-30 bottom-20 w-14 h-14 "
        />
        <h1 className="text-2xl text-white font-semibold">
          Students: {totalStudents}
        </h1>
      </div>
      <div className="relative flex items-center justify-center w-60 h-28 bg-blue-400 my-2 rounded-lg cursor-pointer">
        <img
          src="../image/teacher.png" 
          alt="Teacher Icon"
          className="absolute left-30 bottom-20 w-14 h-14"
        />
        <h1 className="text-2xl text-white font-semibold">
          Teachers: {totalTeachers}
        </h1>
      </div>
      <div className="relative flex items-center justify-center w-60 h-28 bg-yellow-400 my-2 rounded-lg cursor-pointer">
        <img
          src="../image/staff2.png" 
          alt="Staff Icon"
          className="absolute left-30 bottom-20 w-14 h-14"
        />
        <h1 className="text-2xl text-white font-semibold">Staff: 15</h1>
      </div>
    </div>
  );
};

export default TotalCounts;
