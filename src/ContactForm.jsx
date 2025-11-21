import React from "react";

// Floating Balloon Component
const FloatingBalloon = ({ delay, left }) => (
  <div
    className="absolute balloon-float"
    style={{ 
      animationDelay: `${delay}s`,
      left: left
    }}
  >
    <div className="w-10 h-14 bg-pink-400 rounded-t-full shadow-lg relative">
      <div className="w-3 h-3 bg-white absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"></div>
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-purple-50 via-white to-indigo-50">

      {/* Soft Glowing Circles */}
      <div className="absolute w-[500px] h-[500px] bg-purple-300/40 rounded-full top-20 left-1/4 blur-3xl animate-float-slow" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300/30 rounded-full top-40 right-1/4 blur-3xl animate-float-reverse" />

      {/* Floating Balloons */}
      <FloatingBalloon delay={0} left="10%" />
      <FloatingBalloon delay={3} left="30%" />
      <FloatingBalloon delay={1.5} left="55%" />
      <FloatingBalloon delay={4} left="75%" />

      {/* Glassmorphic Contact Form Card */}
      <div className="backdrop-blur-xl bg-white/20 p-14 rounded-3xl shadow-2xl w-[90%] max-w-lg border border-white/40 text-center scale-in">
        <h2 className="text-5xl font-bold text-gray-900 drop-shadow-lg mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          I'm open to new opportunities and collaborations. Fill the form below and I'll get back to you via email.
        </p>

        {/* Formspree Form */}
        <form
          action="https://formspree.io/f/mgvdaqez"
          method="POST"
          className="space-y-5"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full py-3 px-5 bg-white/30 border border-gray-300/40 text-gray-900 placeholder-gray-700 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full py-3 px-5 bg-white/30 border border-gray-300/40 text-gray-900 placeholder-gray-700 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full py-3 px-5 bg-white/30 border border-gray-300/40 text-gray-900 placeholder-gray-700 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-xl transition hover-scale"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;