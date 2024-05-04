import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../index.css'

function LectureList() {
  const [upcomingLectures, setUpcomingLectures] = useState([]);

  useEffect(() => {
    const fetchUpcomingLectures = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/teacher/lecture");
        setUpcomingLectures(response.data);
      } catch (error) {
        console.error("Error fetching upcoming lectures:", error.response.data);
      }
    };

    fetchUpcomingLectures();
  }, []);

  return (
    <div className="m-6 p-6 bg-white rounded-md leche">
      <h2 className="text-2xl font-bold bg-pink-600 text-white px-4 py-2 rounded-md text-center">In Queue</h2>
      <div className="mt-2">
        {upcomingLectures.map((lecture) => (
          <div key={lecture.id} className="bg-white rounded-xl p-4">
            <p className="text-xl font-bold mb-2">{lecture.title}</p>
            <p className="text-gray-500">{`Date: ${lecture.date}`}</p>
            <p className="text-gray-500">{`Time: ${lecture.time}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LectureList;


