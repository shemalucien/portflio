import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://backend-ep1x.onrender.com/api/v1/projects/'); 
      setProjects(response.data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <section id="projects" className="body-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10">
        <div className="text-3xl w-full px-5 py-10 mx-auto text-center text-white-900">
          <FaProjectDiagram className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-extrabold text-white-900 mb-4 ">
            Featured projects
          </h1>
          <p className="mt-4 mb-4 text-lg">
            I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects
          </p>
        </div>
        <div className="flex flex-wrap -m-4 min-[320px]:justify-center">

          {projects.length > 0 ? (
            projects.map((project) => (
              <a
                href={project.link}
                rel="noreferrer"
                target="_blank"
                key={project.image}
                className="sm:w-1/3 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-white mb-3">{project.description}</p>
                  </div>
                </div>
              </a>
            ))
            ):(
              <p className="text-gray-600 text-3xl flex items-center">No Projects Found</p>
            )
          }
        </div>
      </div>
    </section>
  );
}
