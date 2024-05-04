import React, { useState } from "react";
import axios from "axios";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import TeacherSidemenu from "./TeacherSidemenu";
import TeacherProfile from "./TeacherProfile";
import CurrentDayCalendar from "../CurrentDayCalendar";
import LectureList from "./LectureList";
import '../../index.css'

const LectureForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const teacherEmail = localStorage.getItem("teacherEmail");
    const formattedDate = selectedDate.toISOString().split("T")[0];
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/teacher/lecture/create/${teacherEmail}`,
        {
          title,
          description,
          date: formattedDate,
          time,
        }
      );
      console.log("Lecture created:", response.data);
    } catch (error) {
      console.error("Error creating lecture:", error.response.data);
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      <TeacherSidemenu />

      <div className="h-screen md:w-9/12 font-sans">
        <div className="flex items-center justify-between bg-white px-4cursor-pointer">
          <h2 className="text-2xl font-bold">Teacher Dashboard</h2>
          <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg m-1 cursor-pointer">
            <input
              type="text"
              placeholder="Search..."
              className=" rounded-lg outline-none"
            />
            <IoSearchOutline />
          </div>
        </div>
        <div className="flex ">
          <LectureList />
          <div className="w-full m-6 p-6 bg-white rounded-md h-full shadow-md formheight">
            <h2 className="text-2xl font-bold bg-pink-600 text-white px-4 py-2 rounded-md text-center">
              Schedule Lecture
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                <span className="text-gray-700">Title:</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input mt-1 block w-full border-gray-400 border rounded"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Description:</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-textarea mt-1 block w-full border-gray-400 border rounded"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Date:</span>
                <input
                  type="text"
                  value={selectedDate.toISOString().split("T")[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="form-input mt-1 block w-full border-gray-400 border rounded"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Time:</span>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="form-input mt-1 block w-full border-gray-400 border rounded"
                />
              </label>
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-md"
              >
                Create Lecture
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" w-3/12 bg-white font-sans">
        <div className=" bg-white p-4 items-center justify-center">
          <TeacherProfile />
          <CurrentDayCalendar
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default LectureForm;
