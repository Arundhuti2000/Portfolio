"use client";

import { useState, useEffect } from "react";
import {
  Cloud,
  Server,
  GitBranch,
  Zap,
  Shield,
  Database,
  Github,
  Linkedin,
  FileText
} from "lucide-react";
import DynamicBackground from "../Utilities/DynamicBackground";

const RotatingRoles = () => {
  const roles = [
    { text: "DevOps Engineer", color: "text-blue-400" },
    { text: "Cloud Engineer", color: "text-cyan-400" },
    { text: "Azure Specialist", color: "text-blue-300" },
    { text: "Infrastructure Architect", color: "text-green-400" },
    { text: "Automation Expert", color: "text-purple-400" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-lg mb-6 flex items-center">
      <span className="text-white/40 mr-2">{`>`}</span>
      <span
        className={`transition-all duration-300 font-medium tracking-wide ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        } ${roles[currentIndex].color}`}
      >
        {roles[currentIndex].text}
      </span>
      <span className="animate-pulse text-white ml-1">_</span>
    </div>
  );
};

const AzureTerminal = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const commands = [
    "az login --service-principal",
    "✓ Successfully authenticated",
    "kubectl get pods --all-namespaces",
    "✓ All pods running healthy",
    "terraform plan -out=main.tfplan",
    "✓ Infrastructure changes planned",
    "az aks get-credentials --name prod-cluster",
    "✓ Kubernetes context updated",
    "docker build -t myapp:latest .",
    "✓ Container image built",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        setLines((prev) => [...prev, commands[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setLines([]);
          setCurrentLine(0);
        }, 2000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <div className="relative font-mono text-sm max-w-2xl mx-auto md:mx-0">
      {/* Glass Container */}
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl p-6 border border-white/10 shadow-[0_0_50px_-10px_rgba(59,130,246,0.15)] relative overflow-hidden group">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-500/20 transition-all duration-700" />
        
        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500/80 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 bg-yellow-500/80 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 bg-green-500/80 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
            <span className="text-white/40 text-xs ml-3 font-semibold tracking-wider uppercase">
              az-cli — interactive
            </span>
          </div>
          <span className="text-white/20 text-xs">bot@azure-cloud: ~</span>
        </div>
        
        <div className="space-y-3 min-h-[300px] font-mono text-xs md:text-sm">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === lines.length - 1
                  ? "opacity-100 translate-x-0"
                  : "opacity-60"
              }`}
            >
              {line.startsWith("✓") ? (
                <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">{line}</span>
              ) : (
                <div className="flex">
                  <span className="text-blue-400 mr-2">➜</span>
                  <span className="text-white/90">{line}</span>
                </div>
              )}
            </div>
          ))}
          <div className="animate-pulse flex items-center">
            <span className="text-blue-400 mr-2">➜</span>
            <span className="w-2 h-4 bg-white/50 block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Arundhati_Das_Resume.pdf";
    link.download = "Arundhati_Das_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-gradient-x">
                Cloud Future
              </span>
            </h1>
            
            <div className="flex flex-col items-center lg:items-start">
               <RotatingRoles />
            </div>

            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I architect scalable cloud infrastructure and build automated DevOps pipelines. 
              Turning complex problems into elegant, reliable solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
              >
                View Selected Work
              </a>
              <button
                onClick={handleDownloadResume}
                className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:border-white/20 hover:scale-105 flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6">
                <a
                  href="https://github.com/Arundhuti2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
                >
                  <Github className="w-6 h-6 text-white/70 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arundhatidas76/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
                >
                  <Linkedin className="w-6 h-6 text-white/70 hover:text-white" />
                </a>
                <a
                   href="https://learn.microsoft.com/api/credentials/share/en-us/DasArundhati-9201/89A4826F4D452E28?sharingId=6996CBF7339CD0F2"
                   target="_blank"
                   rel="noopener noreferrer" 
                   className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
                >
                  <Cloud className="w-6 h-6 text-white/70 hover:text-white" />
                </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 perspective-1000">
             <div className="relative transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                 <AzureTerminal />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;