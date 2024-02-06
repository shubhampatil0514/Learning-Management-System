import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StudentSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("profile_picture", profilePicture);

      const response = await fetch("http://127.0.0.1:8000/student/register", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setEmail("");
        setUsername("");
        setPassword("");
        setProfilePicture(null);
        setRegistrationSuccess(true);
      } else {
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationSuccess(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-6 bg-gray-50  shadow-md rounded-md">
          <div class="flex items-center justify-center">
            <img
              src="../image/Learning.png"
              alt="Learning Image"
              class="h-16 flex items-center justify-center"
            />
          </div>

          <h2 className="text-3xl font-semibold text-center mb-6">
            Student Signup
          </h2>
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
                htmlFor="username"
                className="block text-black text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-black"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="mb-4">
              <label
                htmlFor="profilePicture"
                className="block text-black text-sm font-medium mb-2"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-black"
                onChange={handleFileChange}
              />
            </div>
            <div class="mt-6 iteam-centre px-24">
              <button
                type="button"
                className="w-full bg-pink-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-pink-700  focus:outline-none"
                onClick={handleLogin}
              >
                Signup
              </button>
            </div>
          </form>
          {registrationSuccess && (
            <div className="mt-4 text-green-600 text-center">
              User registered successfully!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentSignup;
