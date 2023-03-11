import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Blogs from "./components/Blogs";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Experiences/>
      <Blogs/>
      <Testimonials />
      <Contact />
      <Connect />

      <Footer/>
    </main>
  );
}
