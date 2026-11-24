import React from 'react';
import { User, Target, Code2, Server, GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const coreFocus = [
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Developing robust microservices, REST APIs, and database transactions using Java, Spring Boot, and MySQL.",
      badge: "Java / Spring Boot"
    },
    {
      icon: Code2,
      title: "Modern Full-Stack",
      description: "Crafting intuitive, responsive client interfaces using React, Angular, Tailwind CSS, and TypeScript.",
      badge: "React / Angular"
    },
    {
      icon: Target,
      title: "Scalable Engineering",
      description: "Writing clean, modular code grounded in design patterns, automated testing, and agile collaboration.",
      badge: "Clean Architecture"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-navy-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <User className="w-4 h-4" />
            <span>02. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Career Goals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am an <strong className="text-white">Associate Software Engineer</strong> and Software Engineering undergraduate at <strong className="text-blue-400">NSBM Green University</strong> with a solid grounding in software and web application development.
            </p>
            <p>
              {personal.bio}
            </p>

            {/* Career Goals Callout Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/50 to-purple-950/50 border border-blue-500/20 space-y-2">
              <h4 className="text-sm font-mono font-bold text-blue-300 uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                Career Objective & Future Goals
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {personal.careerGoals}
              </p>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>NSBM Green University (2025 - Present)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Enterprise Java & Spring Boot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full-Stack Web (React & Angular)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>MySQL & Relational Databases</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-red-400 shrink-0" />
              <span>{personal.location} • Open to Remote & On-Site Roles</span>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {coreFocus.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl border border-navy-700/80 hover:border-blue-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-navy-850 border border-navy-700 text-blue-400 group-hover:text-purple-400 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-300">
                          {pillar.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
