import React from "react";
import ProfilePicture from './ProfilePicture';

export default function Profile() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Lucien Shema
          </h1>
          <p className="mb-8 leading-relaxed">
            Fullstack developer, & Cybersecurity Analyst.
          </p>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <ProfilePicture imageUrl="https://avatars.githubusercontent.com/u/77247558?s=400&u=e37f2eddce096fa35dd0a55b7d6a671e6c91e202&v=4" bgColor="blue-500" />
        </div>
      </div>
    </section>
  );
}
