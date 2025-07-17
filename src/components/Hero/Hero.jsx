"use client"

import { useState, useEffect } from "react"
import { Cloud, Server, GitBranch, Zap, Shield, Database, Github, Linkedin } from "lucide-react"
import DynamicBackground from "../Utilities/DynamicBackground"



const RotatingRoles = () => {
  const roles = [
    { text: "DevOps Engineer", color: "text-blue-400" },
    { text: "Cloud Engineer", color: "text-cyan-400" },
    { text: "Azure Specialist", color: "text-blue-300" },
    { text: "Infrastructure Architect", color: "text-green-400" },
    { text: "Automation Expert", color: "text-purple-400" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-lg mb-6">
      <span className="text-gray-400">$</span>
      <span className="text-white ml-2">whoami</span>
      <span className="text-gray-400 mx-2">|</span>
      <span
        className={`transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        } ${roles[currentIndex].color}`}
      >
        {roles[currentIndex].text}
      </span>
      <span className="animate-pulse text-white">_</span>
    </div>
  )
}

const AzureTerminal = () => {
  const [lines, setLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)

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
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < commands.length) {
        setLines((prev) => [...prev, commands[currentLine]])
        setCurrentLine((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setLines([])
          setCurrentLine(0)
        }, 2000)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLine])

  return (
    <div className="bg-black/95 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-2">Azure DevOps Terminal</span>
      </div>
      <div className="font-mono text-sm space-y-2 min-h-[300px]">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              line.startsWith("✓")
                ? "text-green-400"
                : line.startsWith("az") ||
                    line.startsWith("kubectl") ||
                    line.startsWith("terraform") ||
                    line.startsWith("docker") ||
                    line.startsWith("helm")
                  ? "text-blue-400"
                  : "text-gray-300"
            }`}
          >
            {line.startsWith("✓") ? (
              <span className="flex items-center gap-2">
                <span>✓</span>
                <span>{line.substring(2)}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="text-gray-500">$</span>
                <span>{line}</span>
              </span>
            )}
          </div>
        ))}
        <div className="text-blue-400 animate-pulse">{currentLine < commands.length ? "█" : ""}</div>
      </div>
    </div>
  )
}

const FloatingIcons = () => {
  const icons = [
    { Icon: Cloud, delay: 0, duration: 6 },
    { Icon: Server, delay: 1, duration: 8 },
    { Icon: GitBranch, delay: 2, duration: 7 },
    { Icon: Zap, delay: 3, duration: 5 },
    { Icon: Shield, delay: 4, duration: 9 },
    { Icon: Database, delay: 5, duration: 6 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {icons.map(({ Icon, delay, duration }, index) => (
        <Icon
          key={index}
          className={`absolute text-blue-400/10 w-8 h-8 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  )
}

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return <span>{displayText}</span>
}

const handleDownloadResume = () => {
  // Optional: Track download with analytics
  // gtag('event', 'download', { file_name: 'resume' });
  
  // Create download link
  const link = document.createElement('a');
  link.href = '/resume/Arundhati_Das_Resume.pdf';
  link.download = 'Arundhati_Das_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


export default function Hero() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-[100px]">
      <DynamicBackground />
      <FloatingIcons />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div
          className={`transform transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Available for DevOps opportunities</span>
              </div>

              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-gray-400 text-lg">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <div className="text-gray-100 mb-2">
                    <TypewriterText text="Arundhati" delay={150} />
                  </div>
                  <div className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    Das
                  </div>
                </h1>
              </div>

              {/* Rotating Roles */}
              <RotatingRoles />

              {/* Description */}
              <div className="space-y-4">
                <p className="text-xl text-gray-200 leading-relaxed">
                  Architecting scalable cloud infrastructure and automating deployment pipelines on{" "}
                  <span className="text-blue-300 font-semibold">Microsoft Azure</span>
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about containerization, Kubernetes orchestration, and implementing robust CI/CD workflows
                  that enable teams to ship faster and more reliably.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {[
                  "Azure DevOps",
                  "Kubernetes",
                  "Docker",
                  "Terraform",
                  "ARM Templates",
                  "Azure Functions",
                  "Helm",
                  "Ansible",
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className="bg-gray-800/80 border border-gray-600/50 px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-gray-700/80 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={() => {
                    document.getElementById("experience")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }}
                >
                  View My Work
                </button>
                <button 
                  className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Arundhuti2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/90 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-700/50"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://learn.microsoft.com/en-us/users/dasarundhati-9201/credentials/6683f1b87cbaa959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/90 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-700/50"
                >
                  <Cloud className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/arundhati76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-gray-700/50"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077B5')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(31, 41, 55, 0.9)')} // bg-gray-800/90
                  >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Right Column - Terminal */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <AzureTerminal />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
