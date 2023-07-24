import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Connect from "./Connect";
import Footer from "./Footer";

export default function LandingPage() {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }
    return (
        <main className="text-gray-400 bg-gray-900 body-font ">
            <div className={darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-black'} >
                <Navbar toggleDarkMode={toggleDarkMode} />
                <Profile />
                <Skills />
                <About />
                <Services/>
                <Projects />
                <Experiences />
                <Blogs />
                <Testimonials />
                <Contact />
                <Connect />
                <Footer />
            </div>
        </main>
    );
};
