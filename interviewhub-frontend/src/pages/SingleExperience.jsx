import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function SingleExperience() {

  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchExperience = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/experience/${id}`
        );

        setExperience(response.data.data);
        // console.log(response.data.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchExperience();

  }, []);

  console.log(id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Loading experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-blue-600 font-medium mb-6 flex items-center gap-1 transition-colors duration-200"
        >
          -- Back to all experiences
        </button>

        
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

          
          <div className="bg-blue-600 px-8 py-6">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-extrabold text-white">
                  {experience.company}
                </h1>
                <p className="text-blue-100 text-sm mt-0.5">
                  {experience.role}
                </p>
              </div>
              <span className="ml-auto bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full border border-blue-400">
                {experience.difficulty}
              </span>
            </div>
          </div>

          
          <div className="px-8 py-6 divide-y divide-gray-100">

           
            <div className="py-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">
                Interview Questions
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                {experience.questions}
              </p>
            </div>

           
            <div className="py-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">
                Experience
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                {experience.experience}
              </p>
            </div>

           
            <div className="py-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">
                Tips for You
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                {experience.tips}
              </p>
            </div>

            
            <div className="py-5">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">
                Result
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                {experience.result}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleExperience;
