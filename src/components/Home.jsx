import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* Animated floating orbs */
function Orbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large violet orb - top left */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          animationDelay: '0s',
        }}
      />
      {/* Cyan orb - top right */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />
      {/* Small pink orb - bottom center */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}

function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <Orbs />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium
                     border border-green-500/30 bg-green-500/10 text-green-400 animate-slide-up"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          Available for work
          <HiSparkles className="text-green-300" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 animate-slide-up delay-100">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="gradient-text-warm">Anurag</span>
            {/* Underline glow */}
            <span
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #f97316, #ec4899)' }}
            />
          </span>
        </h1>

        {/* Typewriter */}
        <div className="text-2xl md:text-3xl font-semibold mb-8 h-12 animate-slide-up delay-200">
          <span className="gradient-text">
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer.',
                  'Python Enthusiast.',
                  'Problem Solver.',
                  'Lifelong Learner.',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 60,
              }}
            />
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4 animate-slide-up delay-300">
          BCA student at IGNOU building{' '}
          <span className="text-violet-300 font-medium">scalable, user-centric</span> web applications.
          I specialize in <span className="text-cyan-300 font-medium">Python & Django</span> for backend
          and <span className="text-orange-300 font-medium">React</span> for beautiful frontends.
        </p>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-12 animate-slide-up delay-400">
          Currently seeking internship or entry-level Software Engineering roles where I can contribute,
          collaborate, and grow rapidly.
        </p>

        {/* CTA Grid */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up delay-500">
          <Link to="/projects">
            <button className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-glow text-white font-medium text-sm">
              View My Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </button>
          </Link>

          <Link to="/about">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 transition-all duration-300 font-medium text-sm">
              About Me
            </button>
          </Link>

          <a
            href="https://github.com/anurag-rajput-work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <FaGithub size={16} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto animate-slide-up delay-500">
          {[
            { value: '2+', label: 'Projects Built' },
            { value: '5+', label: 'Technologies' },
            { value: '2+', label: 'Years Coding' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-4 border border-white/8 text-center"
            >
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <div className="w-5 h-9 rounded-full border border-gray-700 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-500 animate-bounce" />
        </div>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}

export default Home;
