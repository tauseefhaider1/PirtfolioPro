import React from "react";
import sec from "./assets/sec.png";

const AboutMe = () => {
  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-[#f6f9ff] to-[#eef2ff] flex flex-col items-center overflow-hidden">

      {/* 🔮 Soft glowing background circle */}
      <div className="absolute w-[500px] h-[500px] bg-purple-300/40 rounded-full top-0 left-1/2 -translate-x-1/2 blur-3xl animate-float" />

      {/* 🌟 Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/70 rounded-full shadow-lg animate-float-slow"
          style={{ 
            animationDelay: `${i * 0.5}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 fade-in">
        About Me
      </h1>

      <p className="text-gray-600 text-lg mb-10 text-center max-w-xl fade-in-delay">
        Frontend developer passionate about creating beautiful web experiences
      </p>

      {/* Content Wrapper */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 px-6">

        {/* Left Image Box */}
        <div className="w-full md:w-1/2 flex justify-center slide-in-left">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/30 bg-white/20 p-2 backdrop-blur-lg hover-scale">
            <img
              src={sec}
              alt="Profile"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* Right Text Box */}
        <div className="w-full md:w-1/2 slide-in-right">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Frontend Developer
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Hi, I'm <span className="font-bold text-purple-600">Tauseef Haider</span>, a dedicated frontend developer specializing in
            creating stunning, user-friendly web applications using React,
            JavaScript, and modern CSS. <br />
            <br />
            I love crafting pixel-perfect interfaces and ensuring seamless user
            experiences across all devices. Always learning and exploring new
            technologies.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Frontend", desc: "React, JavaScript" },
              { title: "Styling", desc: "Tailwind CSS" },
              { title: "Tools", desc: "Vite, Git" },
              { title: "Design", desc: "Figma, UI/UX" },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-5 bg-white/40 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 hover-scale"
              >
                <h6 className="font-semibold text-gray-900">{skill.title}</h6>
                <p className="text-gray-700 mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;