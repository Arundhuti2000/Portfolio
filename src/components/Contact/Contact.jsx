import React from "react";
import FadeInSection from "../Utilities/FadeInSection";

const Contact = () => (
  <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-gray-800 border border-purple-400/20 rounded transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 border border-purple-400/20 rounded transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-gray-800 border border-purple-400/20 rounded h-32 transition-all duration-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            />
            <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default Contact;
