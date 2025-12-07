import React from "react";
import FadeInSection from "../Utilities/FadeInSection";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons

const Projects = () => {
  const projectsData = [
    {
      title: "VaultDrive - Zero-Knowledge Cloud Storage",
      description:
        "A full-stack secure file storage application built with Go and React, implementing zero-knowledge encryption architecture. VaultDrive demonstrates enterprise-grade security practices including end-to-end encryption, JWT authentication, and secure file sharing using public key cryptography. The server acts as a blind storage provider with no access to plaintext files or encryption keys. Deployed on Azure Container Apps for scalable, containerized cloud hosting.",
      features: [
        "Zero-knowledge architecture with AES-256-GCM encryption - server never sees plaintext files",
        "Secure user authentication with JWT tokens, refresh tokens, and bcrypt password hashing",
        "Automatic RSA key pair generation for each user during registration",
        "Encrypted file upload and download with metadata storage (IV, salt) for client-side decryption",
        "Secure file sharing system using wrapped keys and public key cryptography",
        "Instant access control with ability to revoke shared file permissions",
        "RESTful API with proper error handling and validation",
        "Type-safe database queries using SQLC and PostgreSQL",
        "Responsive UI with modern design using Tailwind CSS and shadcn/ui components",
        "Containerized deployment on Azure Container Apps with CI/CD pipeline via GitHub Actions",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "SQLC",
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "JWT",
        "Docker",
        "Azure Container Apps",
      ],
      image: "/images/vault.png",
      githubUrl: "https://github.com/Pranay0205/VaultDrive",
      liveUrl: "https://proud-dune-0024f9810.3.azurestaticapps.net/",
    },
    {
      title: "Tubely - Video Streaming Platform",
      description:
        "A full-stack video streaming application built with Golang and modern cloud infrastructure for the Boot.dev course on File Servers and CDNs. Tubely demonstrates implementation of scalable file storage with AWS S3 and global content delivery through CloudFront CDN, featuring video upload, processing, and streaming capabilities with automatic transcoding.",
      features: [
        "Video upload and streaming with AWS S3 bucket integration for scalable cloud storage",
        "CloudFront CDN integration for optimized global content delivery and reduced latency",
        "Automatic video transcoding and format conversion using FFMPEG",
        "SQLite database for efficient metadata and asset management",
        "RESTful API built with Golang for high-performance media operations",
        "Local asset storage with automatic directory management and sample media downloads",
      ],
      technologies: ["Go", "AWS S3", "CloudFront", "FFMPEG", "SQLite"],
      image: "/images/Tubely.jpg",
      githubUrl: "https://github.com/Arundhuti2000/Tubely",
    },
    {
      title: "KodeKloud Streak Extension",
      description:
        "A Chrome browser extension designed to enhance the KodeKloud learning experience by tracking and maintaining learning streaks. This productivity tool helps DevOps learners stay motivated and consistent with their studies on the KodeKloud platform, providing visual feedback and streak management features directly in the browser.",
      features: [
        "Automatic streak tracking for KodeKloud course completion and lab activities",
        "Visual streak counter and progress indicators in browser toolbar",
        "Persistent local storage for maintaining streak data across sessions",
        "Clean and intuitive user interface integrated with KodeKloud platform",
        "Notifications and reminders to maintain daily learning streaks",
        "Chrome extension architecture with manifest V3 compliance",
      ],
      technologies: [
        "JavaScript",
        "Chrome Extension API",
        "HTML",
        "CSS",
        "Local Storage",
      ],
      image: "/images/kodekloud-streak.png",
      githubUrl: "https://github.com/Arundhuti2000/kodekloud-streak",
    },
    {
      title: "Charcha - Social-Media API",
      description:
        "Scalable social media platform built with modern microservices architecture and containerized deployment. Features comprehensive real-time data exchange, secure authentication, and auto-scaling capabilities deployed on Azure Container Apps with optimized resource management and database migration support.",
      features: [
        "RESTful API with 15+ endpoints for comprehensive social media functionality",
        "JWT authentication with secure session management and authorization middleware",
        "Auto-scaling deployment (0-10 replicas) on Azure Container Apps",
        "Containerized FastAPI application with optimized Python 3.11-slim base image",
        "Database migrations using Alembic with version control and rollback capabilities",
        "Managed PostgreSQL integration with optimal performance tuning",
      ],
      technologies: [
        "FastAPI",
        "React",
        "PostgreSQL",
        "Azure Container Apps",
        "Docker",
        "Alembic",
      ],
      image: "/images/charcha-1.png",
      githubUrl: "https://github.com/Arundhuti2000/Python_SocialMedia",
      liveUrl:
        "https://ca-social-media.mangodesert-0d3ef58a.eastus.azurecontainerapps.io/docs",
    },
    {
      title: "Emporia | E-Commerce Platform",
      description:
        "Full-stack e-commerce platform featuring comprehensive multi-user workflows supporting Customer, Seller, and Admin roles. Built with modern web technologies and enterprise design patterns, the platform handles real-time cart synchronization, inventory management, and secure transaction processing with automatic rollback capabilities for data consistency.",
      features: [
        "Multi-role authentication system (Customer/Seller/Admin) with secure session management",
        "Real-time cart synchronization and inventory management across user sessions",
        "Transaction processing system with Command pattern and automatic rollback capabilities",
        "Repository pattern implementation with abstract interfaces for database-agnostic operations",
        "RESTful API architecture with comprehensive CRUD operations",
        "Responsive React TypeScript frontend with modern UI/UX design",
      ],
      technologies: ["Python", "Flask", "React", "TypeScript", "MySQL"],
      image: "/images/emporia.png",
      githubUrl: "https://github.com/Arundhuti2000/emporia",
    },
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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 text-white">
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
                      <h3 className="text-2xl text-blue-400 font-semibold">
                        {project.title}
                      </h3>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={24} />
                      </a>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-medium text-indigo-300">
                        Key Features:
                      </h4>
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-indigo-400 mr-2 mt-1">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-lg font-medium text-cyan-300 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-cyan-900/30 text-white-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && (
                        <div className="mt-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                          >
                            Live Demo <span className="ml-2">→</span>
                          </a>
                        </div>
                      )}
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
