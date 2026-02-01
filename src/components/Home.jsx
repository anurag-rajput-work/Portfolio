import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      <div className="max-w-4xl mx-auto text-center">

        {/* Availability Badge */}
        <span className="inline-block mb-6 px-4 py-1 text-sm border border-green-500/50 text-green-400 rounded-full">
          Available for work
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-orange-500">Anurag</span>
        </h1>

        {/* Typewriter */}
        <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-blue-400">
          <Typewriter
            options={{
              strings: [
                'A Full-Stack Developer.',
                'A Python Enthusiast.',
                'A Lifelong Learner.'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 leading-relaxed">
          I am a Full-Stack Developer and BCA student at IGNOU with experience building scalable, user-centric web applications. I specialize in Python and Django for backend development, and JavaScript with React for creating responsive frontends.
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          I enjoy working across the full development lifecycle—from database design with SQL to building modern interfaces using Tailwind CSS. I’m currently seeking internship or entry-level Software Engineering roles where I can contribute and grow.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/projects">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition-transform">
              View Projects
            </button>
          </Link>

          <Link to="/About">
            <button className="px-8 py-3 rounded-xl border border-gray-600 hover:bg-white hover:text-black transition">
              About Me
            </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Home
