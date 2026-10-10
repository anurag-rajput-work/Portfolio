import React from 'react';
import ModernCard from './Card';
import projects from '../Data/Projects';
import { HiCode } from 'react-icons/hi';

function Project() {
  return (
    <section className="relative min-h-screen w-full bg-[#020208] overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                          border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-medium">
            <HiCode className="text-yellow-300" />
            My Work
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h1>

          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            A curated selection of projects showcasing my skills across frontend, backend, and
            full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ModernCard key={index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm mb-4">Want to see more?</p>
          <a
            href="https://github.com/anurag-rajput-work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-glow text-white font-medium text-sm"
          >
            View all on GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Project;
