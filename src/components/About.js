import React from "react";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10 ">
            <div className="">
                <h2 className="text-3xl font-extrabold text-white-900">About Me</h2>
                <p className="mt-4 text-md text-gray-500">Hi, my name is Lucien Shema, Software Developer, and cyber security enthusiast with knowledge of numerous
                    programming languages and frameworks with one year of relevant experience.
                    I am a quick learner who is dedicated and trustworthy, as well as someone eager
                    to learn new programming skills. I worked on commercial projects with a large, dispersed team
                    of engineers looking forward to learning new things in information technology, specifically software engineering and cybersecurity,
                    as well as dealing with technological issues.</p>
            </div>
            <div>
                <p className="mt-4 text-lg text-gray-500">
                    <h1 className="text-3xl font-extrabold text-white-900 ">
                        2+ Years of experience. in Software Development and Cyber Security Fields.
                    </h1>
                </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src="https://via.placeholder.com/300x200" alt="React logo" className="w-full" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">React.js</h3>
                        <p className="text-gray-700 text-base">I've built several projects using React.js, including a shopping cart and a weather app. I'm comfortable with React concepts such as components, state, props, and lifecycle methods.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src="https://via.placeholder.com/300x200" alt="Tailwind CSS logo" className="w-full" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
                        <p className="text-gray-700 text-base">I enjoy using Tailwind CSS to style my projects. Its utility-first approach allows me to quickly create responsive and visually appealing designs.</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src="https://via.placeholder.com/300x200" alt="JavaScript logo" className="w-full" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                        <p className="text-gray-700 text-base">JavaScript is the backbone of web development, and I'm comfortable using it to create dynamic and interactive websites. I'm also familiar with popular libraries and frameworks such as jQuery and Vue.js.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

