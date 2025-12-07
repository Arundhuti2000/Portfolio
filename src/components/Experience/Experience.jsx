import FadeInSection from "../Utilities/FadeInSection";

const Experience = () => {
  const experiences = [
    {
      id: 4,
      title: "Big Data Intern",
      company: "Celebal Technologies",
      duration: "May 2020 - Jul 2020",
      location: "Jaipur, India",
      color: "purple",
      points: [
        "Developed ETL data pipelines using Azure Data Factory and Logic Apps",
        "Created KQL queries in Azure AppInsights for data monitoring and visualization",
        "Improved data processing efficiency through automated dataflow solutions",
      ],
    },
    {
      id: 3,
      title: "Associate Consultant Intern",
      company: "Capgemini",
      duration: "Jan 2021 - Apr 2021",
      location: "Bangalore, India",
      color: "blue",
      points: [
        "Built scalable E-Commerce website using .NET framework for final project",
        "Developed N-Tier architecture backend with .NET and MySQL for improved data retrieval",
        "Created E-commerce Windows application using .NET and WCF",
      ],
    },
    {
      id: 2,
      title: "Software Engineer Associate",
      company: "Accenture | Client: Loreal",
      duration: "May 2021 - Jun 2022",
      location: "Bengaluru, India",
      color: "indigo",
      points: [
        "Automated Python scripts reduced report generation from 120 minutes to 1 minute",
        "Built Azure Event Hub pipeline processing 20,000+ events/hour for real-time analysis",
        "Collaborated in agile teams on customer-facing features and code reviews",
      ],
    },
    {
      id: 1,
      title: "Software Engineering Analyst",
      company: "Accenture | Client: Chanel",
      duration: "May 2021 - Jul 2024",
      location: "Bangalore, India",
      color: "cyan",
      points: [
        "Built distributed systems handling 10,000+ operations/hour with 95% uptime SLA",
        "Managed 50+ containerized microservices on Azure Kubernetes with zero-downtime deployments",
        "Implemented monitoring dashboards and automated infrastructure reducing deployment time by 80%",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        border: "border-purple-500",
        text: "text-purple-400",
        hover: "hover:border-purple-500 hover:shadow-purple-500/20",
        logo: "border-purple-500",
      },
      blue: {
        border: "border-blue-500",
        text: "text-blue-400",
        hover: "hover:border-blue-500 hover:shadow-blue-500/20",
        logo: "border-blue-500",
      },
      indigo: {
        border: "border-indigo-500",
        text: "text-indigo-400",
        hover: "hover:border-indigo-500 hover:shadow-indigo-500/20",
        logo: "border-indigo-500",
      },
      cyan: {
        border: "border-cyan-500",
        text: "text-cyan-400",
        hover: "hover:border-cyan-500 hover:shadow-cyan-500/20",
        logo: "border-cyan-500",
      },
    };
    return colorMap[color] || colorMap.purple;
  };
  const getLogoPath = (company) => {
    if (company.includes("Celebal")) return "/images/celebal.jpeg";
    if (company.includes("Capgemini")) return "/images/capgemini.jpg";
    if (company.includes("Accenture")) return "/images/accenture.png";
    return "/images/logos/default.png"; // fallback
  };
  return (
    <section
      id="experience"
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        <FadeInSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 text-white">
            Professional Journey
          </h2>
        </FadeInSection>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Container with proper height to accommodate cards */}
          <div className="relative h-[800px]">
            {/* Year markers with dots */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center z-20">
              <span className="text-white font-semibold text-lg mr-3">
                2020
              </span>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center z-20">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
              <span className="text-white font-semibold text-lg">2024</span>
            </div>

            {/* Main Timeline Line - from purple dot to blue dot */}
            <div
              className="absolute top-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-indigo-500 to-cyan-500 transform -translate-y-1/2 z-0"
              style={{ left: "54px", right: "54px" }}
            ></div>

            {/* Timeline Items Grid */}
            <div className="grid grid-cols-4 gap-4 w-full h-full relative">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                const isEven = index % 2 === 0; // Determines if card is above or below

                return (
                  <FadeInSection key={exp.id} delay={index * 100}>
                    <div className="relative h-full flex flex-col items-center justify-center">
                      {/* Content Card positioned above or below timeline */}
                      <div
                        className={`absolute w-full max-w-[350px] bg-gray-900/90 rounded-lg border ${
                          colors.border
                        }/30 p-6 ${
                          colors.hover
                        } hover:shadow-lg transition-all duration-300 ${
                          isEven ? "bottom-1/2 mb-16" : "top-1/2 mt-16"
                        }`}
                      >
                        <div className="text-center mb-3">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className={`${colors.text} font-semibold text-sm`}>
                            {exp.company}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {exp.duration}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {exp.location}
                          </p>
                        </div>

                        <ul className="space-y-1 text-xs">
                          {exp.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start text-gray-300"
                            >
                              <span
                                className={`${colors.text} mr-1 mt-1 text-xs`}
                              >
                                •
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Vertical Connector Line */}
                      <div
                        className={`absolute w-0.5 bg-gray-600 left-1/2 transform -translate-x-1/2 ${
                          isEven ? "bottom-1/2 h-16" : "top-1/2 h-16"
                        }`}
                      ></div>

                      {/* Company Logo (centered on the main timeline line) */}
                      <div
                        className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg ${colors.logo} border-2 z-20 top-1/2 transform -translate-y-1/2`}
                      >
                        <img
                          src={getLogoPath(exp.company)}
                          alt={`${exp.company} Logo`}
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);

            return (
              <FadeInSection key={exp.id} delay={index * 100}>
                <div className="flex items-start space-x-4">
                  {/* Company Logo */}
                  <div
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center ${colors.logo} border-2 flex-shrink-0`}
                  >
                    <img
                      src={getLogoPath(exp.company)}
                      alt={`${exp.company} Logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-gray-900/90 rounded-lg border ${colors.border}/30 p-4 flex-1`}
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className={`${colors.text} font-semibold text-sm`}>
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs">{exp.duration}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                    </div>

                    <ul className="space-y-1 text-xs">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start text-gray-300"
                        >
                          <span className={`${colors.text} mr-1 mt-1 text-xs`}>
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connection Line */}
                {index < experiences.length - 1 && (
                  <div className="ml-6 w-0.5 h-4 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                )}
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
