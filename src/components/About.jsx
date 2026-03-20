import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiNetlify,
} from "react-icons/si";

import { DiPython, DiCode } from "react-icons/di";
import { SiC, SiCplusplus } from "react-icons/si";

function About() {
  const Experiences = [
    {
      Jobrole: "Customer care Executive",
      Company: "Colossal infotech Pvt Ltd",
      Duration: "2023/01 – 2024/03",
      Location: "Noida, India",
      Description:
        "Assisted customers through end-to-end loan application processes using internal digital systems, ensuring data accuracy and compliance. Resolved customer issues through structured problem-solving and clear communication while managing queries, follow-ups, and process tracking in a fast-paced, target-driven environment.",
    },
    {
      Jobrole: "Social Media executive",
      Company: "Dilan Jewels",
      Duration: "2024/04 – 2025/04",
      Location: "Noida, India",
      Description:
        "Managed and optimized brand presence on Instagram and Facebook by creating, scheduling, and analyzing content. Used engagement metrics and basic analytics to improve reach, audience interaction, and understand user behavior and digital trends.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4">
      <section className="max-w-5xl mx-auto">
        {/* ================= SKILLS ================= */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-green-400 text-xs border border-green-400/30 px-3 py-1 rounded-full">
              SKILLS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-green-400 font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <Skill icon={<DiPython />} name="Python" />
                <Skill icon={<SiC />} name="C" />
                <Skill icon={<SiCplusplus />} name="C++" />
                <Skill icon={<SiJavascript />} name="JavaScript" />
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-green-400 font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-4">
                <Skill icon={<FaHtml5 />} name="HTML" />
                <Skill icon={<FaCss3Alt />} name="CSS" />
                <Skill icon={<SiTailwindcss />} name="Tailwind" />
                <Skill icon={<FaReact />} name="React" />
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-green-400 font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-4">
                <Skill icon={<SiDjango />} name="Django" />
                <Skill icon={<FaNodeJs />} name="Node.js" />
                <Skill icon={<SiExpress />} name="Express" />
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800">
              <h3 className="text-green-400 font-semibold mb-4">Database</h3>
              <div className="flex flex-wrap gap-4">
                <Skill icon={<SiMysql />} name="MySQL" />
                <Skill icon={<SiMongodb />} name="MongoDB" />
                <Skill icon={<SiSqlite />} name="SQLite" />
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-800 md:col-span-2">
              <h3 className="text-green-400 font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-4">
                <Skill icon={<FaDocker />} name="Docker" />
                <Skill icon={<FaGitAlt />} name="Git" />
                <Skill icon={<FaLinux />} name="Linux CLI" />
                <Skill icon={<SiNetlify />} name="Netlify" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="mb-16 text-left">
          <span className="text-green-400 text-xs border border-green-400/30 px-3 py-1 rounded-full tracking-wide">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Work Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-green-500/30 pl-8 space-y-12">
          {Experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Card */}
              <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition duration-300">
                <h3 className="text-lg md:text-xl font-semibold text-green-400">
                  {exp.Jobrole}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {exp.Company} • {exp.Duration} • {exp.Location}
                </p>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                  {exp.Description.split(". ").map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ✅ Reusable Skill Component */
const Skill = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-gray-700 rounded-lg hover:border-green-400 hover:scale-105 transition duration-200 cursor-default">
      <span className="text-green-400 text-lg">{icon}</span>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default About;
