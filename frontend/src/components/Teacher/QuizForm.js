import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherSidemenu from "./TeacherSidemenu";
import { IoSearchOutline } from "react-icons/io5";

const QuizForm = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [formData, setFormData] = useState({
    subject: "",
    question: "",
    answer: "",
    option_one: "",
    option_two: "",
    option_three: "",
    option_four: "",
  });

  useEffect(() => {
    // Fetch the list of subjects
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/quize/subjects"
        );
        setSubjectList(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error.response.data);
      }
    };

    fetchSubjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/quize/create",
        formData
      );
      console.log("Question created:", response.data);
      setFormData({
        question: "",
        answer: "",
        option_one: "",
        option_two: "",
        option_three: "",
        option_four: "",
      });
    } catch (error) {
      console.error("Error creating question:", error.response.data);
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      <TeacherSidemenu />
      <div className="h-screen w-full bg-white font-sans">
        <div className="flex items-center justify-between bg-white px-8 cursor-pointer">
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

        <div className="bg-gray-200 h-full">
          <div className="flex py-2">
            <h2 className="text-2xl font-bold bg-pink-600 text-white px-4 py-2 rounded-md text-center w-96 mx-auto">
              Create Quiz Question
            </h2>
            <div className="mb-4 absolute right-0 mr-4 ">
              <label
                htmlFor="subject"
                className="block text-sm text-white font-medium text-center bg-pink-600 rounded-md"
              >
                Subject:
              </label>
              <select
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="form-select mt-1 block w-full rounded-md border border-black focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectList.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.subject_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className=" mx-8 mt-6  p-6 bg-white rounded-md shadow-md font-sans">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block font-medium text-gray-600"
                >
                  Question:
                </label>
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className=" mt-1 block w-full h-10 border rounded-md border-black "
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="answer"
                  className="block font-medium text-gray-600"
                >
                  Answer:
                </label>
                <input
                  type="text"
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  className="mt-1 block w-96 h-10 border rounded-md border-black"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="option_one"
                  className="block font-medium text-gray-600"
                >
                  Option One:
                </label>
                <input
                  type="text"
                  name="option_one"
                  value={formData.option_one}
                  onChange={handleChange}
                  className="mt-1 block w-96 h-10 border rounded-md border-black"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="option_two"
                  className="block font-medium text-gray-600"
                >
                  Option Two:
                </label>
                <input
                  type="text"
                  name="option_two"
                  value={formData.option_two}
                  onChange={handleChange}
                  className="mt-1 block w-96 h-10 border rounded-md border-black"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="option_three"
                  className="block font-medium text-gray-600"
                >
                  Option Three:
                </label>
                <input
                  type="text"
                  name="option_three"
                  value={formData.option_three}
                  onChange={handleChange}
                  className="mt-1 block w-96 h-10 border rounded-md border-black"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="option_four"
                  className="block font-medium text-gray-600"
                >
                  Option Four:
                </label>
                <input
                  type="text"
                  name="option_four"
                  value={formData.option_four}
                  onChange={handleChange}
                  className="mt-1 block w-96 h-10 border rounded-md border-black"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  Create Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
