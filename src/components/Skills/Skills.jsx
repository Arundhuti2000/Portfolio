import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C#/.NET", logo: "/images/csharp.png" },
      { name: "Python", logo: "/images/python.png" },
      { name: "JavaScript", logo: "/images/javascript.png" },
      {
        name: "Golang",
        logo: "/images/353-3536792_go-golang-logo-png-removebg-preview.png",
      },
      { name: "HTML", logo: "/images/html.png" },
      { name: "CSS", logo: "/images/css.png" },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Azure", logo: "/images/azure.png" },
      { name: "AWS", logo: "/images/aws.png" },
      { name: "Kubernetes", logo: "/images/kubernetes.png" },
      { name: "Docker", logo: "/images/docker-logo-removebg-preview.png" },
      { name: "Azure DevOps", logo: "/images/devops.png" },
    ],
  },
  {
    title: "Data Analysis Tools",
    skills: [{ name: "Power BI", logo: "/images/powerbi.png" }],
  },
  {
    title: "Ticketing & Monitoring Tools",
    skills: [
      { name: "Service Now", logo: "/images/servicenow.png" },
      { name: "Datadog", logo: "/images/datadog.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", logo: "/images/mysql.png" },
      { name: "CassandraDB", logo: "/images/cassandra.png" },
    ],
  },
  {
    title: "Messaging & Streaming",
    skills: [
      { name: "RabbitMQ", logo: "/images/rabbitmq-removebg-preview.png" },
      { name: "Kafka", logo: "/images/kafka-removebg-preview.png" },
    ],
  },
];

// Create a deduplicated list of skills
const allSkills = Array.from(
  new Map(
    skillCategories.flatMap((category) =>
      category.skills.map((skill) => [skill.name, skill]),
    ),
  ).values(),
);

const Skills = () => (
  <section
    id="skills"
    className="py-24 bg-black text-white relative overflow-hidden"
  >
    {/* Ambient Glow */}
    <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <FadeInSection>
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
              Arsenal
            </span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">
            A curated stack of robust technologies powering scalable solutions.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
        {allSkills.map((skill, idx) => (
          <FadeInSection key={`skill-${skill.name}`} delay={idx * 50}>
            <div className="group relative w-32 h-32 md:w-36 md:h-36 perspective-1000">
              {/* Card Container */}
              <div className="w-full h-full bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-500 flex flex-col items-center justify-center p-6 cursor-default hover:shadow-[0_0_30px_-5px_rgba(100,100,255,0.1)] group-hover:-translate-y-2">
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

                <div className="relative z-10 h-12 w-12 md:h-14 md:w-14 mb-3 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                <span className="relative z-10 text-xs font-medium text-white/40 group-hover:text-white transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
