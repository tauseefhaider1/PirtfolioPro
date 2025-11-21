import React from "react";

// Example skills images
import git from "./assets/gitpic.webp";
import html from "./assets/htmlp.png";
import css from "./assets/cssp.png";
import js from "./assets/jsp.png";
import reacts from "./assets/reacts.png";

// Example projects
const projects = [
  {
    name: "Quiz App",
    desc: "Quiz App",
    link: "https://quiz-two-orcin.vercel.app/",
    repo: "https://github.com/tauseefhaider1/quiz.git",
  },
  {
    name: "Crypto tracker",
    desc: " UI with React + Tailwind.",
    link: "https://crypto-opal-eight.vercel.app/",
    repo: "https://github.com/tauseefhaider1/crypto.git",
  },
  {
    name: "Chatus app",
    desc: "Indeed-level frontend job portal project.",
    link: "https://chatuis.vercel.app/",
    repo: "https://github.com/tauseefhaider1/chatuis.git",
  },
  {
    name: "Indeed Project",
    desc: "Indeed-level frontend job portal project.",
    link: "https://indeed-rjc2.vercel.app//",
    repo: "https://github.com/tauseefhaider1/indeed.git",
  },
   {
    name: "Todo Project",
    desc: "Crud app",
    link: "https://todo-efrj.vercel.app/",
    repo: "https://github.com/tauseefhaider1/todo.git",
  },
   {
    name: "Aljanat Mall Project",
    desc: "Ecommerce ui card",
    link: "https://aljanat.vercel.app/",
    repo: "https://github.com/tauseefhaider1/aljanat.git",
  },
     {
    name: "Pyari Walls Project",
    desc: "Ecommerce ui card Design",
    link: "https://pyari-walls-34in.vercel.app/",
    repo: "https://github.com/tauseefhaider1/Pyari-Walls.git",
  },
];

const skillsData = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: reacts },
  { name: "GitHub", img: git },
];

const SkillsPage = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">

      {/* 🔮 Animated background circles */}
      <div className="absolute w-[400px] h-[400px] bg-purple-300/30 rounded-full top-10 left-1/4 blur-3xl animate-float-slow" />
      <div className="absolute w-[300px] h-[300px] bg-pink-300/30 rounded-full top-40 right-1/4 blur-3xl animate-float-reverse" />

      {/* Section Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 fade-in">
        Skills & Projects
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto fade-in-delay">
        Technologies I work with and some of my latest projects.
      </p>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-8 relative z-10 mb-16">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/20 backdrop-blur-lg shadow-2xl p-6 rounded-3xl hover:shadow-purple-400/50 transition-transform hover-scale fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-3 hover-pulse"
            />
            <h5 className="text-gray-900 font-semibold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {skill.name}
            </h5>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 hover:shadow-pink-400/50 transition-transform hover-scale fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.desc}</p>
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition hover-scale"
              >
                Live
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-xl shadow hover:bg-blue-50 transition hover-scale"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;