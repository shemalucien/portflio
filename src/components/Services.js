import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10">
        <div className="text-3xl font-extrabold text-white-900">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            The services i offer:
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
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
                  <p className="leading-relaxed">{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}