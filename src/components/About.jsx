import React, { useState } from "react";
import {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiDjango, SiMongodb, SiMysql, SiSqlite, SiTailwindcss, SiJavascript,
  SiExpress, SiNetlify, SiC, SiCplusplus,
} from "react-icons/si";
import { DiPython } from "react-icons/di";
import { HiBriefcase, HiChip, HiCode } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const skillCategories = [
  {
    label: "Languages",
    icon: <HiCode />,
    color: "violet",
    skills: [
      { icon: <DiPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiC />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
    ],
  },
  {
    label: "Frontend",
    icon: <FaReact />,
    color: "cyan",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaReact />, name: "React" },
    ],
  },
  {
    label: "Backend",
    icon: <FaNodeJs />,
    color: "green",
    skills: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
    ],
  },
  {
    label: "Database",
    icon: <SiMongodb />,
    color: "orange",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiSqlite />, name: "SQLite" },
    ],
  },
  {
    label: "Tools & DevOps",
    icon: <FaDocker />,
    color: "pink",
    skills: [
      { icon: <FaDocker />, name: "Docker" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <SiNetlify />, name: "Netlify" },
    ],
  },
];

const colorMap = {
  violet: {
    badge: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    icon: "text-violet-400",
    hover: "hover:border-violet-400/50 hover:bg-violet-500/10",
  },
  cyan: {
    badge: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    icon: "text-cyan-400",
    hover: "hover:border-cyan-400/50 hover:bg-cyan-500/10",
  },
  green: {
    badge: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    icon: "text-emerald-400",
    hover: "hover:border-emerald-400/50 hover:bg-emerald-500/10",
  },
  orange: {
    badge: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    icon: "text-orange-400",
    hover: "hover:border-orange-400/50 hover:bg-orange-500/10",
  },
  pink: {
    badge: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    icon: "text-pink-400",
    hover: "hover:border-pink-400/50 hover:bg-pink-500/10",
  },
};

const Experiences = [
  {
    Jobrole: "Social Media Executive",
    Company: "Dilan Jewels",
    Duration: "Apr 2024 – Apr 2025",
    Location: "Noida, India",
    Description:
      "Managed and optimized brand presence on Instagram and Facebook by creating, scheduling, and analyzing content. Used engagement metrics and basic analytics to improve reach, audience interaction, and understand user behavior and digital trends.",
  },
];

const Skill = ({ icon, name, color }) => {
  const c = colorMap[color] || colorMap.violet;
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 bg-white/3 border border-white/8 rounded-lg
                  ${c.hover} transition-all duration-200 cursor-default group`}
    >
      <span className={`text-lg ${c.icon} group-hover:scale-110 transition-transform`}>{icon}</span>
      <span className="text-sm text-gray-300 font-medium">{name}</span>
    </div>
  );
};

function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#020208] text-white overflow-hidden">
      {/* Faint background orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
      />

      <section className="relative max-w-5xl mx-auto px-6 py-28">

        {/* ── Page Title ── */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-violet-400 mb-3">About Me</p>
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">Skills & Experience</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            A quick snapshot of my technical toolkit and professional journey so far.
          </p>
        </div>

        {/* ── Skills ── */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-8 rounded-lg btn-glow flex items-center justify-center">
              <HiChip className="text-white text-sm" />
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">What I Know</p>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => {
              const c = colorMap[cat.color];
              return (
                <div
                  key={cat.label}
                  className="glass rounded-2xl p-6 border border-white/8 glass-hover"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-7 h-7 rounded-md flex items-center justify-center text-sm border ${c.badge}`}>
                      {cat.icon}
                    </span>
                    <h3 className={`font-semibold text-sm ${c.icon}`}>{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <Skill key={s.name} icon={s.icon} name={s.name} color={cat.color} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Experience ── */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-8 rounded-lg btn-glow flex items-center justify-center">
              <HiBriefcase className="text-white text-sm" />
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Career</p>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent" />

            <div className="space-y-8 pl-12">
              {Experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[2.15rem] top-6 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#020208] shadow-lg shadow-violet-500/40 group-hover:scale-125 transition-transform" />

                  <div className="glass rounded-2xl p-6 border border-white/8 glass-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">{exp.Jobrole}</h3>
                        <p className="text-violet-400 text-sm font-medium">{exp.Company}</p>
                      </div>
                      <div className="text-right text-xs text-gray-500 space-y-0.5">
                        <p className="text-gray-400 font-medium">{exp.Duration}</p>
                        <p className="flex items-center justify-end gap-1">
                          <MdLocationOn className="inline text-cyan-400" />
                          {exp.Location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.Description.split(". ")
                        .filter(Boolean)
                        .map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                            <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                            <span>{point.replace(/\.$/, "")}.</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
