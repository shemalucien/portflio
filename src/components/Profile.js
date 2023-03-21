import React from "react";
import ProfilePicture from './ProfilePicture';
import ProfilePic from "../assets/Profile.png"
export default function Profile() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-xl mb-4 font-extrabold lg:text-4xl text-whitefont-medium">
            Hi, I'm Lucien Shema
          </h1>
          <p className="mb-8 text-2xl leading-relaxed">
            Fullstack developer, & Cybersecurity Analyst.
          </p>
          <div className="flex justify-center">
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 mr-5">
              <a href="mailto:z5W2U@example.com">Hire Me</a>
            </button>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">
              <a href="https://drive.google.com/file/d/1TjhqZ-v6hY8-4g6vz_1y6v1y8T6v1y8/view?usp=sharing" target="_blank" rel="noreferrer">
                My Resume
              </a></button>
          </div>

        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  items-center text-center mr-5">
          <ProfilePicture imageUrl={ProfilePic} bgColor="blue-500" />
        </div>
      </div>
    </section>
  );
}
