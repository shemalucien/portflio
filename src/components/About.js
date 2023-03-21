import React from "react";
import UX from '../assets/UIUXDesign.jpg';
import webdev from '../assets/webdev.jpg';
import mobiledev from '../assets/mobiledev.png';
import cyber from '../assets/cyber-security-solution.png';
export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 py-10 ">
            <div className="">
                <h2 className="text-3xl font-extrabold text-white-900">About Me</h2>
                <p className="mt-4 text-md text-gray-500">Hi, my name is Lucien Shema, Software Developer, and cyber security enthusiast with knowledge of numerous
                    programming languages and frameworks with one year of relevant experience.
                    I am a quick learner who is dedicated and trustworthy, as well as someone eager
                    to learn new programming skills. I worked on commercial projects with a large, dispersed team
                    of engineers looking forward to learning new things in information technology, specifically software engineering and cybersecurity,
                    as well as dealing with technological issues.
                    </p>
                    <p className="mt-4 text-md text-gray-500">
                    I am a software engineer and cyber security enthusiast. I received my bachelor's degree in computer and software engineering from the University of Rwanda in December 2021. I Understand a wide range of programming languages and frameworks. Team player with exceptional technical abilities and one year of relevant experience. A quick learner who is devoted and trustworthy, as well as someone eager to learn new programming skills. In January 2022, I began working at Andela as a full-stack junior developer. I collaborated with a large, dispersed team of engineers to sustain and improve commercial projects. Since July 2022, I've been studying for my master's degree in information technology at CMU Africa. I'm excited to learn new things in the field of information technology, specifically software engineering and cybersecurity, as well as handling technological issues. 
                    </p>
                   

            </div>
            <div className="">
                <p className="mt-4 text-lg text-gray-500">
                    <h1 className="text-xl font-extrabold ">
                       <span className="text-blue-500 text-3xl mr-5">2+</span>
                        Years of experience. in Software Development and Cyber Security Fields.
                    </h1>
                </p>
            </div>
            <div className="mt-10 lg:flex ">
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src={UX} alt="React logo" className="w-full h-1/3" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">UI & UX DESIGNING</h3>
                        <p className="text-gray-700 text-base">
                        Our UI/UX Designing service creates visually appealing and user-friendly digital interfaces. We take the time to understand users' needs and design interfaces that are intuitive, easy to use, and aesthetically pleasing. Our goal is to create interfaces that enable users to complete their tasks quickly and efficiently while providing a delightful experience.
                            </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src={webdev} alt="Tailwind CSS logo" className="w-full h-1/3" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">WEB DEVELOPMENT</h3>
                        <p className="text-gray-700 text-base">
                        Our Web Development service is focused on creating robust, secure, and responsive websites and web applications. We use the latest web development technologies and frameworks to build websites that are optimized for speed, search engine visibility, and user experience. Our goal is to provide websites that meet your business needs and exceed your users' expectations.
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src={mobiledev} alt="JavaScript logo" className="w-full h-1/3" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">MOBILE DEVELOPMENT</h3>
                        <p className="text-gray-700 text-base">
                        Our Mobile Development service is dedicated to building mobile applications that are user-friendly, responsive, and secure. We use the latest mobile development frameworks and technologies to create applications that are optimized for performance and user experience. Our goal is to create mobile apps that help you reach your target audience, increase engagement, and provide an exceptional experience .</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 rounded-lg overflow-hidden shadow-md mx-1 my-1">
                    <img src={cyber} alt="JavaScript logo" className="w-full h-1/3" />
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">Cyber Security Services</h3>
                        <p className="text-gray-700 text-base">
                            
                        Our Cybersecurity services are designed to protect your digital assets from unauthorized access, theft, and damage. We offer various cybersecurity services such as vulnerability assessments, penetration testing, threat intelligence, and incident response. Our goal is to provide comprehensive security solutions that meet industry standards and regulations, and keep your digital assets secure and protected.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

