import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('https://backend-ep1x.onrender.com/api/v1/testimonials/'); // Replace with the actual API endpoint to fetch projects
      setTestimonials(response.data.data); // Assuming the API response has a "data" field containing the projects array
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };
  return (
    <section id="testimonials">
      <div className="w-full px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-extrabold text-white-900 mb-4 ">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4 justify-center py-6">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-opacity-40 p-8 rounded">
                  <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                  <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonial.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm uppercase">
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-gray-600 text-3xl">No Testimonials Found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
