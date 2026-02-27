import React, { useState } from "react";
import FadeInSection from "../Utilities/FadeInSection";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";

const Projects = () => {
  const projectsData = [
    {
      title: "VaultDrive",
      subtitle: "Zero-Knowledge Cloud Storage",
      description:
        "A full-stack secure file storage application built with Go and React, implementing zero-knowledge encryption architecture. VaultDrive demonstrates enterprise-grade security practices including end-to-end encryption, JWT authentication, and secure file sharing using public key cryptography.",
      features: [
        "Zero-knowledge architecture",
        "AES-256-GCM encryption",
        "Secure file sharing",
        "Containerized via Docker",
      ],
      technologies: ["Go", "React", "PostgreSQL", "Docker", "Azure"],
      image: "/images/vault.png",
      githubUrl: "https://github.com/Pranay0205/VaultDrive",
      liveUrl: "https://proud-dune-0024f9810.3.azurestaticapps.net/",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Tubely",
      subtitle: "Video Streaming Platform",
      description:
        "A full-stack video streaming application built with Golang and modern cloud infrastructure. Tubely demonstrates implementation of scalable file storage with AWS S3 and global content delivery through CloudFront CDN.",
      features: [
        "AWS S3 & CloudFront",
        "Video Transcoding (FFMPEG)",
        "RESTful API in Go",
      ],
      technologies: ["Golang", "AWS S3", "CloudFront", "FFMPEG", "SQLite"],
      image: "/images/Tubely.jpg",
      githubUrl: "https://github.com/Arundhuti2000/Tubely",
      liveUrl: "",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "KodeKloud Streak",
      subtitle: "Learning Habit Extension",
      description:
        "A Chrome browser extension designed to enhance the KodeKloud learning experience by tracking and maintaining learning streaks. This productivity tool helps DevOps learners stay motivated and consistent.",
      features: [
        "Automatic streak tracking",
        "Visual streak counter",
        "Persistent local storage",
      ],
      technologies: ["JavaScript", "Chrome Extension API", "HTML/CSS"],
      image: "/images/kodekloud-streak.png",
      githubUrl: "https://github.com/Arundhuti2000/kodekloud-streak",
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "Charcha",
      subtitle: "Social Media API",
      description:
        "Scalable social media platform built with modern microservices architecture and containerized deployment. Features comprehensive real-time data exchange, secure authentication, and auto-scaling capabilities.",
      features: [
        "RESTful API with 15+ endpoints",
        "JWT authentication",
        "Auto-scaling deployment",
      ],
      technologies: ["FastAPI", "React", "PostgreSQL", "Azure"],
      image: "/images/charcha-1.png",
      githubUrl: "https://github.com/Arundhuti2000/Python_SocialMedia",
      liveUrl:
        "https://ca-social-media.mangodesert-0d3ef58a.eastus.azurecontainerapps.io/docs",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Emporia",
      subtitle: "E-Commerce Platform",
      description:
        "Full-stack e-commerce platform featuring comprehensive multi-user workflows supporting Customer, Seller, and Admin roles. Built with modern web technologies and enterprise design patterns.",
      features: [
        "Multi-role authentication",
        "Real-time cart sync",
        "Transaction processing",
      ],
      technologies: ["Python", "Flask", "React", "TypeScript", "MySQL"],
      image: "/images/emporia.png",
      githubUrl: "https://github.com/Arundhuti2000/emporia",
      color: "from-indigo-500 to-violet-400",
    },
    {
      title: "GPU Profiler",
      subtitle: "Architecture Benchmarking",
      description:
        "Advanced performance profiling for RTX 30/40 Series GPUs. Focuses on performance optimization and cache management analysis.",
      features: ["Performance optimization", "Cache management analysis"],
      technologies: ["Python", "NSight", "CUDA"],
      image: "/images/gpu-benchmarking.png",
      githubUrl:
        "https://github.com/Arundhuti2000/gpu-cuda-performance-profiler",
      color: "from-red-500 to-rose-400",
    },
    {
      title: "Weather Dash",
      subtitle: "Real-time Analysis",
      description:
        "This project collects real-time weather data from 14 strategically selected locations across the United States. The system processes and stores both raw and analyzed weather data.",
      features: [
        "Real-time data collection",
        "Comprehensive metrics",
        "Regional partitioning",
      ],
      technologies: ["AWS Lambda", "Athena", "S3", "Cloudwatch"],
      image: "/images/weather-dashboard.png",
      githubUrl:
        "https://github.com/Arundhuti2000/realtime-weather-data-analysis",
      color: "from-sky-500 to-blue-400",
    },
    {
      title: "Ocular AI",
      subtitle: "Disease Detection",
      description:
        "ML model with 81% accuracy in detecting 8 eye diseases. Processed 5000+ retinal images using advanced ML implementation.",
      features: ["5000+ images processed", "CNN & Transfer Learning"],
      technologies: ["CNN", "K-Means", "Python"],
      image: "/images/ocular-disease.png",
      githubUrl:
        "https://github.com/Arundhuti2000/ocular_eye_disease_detection",
      color: "from-teal-500 to-green-400",
    },
    {
      title: "Auto Doc",
      subtitle: "AI Documentation",
      description:
        "An AI-driven documentation tool that transforms project files into technical documentation. Scans your project directory and analyzes code patterns.",
      features: ["Automated Analysis", "Architecture Insight", "PDF Export"],
      technologies: ["Python", "FastAPI", "Ollama", "React.js"],
      image: "/images/autodoc.png",
      githubUrl: "https://github.com/Arundhuti2000/AutoDoc",
      color: "from-fuchsia-500 to-pink-400",
    },
    {
      title: "Biryani Recipe",
      subtitle: "Interactive Cooking",
      description:
        "React-based interactive recipe website for making Biryani with dynamic recipe display and built-in timers.",
      features: ["Dynamic display", "Ingredient tracking", "Built-in timers"],
      technologies: ["React", "JavaScript", "CSS"],
      image: "/images/biryani-demo.mp4",
      githubUrl: "https://github.com/Arundhuti2000/Biriyani-Recipe",
      liveUrl: "https://biriyani-recipe.arundhatidas.com/",
      color: "from-yellow-500 to-orange-400",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-black pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <FadeInSection>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Explore the{" "}
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Universe
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Hover over a sphere to peek inside. Click to expand the details.
            </p>
          </div>
        </FadeInSection>

        {/* Bubble Grid Layout - Staggered/Organic Feel */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 perspective-1000 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div
                className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-125 hover:z-50"
                onClick={() => setActiveProject(project)}
              >
                {/* The Sphere Container */}
                <div className="w-full h-full relative rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_60px_-10px_rgba(100,100,255,0.3)] transition-shadow duration-500">
                  {/* Sphere Mask */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border border-white/10 bg-[#1a1a1a]">
                    {/* Image/Content */}
                    <div className="absolute inset-0">
                      {project.image && !project.image.endsWith(".mp4") ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100 filter blur-[0.5px] group-hover:blur-0"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.color} opacity-40`}
                        />
                      )}
                    </div>

                    {/* Gradient Overlay for Depth (Sphere Effect) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 opacity-80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

                    {/* Shine/Reflection */}
                    <div className="absolute top-[10%] left-[15%] w-[40%] h-[20%] bg-gradient-to-br from-white/20 to-transparent rounded-[100%] blur-[2px] transform -rotate-12 opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[20%] bg-gradient-to-tl from-white/10 to-transparent rounded-[100%] blur-[5px] transform -rotate-12 opacity-30" />

                    {/* Content Overlay (Visible on Hover) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <div className="bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl">
                        <h3 className="text-sm md:text-lg font-bold text-white mb-1 drop-shadow-md">
                          {project.title}
                        </h3>
                        {/* <div className="h-0.5 w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-2" /> */}
                      </div>
                    </div>
                  </div>

                  {/* External Ring (Saturn-like effect on hover) */}
                  <div
                    className={`absolute -inset-[1px] md:-inset-[3px] rounded-full bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 -z-10`}
                  />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            {/* Header/Close Button */}
            <div className="absolute top-0 right-0 p-6 z-20">
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md border border-white/5"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-auto relative bg-[#131314]">
                {activeProject.image &&
                !activeProject.image.endsWith(".mp4") ? (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                ) : activeProject.image &&
                  activeProject.image.endsWith(".mp4") ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                    >
                      <source src={activeProject.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${activeProject.color} opacity-20`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`h-2 w-2 rounded-full bg-gradient-to-r ${activeProject.color}`}
                    />
                    <span
                      className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${activeProject.color} uppercase tracking-wider`}
                    >
                      {activeProject.subtitle}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {activeProject.features?.slice(0, 5).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeProject.color}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies?.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-medium transition-colors"
                    >
                      <FaGithub size={20} />{" "}
                      <span className="text-sm">View Code</span>
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />{" "}
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
