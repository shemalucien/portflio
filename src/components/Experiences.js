import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {UsersIcon } from "@heroicons/react/solid";
import {GiPlayerPrevious} from "react-icons/gi";
import { experiences } from "../data";

export default function Experiences() {


  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/experiences/'); // Replace with the actual API endpoint to fetch projects
      setExperiences(response.data.data); // Assuming the API response has a "data" field containing the projects array
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  return (
    <section id="experiences" className=" body-font">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10">
      <div className="text-3xl w-full px-5 py-10 mx-auto text-center text-white-900">
      {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
      <GiPlayerPrevious className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-extrabold text-white-900 mb-4 ">
        My Experiences
        </h1>
        <p className="mt-4 mb-4 text-lg">
        I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
        </p>
      </div>
      <div className="flex flex-wrap -m-4 min-[320px]:justify-center">
        {experiences.length > 0 ? (
        experiences.map((experience) => (
          <a
            href={experience.link}
            key={experience.image}
            className="sm:w-1/3 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={experience.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {experience.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {experience.title}
                </h1>
                <p className="leading-relaxed">{experience.description}</p>
              </div>
            </div>
          </a>
        ))
        ):(
        <p className="text-gray-600 text-3xl flex items-center">No Experiences Found</p>
        )
      }
      </div>
    </div>
  </section>
  );
}