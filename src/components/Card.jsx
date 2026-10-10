import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiTag } from 'react-icons/hi';

function ModernCard({ project }) {
  const [hovered, setHovered] = useState(false);

  // Parse comma-separated technologies into an array
  const techList = project.technologies
    ? project.technologies.split(',').map((t) => t.trim())
    : [];

  return (
    <div
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-400
                  ${hovered
                    ? 'border-violet-500/40 shadow-2xl shadow-violet-500/10 -translate-y-2'
                    : 'border-white/8 shadow-lg'
                  } glass`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/5
                    transition-opacity duration-400 pointer-events-none
                    ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.projectIMG}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        {/* Image gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020208] via-transparent to-transparent" />

        {/* Tech tag on image */}
        {techList.length > 0 && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs
                          bg-black/60 backdrop-blur-md border border-white/10 text-gray-300">
            <HiTag className="text-violet-400 text-[10px]" />
            {techList[0]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h2 className="text-base font-semibold text-white leading-snug">{project.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {techList.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => window.open(project.ProjectLink, '_blank')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold
                       btn-glow text-white flex-1 justify-center"
          >
            <FaGithub className="text-sm" />
            View on GitHub
          </button>

          {project.liveLink && (
            <button
              onClick={() => window.open(project.liveLink, '_blank')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium
                         glass border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300
                         text-gray-400 transition-all duration-200"
            >
              <FaExternalLinkAlt className="text-[10px]" />
              Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
