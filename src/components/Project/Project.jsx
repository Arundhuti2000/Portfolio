import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "GPU Architecture Benchmarking",
            description:
              "Advanced performance profiling for RTX 30/40 Series GPUs",
            features: ["Performance optimization", "Cache management analysis"],
            technologies: ["Python", "NSight", "CUDA"],
          },
          {
            title: "Weather Data Dashboard",
            description: "Real-time weather monitoring with 10-minute updates",
            features: [
              "Real-time data processing",
              "Interactive visualizations",
            ],
            technologies: ["AWS Lambda", "QuickSight", "Athena"],
          },
          {
            title: "Ocular Disease Detection",
            description:
              "ML model with 81% accuracy in detecting 8 eye diseases",
            features: [
              "5000+ retinal images processed",
              "Advanced ML implementation",
            ],
            technologies: ["CNN", "K-Means", "Transfer Learning"],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/30 rounded-lg p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="text-xl text-purple-400 font-semibold">
                {project.title}
              </div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="space-y-2 mb-6">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>
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
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
