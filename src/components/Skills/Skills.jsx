import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C#/.NET", logo: "/images/csharp.png" },
      { name: "Python", logo: "/images/python.png" },
      { name: "JavaScript", logo: "/images/javascript.png" },
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
];

// Create a deduplicated list of skills
const allSkills = Array.from(
  new Map(
    skillCategories.flatMap((category) =>
      category.skills.map((skill) => [skill.name, skill])
    )
  ).values()
);

const Skills = () => (
  <section
    id="skills"
    className="h-full bg-gradient-to-b from-gray-950 to-black py-20 md:py-28 lg:py-36"
  >
    <div className="max-w-7xl mx-auto px-10">
      <FadeInSection>
        <h2 className="mb-16 text-center font-bold uppercase max-sm:text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient-white">
          Skills
        </h2>
      </FadeInSection>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-11 items-center justify-items-center">
        {allSkills.map((skill, idx) => (
          <FadeInSection key={`skill-${skill.name}`}>
            <div className="bg-gray-900/80 bg-opacity-70 w-32 h-32 rounded-lg flex flex-col items-center justify-center border border-gray-800 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="h-20 w-20 flex items-center justify-center">
                <img
                  src={skill.logo}
                  // alt={skill.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* <p className="text-center text-sm font-medium text-gray-300">
                  {skill.name}
                </p> */}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
