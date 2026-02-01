import React from 'react'

function ModernCard({ project }) {
  return (
    <div className="w-full rounded-2xl 
                    bg-white/5 backdrop-blur-md
                    border border-white/10
                    shadow-lg hover:shadow-xl
                    transition duration-300
                    hover:-translate-y-1">

      {/* Image */}
      <div className="h-40 w-full overflow-hidden rounded-t-2xl">
        <img
          src={project.projectIMG}
          alt="card"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h2 className="text-lg font-semibold text-white">
          {project.title}
        </h2>


        <h3 className="text-lg font-semibold text-white">
          Language:{' '}
          <span className="italic font-light text-yellow-400">
            {project.technologies}
          </span>
        </h3>


        <p className="text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Action */}
        <button
          onClick={() => window.open(project.ProjectLink, "_blank")}
          className="mt-4 inline-flex items-center gap-2
                     px-4 py-2 rounded-full
                     bg-white/10 text-white text-sm
                     hover:bg-white/20 transition"
        >
          View Details →
        </button>
      </div>
    </div>
  )
}

export default ModernCard
