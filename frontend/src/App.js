import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TeacherSignup from './auth/TeacherSignup';
import StudentSignup from './auth/StudentSignup';
import TeacherLogin from './auth/TeacherLogin';
import StudentLogin from './auth/StudentLogin';
import StudentDashbord from './components/Student/StudentDashbord';
import TeacherDashbord from './components/Teacher/TeacherDashbord';
import LectureForm from './components/Teacher/LectureForm';
import QuizForm from './components/Teacher/QuizForm';
import Quiz from './components/Student/Quiz';
import Test from './components/Test';


function App() { 
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/signup/teacher" element={<TeacherSignup />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/login/teacher" element={<TeacherLogin />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/dashbord/student" element={<StudentDashbord />} />
        <Route path="/dashbord/teacher" element={<TeacherDashbord />} />
        <Route path="/dashbord/teacher/createlecture" element={<LectureForm />} />
        <Route path="/dashbord/teacher/quiz" element={<QuizForm />} />
        <Route path="/dashbord/student/quiz" element={<Quiz />} />
      </Routes>
    </Router> 
  );
}

export default App;
