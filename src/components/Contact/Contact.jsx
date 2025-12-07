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
        }
      );
  };

  return (
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
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full p-2 bg-gray-800 border border-blue-400/20 rounded transition-all duration-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full p-2 bg-gray-800 border border-indigo-400/20 rounded transition-all duration-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full p-2 bg-gray-800 border border-cyan-400/20 rounded h-32 transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-2 rounded transition-colors duration-300 text-white ${
                  status === "sending"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center mt-2">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
