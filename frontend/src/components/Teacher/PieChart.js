import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
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
  
    const totalStaff = 4;
    const chartData = {
      labels: ["Students", "Teachers", "Staff"],
      datasets: [
        {
          data: [totalStudents, totalTeachers, totalStaff],
          backgroundColor: [
            "rgba(0, 63, 92, 1)",
            "rgba(88, 80, 141, 1)",
            "rgba(188, 80, 144, 1)",
          ],
          borderColor: [
            "rgba(0, 63, 92, 1)",
            "rgba(88, 80, 141, 1)",
            "rgba(188, 80, 144, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
  
  return (
    <div className=" h-60 rounded-xl p-2  bg-white m-2 cursor-pointer">
    <Pie data={chartData} options={chartOptions} />
  </div>
  )
}

export default PieChart
