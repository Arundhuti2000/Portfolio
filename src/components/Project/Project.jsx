import React from "react";
import FadeInSection from "../Utilities/FadeInSection";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons

const Projects = () => {
  const projectsData = [
    {
      title: "GPU Architecture Benchmarking",
      description: "Advanced performance profiling for RTX 30/40 Series GPUs",
      features: ["Performance optimization", "Cache management analysis"],
      technologies: ["Python", "NSight", "CUDA"],
      image: "/images/gpu-benchmarking.png", // Add your image path here
      githubUrl:
        "https://github.com/Arundhuti2000/gpu-cuda-performance-profiler",
    },
    {
      title: "Weather Data Dashboard",
      description:
        "This project collects real-time weather data from 14 strategically selected locations across the United States, covering diverse climate zones from Alaska to Hawaii. The system processes and stores both raw and analyzed weather data, making it suitable for various applications including agriculture, transportation, and emergency response.",
      features: [
        "Real-time weather data collection from multiple regions",
        "Comprehensive weather metrics including: Temperature (Celsius & Fahrenheit), Wind speed, Barometric pressure, Humidity, Weather alerts, Forecasts",
        "Organized data storage with regional partitioning",
        "Weather alert from past two days",
      ],
      technologies: ["AWS Lambda", "QuickSight", "Athena", "S3", "Cloudwatch"],
      image: "/images/weather-dashboard.png", // Add your image path here
      githubUrl:
        "https://github.com/Arundhuti2000/realtime-weather-data-analysis",
    },
    {
      title: "Ocular Disease Detection",
      description: "ML model with 81% accuracy in detecting 8 eye diseases",
      features: [
        "5000+ retinal images processed",
        "Advanced ML implementation",
      ],
      technologies: ["CNN", "K-Means", "Transfer Learning"],
      image: "/images/ocular-disease.png", // Add your image path here
      githubUrl:
        "https://github.com/Arundhuti2000/ocular_eye_disease_detection",
    },
    {
      title: "Auto Doc",
      description:
        "An AI-driven documentation tool that transforms project files into technical documentation",
      features: [
        "Automated Analysis: Scans your project directory and analyzes code patterns",
        "Architecture Documentation: Generates comprehensive insights about project structure",
        "PDF Export: Export documentation to PDF format",
      ],
      technologies: ["Python", "FastAPI", "Ollama", "CodeLlama", "React.js"],
      image: "/images/autodoc.png", // Add your image path here
      githubUrl: "https://github.com/Arundhuti2000/AutoDoc",
    },
    {
      title: "Biryani Recipe Website",
      description: "React-based interactive recipe website for making Biryani",
      features: [
        "Dynamic recipe display with interactive cooking steps",
        "Ingredient tracking and measurement details",
        "Built-in timers for cooking steps",
      ],
      technologies: ["React", "JavaScript", "CSS"],
      video: "/images/biryani-demo.mp4", // Add your video path here, if you have it
      githubUrl: "https://github.com/Arundhuti2000/Biriyani-Recipe",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-white-400">
            Personal Projects
          </h2>
        </FadeInSection>

        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <FadeInSection key={index}>
              <div className="bg-gray-800/30 rounded-xl backdrop-blur-sm overflow-hidden shadow-xl">
                <div className="flex flex-col lg:flex-row">
                  {/* Media Section (Image or Video) */}
                  <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto relative">
                    {project.video ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        poster={project.image} // Optional: Use image as poster
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.image || "/images/placeholder-project.jpg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl text-purple-400 font-semibold">
                        {project.title}
                      </h3>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={24} />
                      </a>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-medium text-purple-300">
                        Key Features:
                      </h4>
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-purple-400 mr-2 mt-1">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-lg font-medium text-purple-300 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
