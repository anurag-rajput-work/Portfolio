import React from 'react'

function About() {

  const skills = {
    frontend: ["React", "Tailwind CSS", "JavaScript"],
    backend: ["Django", "Python", "Node.js"],
    database: ["PostgreSQL", "SQLite"],
    tools: ["Git", "GitHub", "VS Code"]
  };


  const Experiences = [
    {
      Jobrole: "Customer care Executive",
      Company: "Colossal infotech Pvt Ltd",
      Duration: "2023/01 – 2024/03",
      Location: "Noida, India",
      Description: "Assisted customers through end-to-end loan application processes using internal digital systems, ensuring data accuracy and compliance. Resolved customer issues through structured problem-solving and clear communication while managing queries, follow-ups, and process tracking in a fast-paced, target-driven environment."
    },
    {
      Jobrole: "Social Media executive",
      Company: "Dilan Jewels",
      Duration: "2024/04 – 2025/04",
      Location: "Noida, India",
      Description: "Managed and optimized brand presence on Instagram and Facebook by creating, scheduling, and analyzing content. Used engagement metrics and basic analytics to improve reach, audience interaction, and understand user behavior and digital trends."

    }
  ]
  return (
    <div className="w-full h-full duration-200 bg-black text-center">

      <section className="bg-black text-white px-6 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1 text-sm tracking-wide text-orange-400 border border-orange-400/40 rounded-full">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technologies I Work With
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-gray-700 rounded-xl p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold capitalize mb-4 text-orange-400">
                  {category}
                </h3>

                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-gray-300"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide text-orange-400 border border-orange-400/40 rounded-full">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Where I’ve Worked
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A timeline of roles where I built skills, solved problems, and delivered real impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-700"></div>

          <div className="space-y-16">
            {Experiences.map((exp, index) => (
              <div key={index} className="relative flex justify-center">

                {/* Timeline dot */}

                {/* Card */}
                <div className="w-full md:w-[80%] bg-gradient-to-br from-white/5 to-white/10 border border-gray-700 rounded-2xl p-8 backdrop-blur shadow-lg">
                  <h3 className="text-xl font-semibold text-center">
                    {exp.Jobrole}
                    <span className="block text-sm text-orange-400 font-medium mt-1">
                      {exp.Company}
                    </span>
                  </h3>

                  <p className="text-sm text-gray-400 text-center mt-2">
                    {exp.Duration} • {exp.Location}
                  </p>

                  <p className="mt-6 text-gray-300 leading-relaxed text-center">
                    {exp.Description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section >
    </div>
  )
}

export default About