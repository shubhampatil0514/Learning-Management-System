import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";
import Navbar from "../components/Navbar";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(true);

  const handleLogin = async () => {
    console.log("Login credentials:", email, password);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/student/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        
        localStorage.setItem('accessToken', responseData.access);
        const decodedStudentId = base64.decode(responseData.student_id_base64);
        const decodedStudentEmail = base64.decode(responseData.student_email_base64);
        localStorage.setItem('studentId', decodedStudentId);
        localStorage.setItem('studentEmail', decodedStudentEmail);

        setLoginSuccess(true);
        navigate("/dashbord/student");
      } else {
        setLoginSuccess(false);
      }
    } catch (error) {
      setLoginSuccess(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className=" flex mx-auto bg-white">
      <div className="max-w-md w-full p-6 bg-gray-50 shadow-md rounded-md mt-8  mx-auto">
        <div class="flex items-center justify-center">
          <img
            src="../image/Learning.png"
            alt="Learning Image"
            class="h-16 flex items-center justify-center"
          />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-6">
          Student Login
        </h2>
        {loginSuccess === false && (
          <div className="mb-4 text-red-600 text-center">
            Email or password is incorrect.
          </div>
        )}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-black"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-black"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6 iteam-centre px-24">
            <button
              type="button"
              className="w-full bg-pink-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-pink-700 focus:outline-none"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default StudentLogin;
