import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateExperience() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState("");
  const [experience, setExperience] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tips, setTips] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const handleCreateExperience = async () => {
    try {
      const response = await axios.post(
        "https://interviewhub-im7b.onrender.com/api/experience/create",
        {
          company,
          role,
          questions,
          experience,
          difficulty,
          tips,
          result
        },
        {
          withCredentials: true,
        }
      );
      // console.log(response.data);

      alert("Experience Created Successfully");

      navigate("/"); //home page going

    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  alert(error.response?.data?.message || error.message);
}
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900">Share Your Experience</h1>
          <p className="text-gray-500 text-sm mt-1">Help fellow students by sharing what your interview was like.</p>
        </div>

        
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Company Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                placeholder="e.g. Google"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Role Applied For
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                placeholder="e.g. Software Engineer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>

          
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Difficulty Level
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              type="text"
              placeholder="e.g. Easy / Medium / Hard"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            />
          </div>

          
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Interview Questions
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              type="text"
              placeholder="List the questions you were asked..."
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
            />
          </div>

          
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Experience
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              type="text"
              placeholder="Describe how the interview went..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Tips for Others
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              type="text"
              placeholder="Any advice you'd give to future candidates..."
              value={tips}
              onChange={(e) => setTips(e.target.value)}
            />
          </div>

          
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Final Result
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              type="text"
              placeholder="e.g. Selected / Rejected / On Hold"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </div>

          
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
            onClick={handleCreateExperience}
          >
            Submit Experience
          </button>

        </div>
      </div>
    </div>
  );
}

export default CreateExperience;
