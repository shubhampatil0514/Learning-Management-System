// Quiz.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
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

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSelectedSubjectId(value);
    // Reset selected answers when the subject changes
    setSelectedAnswers({});
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/quize/questions/${selectedSubjectId}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error.response.data);
      }
    };

    if (selectedSubjectId) {
      fetchQuestions();
    }
  }, [selectedSubjectId]);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  return (
    <>
      <div className="h-screen w-full bg-white font-sans">
        <div className="flex px-2 py-2 bg-gray-200">
          <h2 className="text-2xl font-bold bg-pink-600 text-white px-6 py-2 rounded-md">
            Quiz
          </h2>
          <div className="mb-4 absolute right-0 mr-4 ">
            <label
              htmlFor="subject"
              className="block text-sm text-white font-medium text-center bg-pink-600 rounded-md"
            >
              Subject:
            </label>
            <select
              id="selectSubject"
              name="selectSubject"
              onChange={handleSubjectChange}
              value={selectedSubjectId}
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
        <div>
          <ul className="list-none">
            {questions.map((question, index) => (
              <li key={question.id} className="mb-6">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <p className="text-lg font-semibold mb-4">
                  {`${index + 1}. ${question.question}`}
                  </p>
                  <div className="mb-2">
                    <label className="block font-medium text-gray-600">
                      Select Answer:
                    </label>
                    <div className="flex flex-col">
                      {['option_one', 'option_two', 'option_three', 'option_four'].map((optionKey, index) => (
                        <label key={index} className="flex items-center mb-2">
                          <input
                            type="radio"
                            name={`answer_${question.id}`}
                            value={question[optionKey]}
                            checked={selectedAnswers[question.id] === question[optionKey]}
                            onChange={() => handleAnswerChange(question.id, question[optionKey])}
                            className="w-4 h-4 mr-2 text-pink-600 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                          />
                          <span>{question[optionKey]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
