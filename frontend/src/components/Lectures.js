import React from "react";

function Lectures() {
  const upcomingLectures = [
    {
      sr: 1,
      lecture: "Mathematics:The philosophical problem of foundations.",
      time: "10:00 AM",
      date: "2024-02-01",
    },
    {
      sr: 2,
      lecture: "Science:Chemical Reactions",
      time: "11:30 AM",
      date: "2024-02-02",
    },
    {
      sr: 3,
      lecture: "Mathematics:The philosophical problem of foundations.",
      time: "10:00 AM",
      date: "2024-02-01",
    },
    {
      sr: 4,
      lecture: "Science:Chemical Reactions",
      time: "11:30 AM",
      date: "2024-02-02",
    },
    {
      sr: 5,
      lecture: "Mathematics:The philosophical problem of foundations.",
      time: "10:00 AM",
      date: "2024-02-01",
    },
  ];
  
  return (
    <div className=" mx-6 bg-white rounded-xl">
      <h2 className="text-4xl text-black font-bold mb-4">Upcoming Lectures</h2>
      <table className="min-w-full divide-y divide-gray-200 my-4">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Sr
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Lecture
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 cursor-pointer">
          {upcomingLectures.map((lecture) => (
            <tr key={lecture.sr}>
              <td className="px-6 py-4 whitespace-nowrap">{lecture.sr}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lecture.lecture}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lecture.time}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lecture.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lectures;
