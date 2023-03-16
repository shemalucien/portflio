import React from "react";
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
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <Profile />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experiences />
            <Blogs />
            <Testimonials />
            <Contact />
            <Connect />
            <Footer />
        </main>
    );
};