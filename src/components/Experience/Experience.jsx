import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Experience = () => (
  <section
    id="experience"
    className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-gray-950 to-black"
  >
    <div className="max-w-7xl mx-auto px-4">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-16 text-white-400 ">
          Professional Journey
        </h2>
      </FadeInSection>
      <div className="space-y-12">
        <FadeInSection>
          <div className="bg-gray-900/80 rounded-lg border-l-4 border-purple-500 overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Software Engineering Analyst
                  </h3>
                  <p className="text-purple-400 mt-1">Accenture</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400">Jun 2022 - Jul 2024</p>
                  <p className="text-gray-500">Bengaluru, India</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl text-gray-300 mb-4">
                  Database Migration Tool
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Architected RESTful API using Data Movement Library, React
                      & .NET for multi-terabyte database transfers
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Developed intuitive file management interface and
                      real-time dashboard streamlining data operations
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Built API using Azure Data Movement Library for storage
                      migration, reducing annual storage costs by $60K
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl text-gray-300 mb-4">
                  Cloud Infrastructure Management
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Developed and managed CI/CD pipelines in Azure DevOps,
                      cutting deployment time by 30%
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Implemented ETL pipelines (ADF, Logic Apps) to improve
                      data efficiency by 20%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="bg-gray-900/80 rounded-lg border-l-4 border-purple-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Software Engineer Associate
                  </h3>
                  <p className="text-purple-400 mt-1">Accenture</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400">May 2021 - Jun 2022</p>
                  <p className="text-gray-500">Bengaluru, India</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl text-gray-300 mb-4">
                  Enterprise Application Platform
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Consolidated multiple apps into single .NET & React
                      webapp, reducing maintenance costs by 35%
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Built React UI with memoization optimization, reducing
                      load times by 30%
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Integrated Apache Kafka with Azure Events Hubs for
                      real-time data ingestion, handling 20,000 messages/sec
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl text-gray-300 mb-4">Team Leadership</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Led team of 5, completing project 20% ahead of schedule
                      while mentoring new hires for seamless onboarding
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span>
                      Created comprehensive technical documentation and Azure
                      Dashboards for timely insights
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
);

export default Experience;
