import FadeInSection from "../Utilities/FadeInSection";
import { Calendar, MapPin, Briefcase, Zap, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import ChanelDeepDive from "./ChanelDeepDive";

const Experience = () => {
  const [showChanelDeepDive, setShowChanelDeepDive] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Software Engineering Analyst — Customer 360",
      company: "Accenture | Client: Chanel",
      duration: "Jul 2022 - Jul 2024",
      location: "Bangalore, India",
      type: "Full-time",
      color: "cyan",
      logo: "/images/accenture.png",
      hasDeepDive: true,
      points: [
        "Built distributed systems handling 10,000+ operations/hour across 5 regions with 95% uptime SLA",
        "Managed 50+ microservices on AKS with health checks and circuit breakers for zero-downtime deployments",
        "Implemented Azure Monitor & KQL dashboards reducing incident detection time by 60%",
        "Automated ETL pipelines via Azure Data Factory & Logic Apps, boosting efficiency by 20%",
        "Provisioned AKS clusters & networking via Terraform/ARM templates, cutting deployment time by 80%",
        "Optimized Azure DevOps CI/CD pipelines, reducing deployment time by 30% across 3 major releases",
        "Awarded Sparkling Star Award (Jan 2023) for exceptional performance in critical project delivery",
      ],
    },
    {
      id: 2,
      title: "Software Engineer Associate",
      company: "Accenture | Client: Loreal",
      duration: "May 2021 - Jun 2022",
      location: "Bengaluru, India",
      type: "Full-time",
      color: "indigo",
      logo: "/images/accenture.png",
      points: [
        "Automated Python scripts reduced report generation from 120 minutes to 1 minute",
        "Built Azure Event Hub pipeline processing 20,000+ events/hour for real-time analysis",
        "Led a team of 5, completing project 20% ahead of schedule via effective resource allocation",
        "Developed automated deployment pipelines for 100+ applications using Azure DevOps",
        "Authored detailed technical documentation and runbooks for operational procedures",
        "Resolved 50+ P1/P2 incidents via ServiceNow, reducing resolution time by 15%",
      ],
    },
    {
      id: 3,
      title: "Associate Consultant Intern",
      company: "Capgemini",
      duration: "Jan 2021 - Apr 2021",
      location: "Bangalore, India",
      type: "Internship",
      color: "blue",
      logo: "/images/capgemini.jpg",
      points: [
        "Built scalable E-Commerce website using .NET framework for final project",
        "Developed N-Tier architecture backend with .NET and MySQL for improved data retrieval",
        "Created E-commerce Windows application using .NET and WCF",
      ],
    },
    {
      id: 4,
      title: "Big Data Intern",
      company: "Celebal Technologies",
      duration: "May 2020 - Jul 2020",
      location: "Jaipur, India",
      type: "Internship",
      color: "purple",
      logo: "/images/celebal.jpeg",
      points: [
        "Developed ETL data pipelines using Azure Data Factory and Logic Apps",
        "Created KQL queries in Azure AppInsights for data monitoring and visualization",
        "Improved data processing efficiency through automated dataflow solutions",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
                Journey
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>
        </FadeInSection>

        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <FadeInSection key={exp.id} delay={index * 100}>
              <div className="relative pl-8 md:pl-16">
                {/* Timeline Dot */}
                <div
                  className={`absolute top-0 left-[-5px] md:left-[-6px] w-2.5 h-2.5 md:w-3 md:h-3 bg-black border-2 rounded-full z-20 transition-all duration-300 ${
                    index === 0
                      ? "border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-125"
                      : "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  }`}
                />

                {/* Horizontal Connector */}
                {/* <div className="absolute top-1.5 left-0 w-8 md:w-16 h-[1px] bg-white/10" /> */}

                <div
                  className={`group relative bg-[#0a0a0a] hover:bg-[#111111] border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    index === 0
                      ? "border-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                      index === 0
                        ? "from-cyan-500/10 to-blue-500/10"
                        : "from-purple-500/5 to-blue-500/5"
                    }`}
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Logo - Added here */}
                      {exp.logo && (
                        <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shrink-0 shadow-lg">
                           <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-2xl font-semibold mb-2 transition-colors ${
                            index === 0
                              ? "text-cyan-50 group-hover:text-cyan-300"
                              : "text-white group-hover:text-purple-300"
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <div
                          className={`text-lg font-medium ${
                            index === 0 ? "text-cyan-200/80" : "text-white/60"
                          }`}
                        >
                          {exp.company}
                        </div>

                        {exp.hasDeepDive && (
                          <button
                            onClick={() => setShowChanelDeepDive(true)}
                            className="mt-4 flex items-center gap-2 group/btn px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-300 hover:text-white hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                          >
                            <Zap
                              size={16}
                              className="text-cyan-400 group-hover/btn:text-yellow-300 transition-colors"
                            />
                            <span>View Project Architecture</span>
                            <ArrowRight
                              size={16}
                              className="group-hover/btn:translate-x-1 transition-transform"
                            />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-start md:items-end text-sm text-white/40 ml-16 md:ml-0">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <Calendar
                          size={14}
                          className={index === 0 ? "text-cyan-400" : ""}
                        />
                        <span className={index === 0 ? "text-cyan-100" : ""}>
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <MapPin
                          size={14}
                          className={index === 0 ? "text-cyan-400" : ""}
                        />
                        <span className={index === 0 ? "text-cyan-100" : ""}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 relative z-10 ml-0 md:ml-16">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 text-sm md:text-base leading-relaxed transition-colors ${
                          index === 0
                            ? "text-cyan-50/80 group-hover:text-cyan-50"
                            : "text-white/70 group-hover:text-white/80"
                        }`}
                      >
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                            index === 0
                              ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                              : "bg-purple-500/50"
                          }`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      <ChanelDeepDive
        isOpen={showChanelDeepDive}
        onClose={() => setShowChanelDeepDive(false)}
      />
    </section>
  );
};

export default Experience;
