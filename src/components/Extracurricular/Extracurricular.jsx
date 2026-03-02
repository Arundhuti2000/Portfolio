import FadeInSection from "../Utilities/FadeInSection";
import { Leaf, Heart, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 mt-6 rounded-lg overflow-hidden group/carousel">
      <div
        className="w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Extracurricular = () => {
  const activities = [
    {
      id: 1,
      title: "Beach Cleanup & Conservation",
      organization: "Volunteer | USA",
      date: "2024",
      description:
        "Participated in local beach cleanup drives to preserve coastal ecosystems and reduce plastic pollution. Collaborated with community members to remove waste and raise awareness about environmental sustainability.",
      icon: Leaf,
      color: "from-green-400 to-emerald-600",
      images: ["/images/BeachCleanup-1.jpeg", "/images/BeachCleanup-2.jpeg"],
    },
    {
      id: 2,
      title: "Community Service",
      organization: "Volunteer",
      date: "2025",
      description:
        "Engaged in various community service initiatives, supporting local shelters and food banks. Focused on giving back to the community and helping those in need. Led holiday card making sessions for dining service and facilities staff to spread joy.",
      icon: Heart,
      color: "from-red-400 to-pink-600",
      images: [
        "/images/ChristmasCard-1.jpeg",
        "/images/ChristmasCard-2.jpeg",
        "/images/ChristmasCard-3.jpeg",
      ],
    },
    // Add more activities as needed, e.g. Tech Club, Hackathon mentoring etc.
    // {
    //     id: 3,
    //     title: "Technical Mentorship",
    //     organization: "Tech Club",
    //     date: "2023",
    //     description: "Mentored junior students in web development and cloud technologies.",
    //     icon: Monitor,
    //     color: "from-blue-400 to-cyan-600"
    // }
  ];

  return (
    <section
      id="extracurricular"
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Beyond the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-medium">
                Code
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
            <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              My commitment to sustainability, community service, and personal
              growth outside of my technical career.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <FadeInSection key={activity.id} delay={index * 150}>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none ${activity.color.replace("from-", "from-").replace("to-", "to-").split(" ")[0]}/5 ${activity.color.split(" ")[2]}/5`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} p-3 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-white/50">
                        {activity.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                      {activity.title}
                    </h3>

                    <div className="text-sm font-medium text-white/40 mb-4 uppercase tracking-wider">
                      {activity.organization}
                    </div>

                    <p className="text-white/60 leading-relaxed text-base flex-grow">
                      {activity.description}
                    </p>

                    {activity.images && activity.images.length > 0 && (
                      <ImageCarousel images={activity.images} />
                    )}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
