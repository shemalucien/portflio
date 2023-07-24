import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaProjectDiagram } from "react-icons/fa";
export default function Services(props) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://backend-ep1x.onrender.com/api/v1/services/'); // Replace with the actual API endpoint to fetch projects
      setServices(response.data.data); // Assuming the API response has a "data" field containing the projects array
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  return (
    <section id="projects" className="body-font">
      <div className="text-3xl w-full px-5 py-10 mx-auto text-center text-white-900">
        <div className="text-3xl w-full px-5 py-10 mx-auto text-center text-white-900">
          <FaProjectDiagram className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-extrabold text-white-900 mb-4 ">
            Services I Offer
          </h1>
          <p className="mt-4 mb-4 text-lg">
            I offer different services to my clients. the services i offer are as follows:
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center items-center">
          {services.length > 0 ? (
            services.map((service) => (
              <a
                href={service.link}
                key={service.image}
                className="sm:w-1/3 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={service.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {service.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {service.title}
                    </h1>
                    <p className="leading-relaxed text-sm text-white mb-3">{service.description}</p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-gray-600 flex items-center">No Services Found</p>
          )}
        </div>
      </div>
    </section>
  );
}
