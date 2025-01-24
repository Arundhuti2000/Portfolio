import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Skills = () => (
  <section id="skills" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
          Skills
        </h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Cloud & DevOps", skills: ["Azure", "Kubernetes", "AWS"] },
          { title: "Programming", skills: ["Python", "JavaScript", "C#"] },
          { title: "Data & Analytics", skills: ["SQL", "Power BI", "ETL"] },
        ].map((category, index) => (
          <FadeInSection key={index} delay={index * 200}>
            <div className="p-6 bg-gray-800/50 rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
