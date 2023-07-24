import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-full lg:w-3/4 mx-auto">
          As a digital professional, I possess a strong foundation in the latest skills and technologies, including UI/UX Designing, Web Development, Mobile Development, and Cybersecurity services. With a focus on creating user-friendly and visually appealing digital interfaces, I take the time to understand users' needs and design interfaces that are intuitive, easy to use, and aesthetically pleasing. Whether you need a website, web application, or mobile app, my expertise in the latest technologies and programming languages allows me to build robust and secure solutions that exceed your expectations. With my cybersecurity services, I provide comprehensive security solutions that keep your digital assets protected and secure.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/3 w-full min-[320px]:w-1/2">
              <div className=" rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium ">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
