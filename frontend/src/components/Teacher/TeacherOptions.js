import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherOptions = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    switch (option) {
      case 'schedule-lecture':
        navigate('/dashbord/teacher/createlecture');
        break;
      case 'create-quiz':
        navigate('/dashbord/teacher/quiz');
        break;
      case 'assign-project':
        navigate('/assign-project');
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-between rounded-xl p-3 bg-white mx-2">
        <div
          className="w-64 h-12  bg-purple-400 rounded-md cursor-pointer flex items-center justify-center"
          onClick={() => handleOptionClick('schedule-lecture')}
        >
          <h3 className="text-white font-bold text-lg">Schedule Lecture</h3>
          <img
          src="../image/next.png" 
          alt="Student Icon"
          className="w-8 h-8 ml-2 "
          />

        </div>

        <div
          className="w-64 h-12 bg-violet-400 rounded-md cursor-pointer flex items-center justify-center"
          onClick={() => handleOptionClick('create-quiz')}
        >
          <h3 className="text-white font-bold text-lg">Create Quiz</h3>
          <img
          src="../image/next.png" 
          alt="Student Icon"
          className="w-8 h-8 ml-2 "
          />

        </div>

        <div
          className="w-64 h-12 bg-rose-400 rounded-md cursor-pointer flex items-center justify-center"
          onClick={() => handleOptionClick('assign-project')}
        >
          <h3 className="text-white font-bold text-lg">Assign Project</h3>
          <img
          src="../image/next.png" 
          alt="Student Icon"
          className="w-8 h-8 ml-2 "
          />
        </div>

    </div>
  );
};

export default TeacherOptions;
