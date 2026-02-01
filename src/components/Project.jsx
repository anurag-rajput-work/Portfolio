import React from 'react'
import ModernCard from './Card'
import projects from '../Data/Projects'

function Project() {
  return (
    <section className="min-h-screen w-full bg-black px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide text-yellow-400 border border-yellow-400/40 rounded-full">
          Projects
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Things I’ve Built
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A selection of projects showcasing my skills in frontend, backend, and full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ModernCard key={index} project={project} />
        ))}
      </div>

    </section>
  )
}

export default Project
