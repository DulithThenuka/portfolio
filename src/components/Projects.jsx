import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Featured', 'Enterprise & Public Sector', 'AI & Web'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    if (filter === 'Enterprise & Public Sector') {
      return project.id === 'agrolink' || project.id === 'oceansafe' || project.id === 'disaster-management' || project.id === 'growlink';
    }
    if (filter === 'AI & Web') {
      return project.id === 'ai-devsec' || project.id === 'studyflow-ai' || project.id === 'nextgen-mobile-care' || project.id === 'gamehub-pro';
    }
    return true;
  });

  return (
    <section id="projects" className="py-20 relative bg-navy-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
              <FolderGit2 className="w-4 h-4" />
              <span>04. Portfolio Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filter === opt
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-md shadow-blue-900/40'
                    : 'glass-panel text-slate-400 hover:text-white hover:bg-navy-800'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl p-6 border border-navy-700/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-xl bg-navy-850 border border-navy-700 text-blue-400 group-hover:text-purple-400 group-hover:scale-105 transition-all">
                      <FolderGit2 className="w-5 h-5" />
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-[10px] font-mono text-purple-300 font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* GitHub links on every project */}
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-navy-850 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700 transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                        title="Live Demo / Details"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mt-0.5">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-navy-700/60">
                    {project.highlights.map((item, idx) => {
                      const colonIndex = item.indexOf(':');
                      return (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>
                            {colonIndex !== -1 ? (
                              <>
                                <strong className="text-slate-100 font-semibold">{item.slice(0, colonIndex + 1)}</strong>
                                <span className="text-slate-400">{item.slice(colonIndex + 1)}</span>
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Tech tags */}
              <div className="pt-4 mt-4 border-t border-navy-700/80 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-navy-900 border border-navy-700/80 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub notice */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700 transition-all font-mono text-xs"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>Explore all repositories on GitHub (@{portfolioData.personal.name.replace(' ', '')})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
