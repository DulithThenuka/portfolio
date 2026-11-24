import React, { useState } from 'react';
import { Wrench, CheckCircle, Code2, Server, Database, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { coreHighlights, skills } = portfolioData;
  const categories = Object.keys(skills);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCategories = selectedCategory === 'All'
    ? categories
    : categories.filter(c => c === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <Wrench className="w-4 h-4" />
            <span>03. Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Skills & Technical Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        {/* Featured Core Skills Banner */}
        <div className="mb-14 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-navy-850 to-purple-950/60 border border-blue-500/30 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Primary Technical Stack</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {coreHighlights.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-navy-900/90 border border-blue-500/20 hover:border-purple-500/50 transition-all text-center group hover:-translate-y-1"
              >
                <div className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  {skill.category}
                </div>
                <div className="mt-2 text-[10px] font-mono text-purple-400 bg-purple-950/60 py-0.5 rounded px-2">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-md shadow-blue-900/40'
                : 'glass-panel text-slate-400 hover:text-white hover:bg-navy-800'
            }`}
          >
            All Areas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-md shadow-blue-900/40'
                : 'glass-panel text-slate-400 hover:text-white hover:bg-navy-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills[category].map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-navy-700/70 hover:border-blue-500/40 transition-all flex items-center justify-between group hover:-translate-y-0.5"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.level}
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500/80 group-hover:scale-150 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
