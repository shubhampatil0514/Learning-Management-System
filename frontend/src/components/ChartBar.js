// ChartBar.js
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ChartBar = () => {
  const subjects = ["Maths", "Sci", "His", "Eng", "Geo", "Eco"];
  const marks = [80, 75, 90, 85, 78, 88];

  const dataConfig = {
    labels: subjects,
    datasets: [
      {
        label: "Marks",
        backgroundColor: "rgb(246, 74, 149)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: marks,
      },
    ],
  };

  const optionsConfig = {
    scales: {
      x: {
        type: "category",
        labels: subjects,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    height: 200,
    width: 400,
  };

  return (
    <div className="border border-gray-600 p-6 rounded-xl bg-white">
      <Bar
        data={dataConfig}
        options={optionsConfig}
        style={{ height: "200px", width: "400px" }}
      />
    </div>
  );
};

export default ChartBar;
