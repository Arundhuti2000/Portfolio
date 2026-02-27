import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Extracurricular from "./components/Extracurricular/Extracurricular";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import React from "react";
function App() {
  return (
    <>
      <div className="bg-black text-gray-100 min-h-screen selection:bg-purple-500/30 selection:text-white">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <Extracurricular />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
