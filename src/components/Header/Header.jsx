import React, { useState } from "react";
import NavLink from "../NavLink/NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold text-purple-400 transition-all duration-500 hover:scale-105">
            AD.
          </span>
          <div className="hidden md:flex space-x-8">
            <NavLink onClick={() => handleButtonClick("home")}>Home</NavLink>
            <NavLink onClick={() => handleButtonClick("experience")}>
              Experience
            </NavLink>
            <NavLink onClick={() => handleButtonClick("skills")}>
              Skills
            </NavLink>
            <NavLink onClick={() => handleButtonClick("projects")}>
              Projects
            </NavLink>
            <NavLink onClick={() => handleButtonClick("contact")}>
              Contact
            </NavLink>
          </div>
          <button
            className="md:hidden text-purple-400 transition-transform duration-300 hover:rotate-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 p-4">
          <div className="flex flex-col space-y-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
