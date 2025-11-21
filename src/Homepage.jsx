import pic from './assets/pic.jpeg';
import Navbar from './Navbar';

export default function Homepage({ skillsRef, contactRef }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-purple-100">

        {/* 🔮 Moving Light Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-300 rounded-full blur-[180px] top-20 left-1/2 -translate-x-1/2 opacity-50" />

        {/* ⭐ Floating Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-lg animate-float-slow"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Profile Image */}
        <img
          src={pic}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover shadow-2xl border-[6px] border-white ring-4 ring-purple-300/60 mb-6 scale-in"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight fade-in">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Tauseef Haider
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mt-2 tracking-wide fade-in-delay">
          Frontend Developer
        </p>

        {/* Description */}
        <p className="max-w-xl text-gray-600 mt-4 fade-in-delay-2">
          Crafting modern, animated, and premium-quality web experiences  
          with React, Tailwind, and clean UI design.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-8 fade-in-delay-3">
          {/* Get in Touch Button */}
          <button
            className="flex items-center gap-2 border-2 border-purple-400 text-purple-700 px-7 py-3 rounded-xl bg-white/70 backdrop-blur-lg shadow-md font-semibold text-lg hover:bg-purple-50 transition-all duration-300 hover-scale"
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}