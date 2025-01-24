import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
          Professional Journey
        </h2>
      </FadeInSection>
      <div className="space-y-8">
        <FadeInSection>
          <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-400/20 hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-purple-400">
                  Custom Software Engineering Analyst
                </h3>
                <p className="text-gray-400">Accenture</p>
              </div>
              <p className="text-gray-500">May 2021 - Jul 2024</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
                Configured and monitored Azure Infrastructure using Azure DevOps
                and PaaS services
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
                Reduced deployment time by 30% through CI/CD implementation
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
                Managed 40+ Kubernetes applications with accurate results
              </li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-400/20 hover:bg-gray-800/70 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-purple-400">
                  Software Engineering Associate
                </h3>
                <p className="text-gray-400">Accenture</p>
              </div>
              <p className="text-gray-500">May 2021 - Jun 2022</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
                Led team of 5, completing project 20% ahead of schedule
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span>
                Created comprehensive technical documentation
              </li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default Experience;
