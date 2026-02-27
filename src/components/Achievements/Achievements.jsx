import FadeInSection from "../Utilities/FadeInSection";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import React from "react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Sparkling Star Award",
      issuer: "Accenture",
      date: "Jan 2023",
      description:
        "Awarded for exceptional performance in critical project delivery and demonstrating outstanding dedication.",
      image: "/images/accenture.png",
      link: null, // Add link if available
      color: "purple",
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      issuer: "Microsoft",
      date: "Issued 2024", // Verify date if possible or keep generic
      description:
        "Validation of skills in implementing, managing, and monitoring an organization's Microsoft Azure environment.",
      image: "/images/azure.png",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
      color: "blue",
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Issued 2023", // Verify date if possible or keep generic
      description:
        "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      image: "/images/azure.png",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
      color: "blue",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Achievements &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
                Certifications
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto md:mx-0" />
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 150}>
              <div className="group h-full relative bg-[#0a0a0a] hover:bg-[#111111] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    item.color === "purple"
                      ? "from-purple-500/5 to-transparent"
                      : "from-blue-500/5 to-transparent"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.image}
                        alt={item.issuer}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-cyan-200/80 font-medium mb-4">
                    <Award size={16} className="text-cyan-400" />
                    <span>{item.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{item.date}</span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div
                    className={`w-full h-1 rounded-full bg-gradient-to-r opacity-50 ${
                      item.color === "purple"
                        ? "from-purple-500/50 to-transparent"
                        : "from-blue-500/50 to-transparent"
                    }`}
                  />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
