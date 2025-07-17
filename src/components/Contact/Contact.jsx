import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Contact = () => (
  <section
    id="contact"
    className="py-20 bg-gradient-to-b from-gray-950 to-black"
  >
    <div className="max-w-7xl mx-auto px-4">
      <FadeInSection>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 text-white">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-gray-800 border border-blue-400/20 rounded transition-all duration-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 border border-indigo-400/20 rounded transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-gray-800 border border-cyan-400/20 rounded h-32 transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default Contact;
