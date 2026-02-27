import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FadeInSection from "../Utilities/FadeInSection";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-medium">
                Connect
              </span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Have a project in mind or want to discuss cloud architecture? Send
              me a signal across the universe.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6 relative z-10"
              >
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-wider ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none text-white focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none text-white focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/40 uppercase tracking-wider ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl h-40 transition-all duration-300 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none text-white resize-none focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "sending"
                      ? "bg-white/10 text-white/50 cursor-not-allowed"
                      : "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02]"
                  }`}
                >
                  {status === "sending" ? "Transmitting..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 text-center text-sm font-medium animate-pulse">
                    Signal received successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center text-sm font-medium">
                    Transmission failed. Please retry.
                  </p>
                )}
              </form>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
