import React, { useState } from "react";
import FadeInSection from "../Utilities/FadeInSection";
import {
  BookOpen,
  Code,
  Palette,
  Gamepad2,
  Instagram,
  ExternalLink,
  Cpu,
  Heart,
  Cloud,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "The Story", icon: BookOpen },
    { id: "tech", label: "The Coder", icon: Code },
    { id: "art", label: "The Artist", icon: Palette },
    { id: "gamer", label: "The Gamer", icon: Gamepad2 },
  ];

  // Placeholder data for art images (You can replace these with your actual images)
  const artImages = [
    "/images/art1.jpg",
    "/images/art2.jpg",
    "/images/art3.jpg",
    "/images/art4.jpg",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#050505] text-white relative min-h-screen flex flex-col items-center"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl wx-auto px-6 relative z-10 w-full">
        <FadeInSection>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Behind the{" "}
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Persona
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto" />
          </div>
        </FadeInSection>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "bg-transparent border-white/5 text-white/40 hover:text-white hover:border-white/10"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {/* STORY TAB */}
          {activeTab === "story" && (
            <FadeInSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                  <p>
                    I’ve never been satisfied with just "using" things. Whether
                    it was a video game, a piece of software, or a philosophical
                    concept, I needed to know the mechanism behind it. I’m the
                    kind of person who dissects the plot of a movie while
                    watching it, or wonders about the physics engine when a game
                    glitches.
                  </p>
                  <p>
                    That obsession with the "why" and "how" is what pushed me
                    into engineering. It started with simple curiosity and
                    evolved into a career building scalable systems. At
                    Accenture, I learned the discipline of enterprise cloud
                    architecture. Dealing with clusters and pipelines gave me a
                    solid foundation in scale, but I found myself more
                    interested in the application logic itself. The goal now is
                    to be the one designing the system's internal behavior, not
                    just the environment it runs in.
                  </p>
                  <p>
                    Right now, I'm at UMass Dartmouth, bridging that gap. I'm
                    moving deeper into backend development because, for me, code
                    is about solving problems at their root, not just patching
                    them. If you're looking for someone who questions
                    assumptions and digs until they find the real solution,
                    you're in the right place.
                  </p>
                  <div className="pt-4">
                    <p className="text-sm text-white/40 italic">
                      "We work in the dark to serve the light."
                    </p>
                  </div>
                </div>
                <div className="relative">
                  {/* Add a personal photo here if you have one, or a stylistic abstract image */}
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    {/* Placeholder for personal image */}
                    <div className="w-full h-full flex items-center justify-center text-white/20 bg-neutral-900">
                      [Your Photo Here]
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-[-20px] right-[-20px] w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                  <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                </div>
              </div>
            </FadeInSection>
          )}

          {/* TECH TAB */}
          {activeTab === "tech" && (
            <FadeInSection>
              <div className="max-w-3xl mx-auto">
                <p className="text-center text-gray-300 mb-12 text-lg font-light">
                  My technical evolution has been a series of "Side Quests" that
                  turned into main proficiency.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "The Foundation",
                      desc: "B.Tech in CS. The rigorous grinding of algorithms and data structures.",
                      icon: Code,
                      color: "text-blue-400",
                    },
                    {
                      title: "The Cloud Era",
                      desc: "Accenture & Celebal. Where I learned that 'it works on my machine' is not a valid excuse.",
                      icon: Cloud,
                      color: "text-purple-400",
                    },
                    {
                      title: "The Next Level",
                      desc: "Backend Development & System Design. Moving from maintaining systems to architecting them.",
                      icon: Cpu,
                      color: "text-amber-400",
                    },
                    {
                      title: "Current Quest",
                      desc: "Masters in CS @ UMass Dartmouth. Specializing in Scalable Systems.",
                      icon: ExternalLink,
                      color: "text-green-400",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-1 p-2 rounded-lg bg-white/5 ${item.color}`}
                        >
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          )}

          {/* ART TAB */}
          {activeTab === "art" && (
            <FadeInSection>
              <div className="flex flex-col items-center">
                <div className="text-center max-w-2xl mb-12">
                  <p className="text-gray-300 text-lg font-light mb-6">
                    Writing and painting are my escapes. While code is about
                    logic and structure, art is where I let chaos breathe. I
                    explore different mediums, but my heart lies in capturing
                    emotions that words sometimes fail to express.
                  </p>
                  <a
                    href="https://www.instagram.com/artytrails16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={18} />
                    Follow @artytrails16
                  </a>
                </div>

                {/* Art Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {artImages.map((img, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-white/30 transition-all"
                    >
                      <img
                        src={img}
                        alt={`My Art ${index + 1}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Heart className="text-white fill-white" size={24} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          )}

          {/* GAMER TAB */}
          {activeTab === "gamer" && (
            <FadeInSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative inline-block mb-8">
                  <Gamepad2
                    size={48}
                    className="text-purple-400 mx-auto mb-4"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl -z-10" />
                </div>

                <h3 className="text-2xl font-light text-white mb-6">
                  "Nothing is true, everything is permitted."
                </h3>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Gaming is where my love for history meets technology. I'm
                  currently developing an **NPC-powered historical RPG** in
                  Unreal Engine 5. Inspired by *Assassin's Creed Discovery
                  Tours*, the project is an experiment in using game mechanics
                  to teach history-turning static dates and facts into a
                  playable, interactive world.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                  {[
                    { title: "Favorite Genre", val: "RPG / Action-Adventure" },
                    { title: "Current obsession", val: "Unreal Engine 5" },
                    {
                      title: "All-time Favorite",
                      val: "Assassin's Creed Origins",
                    },
                    {
                      title: "Reading",
                      val: "Sci-Fi / Thrillers (Agatha Christie)",
                    },
                    { title: "Collecting", val: "Game Art books" },
                    {
                      title: "Watching",
                      val: "Anime (Shonen/Seinen) Specially One Piece",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-4 rounded-lg border border-white/5"
                    >
                      <div className="text-xs text-white/40 uppercase tracking-widest mb-1">
                        {stat.title}
                      </div>
                      <div className="text-white font-medium">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
