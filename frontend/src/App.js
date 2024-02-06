import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TeacherSignup from './auth/TeacherSignup';
import StudentSignup from './auth/StudentSignup';
import TeacherLogin from './auth/TeacherLogin';
import StudentLogin from './auth/StudentLogin';
import StudentDashbord from './components/StudentDashbord';
import TeacherDashbord from './components/TeacherDashbord';


function App() { 
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup/teacher" element={<TeacherSignup />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/login/teacher" element={<TeacherLogin />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/dashbord/student" element={<StudentDashbord />} />
        <Route path="/dashbord/teacher" element={<TeacherDashbord />} />
      </Routes>
    </Router> 
  );
}

export default App;
