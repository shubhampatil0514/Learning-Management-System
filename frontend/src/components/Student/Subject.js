import React from "react";

function Subject() {
  return (
    <div className="m-2 md:flex md:justify-between bg-white rounded-xl p-4">
      <div className="flex items-center justify-center w-40 h-24 bg-red-600 my-2 rounded-lg cursor-pointer">
        <h1 className="text-2xl text-white font-semibold">Mathematics</h1>
      </div>
      <div className="flex items-center justify-center w-40 h-24 bg-yellow-400 my-2 rounded-lg cursor-pointer">
        <h1 className="text-2xl text-white font-semibold">Science</h1>
      </div>
      <div className="flex items-center justify-center w-40 h-24 bg-purple-700 my-2 rounded-lg cursor-pointer">
        <h1 className="text-2xl text-white font-semibold">History</h1>
      </div>
      <div className="flex items-center justify-center w-40 h-24 bg-green-500 my-2 rounded-lg cursor-pointer">
        <h1 className="text-2xl text-white font-semibold">English</h1>
      </div>
      <div className="flex items-center justify-center w-40 h-24 bg-pink-600 my-2 rounded-lg cursor-pointer">
        <h1 className="text-2xl text-white font-semibold">Geography</h1>
      </div>
    </div> 
  );
}

export default Subject;
