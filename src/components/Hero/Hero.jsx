import React, { useState, useEffect } from "react";
import DynamicBackground from "../Utilities/DynamicBackground";

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((c) => c + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className={isTyping ? "border-r-2 border-purple-400" : ""}>
      {displayText}
    </span>
  );
};

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      <DynamicBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div
          className={`transform transition-all duration-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-purple-400">
                <TypewriterText text="Arundhati" delay={150} />
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">
                Das
              </span>
            </h1>

            <div
              className="text-2xl text-gray-400 leading-relaxed max-w-4xl opacity-0 animate-fadeIn"
              style={{ animationDelay: "2s", animationFillMode: "forwards" }}
            >
              <TypewriterText
                text="Software Engineer with 3 years of experience in automation, cloud infrastructure, and application deployment.
 Proficient in designing and maintaining CI/CD pipelines, streamlining deployment processes, and managing
 seamless production releases."
                delay={15}
              />
            </div>

            <div
              className="flex flex-wrap gap-4 mt-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "4s", animationFillMode: "forwards" }}
            >
              {[
                "Azure DevOps",
                "Kubernetes",
                "CI/CD",
                "Cloud Architecture",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="bg-purple-400/10 px-4 py-2 rounded-full text-purple-300 border border-purple-400/20
                           hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${(index + 8) * 0.2}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div
              className="mt-8 flex gap-4 opacity-0 animate-fadeIn"
              style={{ animationDelay: "5s", animationFillMode: "forwards" }}
            >
              <button
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 
                               transform transition-all duration-300 hover:scale-105"
                onClick={() => handleButtonClick("contact")}
              >
                Get in Touch
              </button>
              <button
                className="border border-purple-400/20 text-purple-400 px-6 py-3 rounded-lg 
                               hover:bg-purple-400/10 transform transition-all duration-300 hover:scale-105"
                onClick={() => handleButtonClick("projects")}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
