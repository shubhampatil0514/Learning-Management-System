// LectureForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const LectureForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const teacherEmail = localStorage.getItem('teacherEmail');
    try {
      const response = await axios.post(`http://127.0.0.1:8000/teacher/lecture/create/${teacherEmail}`, {
        title,
        description,
        date,
        time,
      });
      console.log('Lecture created:', response.data);
    } catch (error) {
      console.error('Error creating lecture:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Create Lecture
      </button>
    </form>
  );
};

export default LectureForm;
