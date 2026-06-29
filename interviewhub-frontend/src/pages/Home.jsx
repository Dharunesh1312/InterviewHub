import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Home() {

  const [experiences, setExperiences] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const fetchExperiences = async () => {
      try {

        const response = await axios.get(
          "http://localhost:3000/api/experience/all"
        );

        setExperiences(response.data.data);
        // console.log(response.data.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchExperiences();

  }, []);

  const filteredExperiences = experiences.filter((experience) => {

    const company = experience.company.toLowerCase();
    const role = experience.role.toLowerCase();
    const searchText = search.toLowerCase();

    return (
      company.includes(searchText) || role.includes(searchText)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">

      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Real Interview Experiences
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-8">
            Find interview experiences shared by students. Search by company or role.
          </p>

          
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              placeholder="Search by company or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <div
              key={experience._id}
              className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              onClick={() => {
                navigate(`/experience/${experience._id}`);
              }}
            >
              
              <div className="flex items-center gap-3 mb-4">

                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {experience.role}
                  </p>
                </div>
              </div>

              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  {experience.difficulty}
                </span>
                <span className="text-xs text-blue-600 font-medium group-hover:underline">
                  Read more ..
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
