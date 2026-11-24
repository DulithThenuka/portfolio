import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, BookOpen, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>05. Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Institution - NSBM Green University */}
          <div className="lg:col-span-7 space-y-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-navy-700/80 hover:border-blue-500/40 transition-all space-y-4 group hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                      {item.status}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.institution}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 bg-blue-950/70 border border-blue-500/30 px-3 py-1 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div className="text-base font-semibold text-slate-200">
                  {item.degree}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-navy-700/70 space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Academic Highlights & Key Modules Side Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-navy-700/80 bg-gradient-to-br from-navy-850 to-blue-950/30 space-y-5">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-blue-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Degree Core Disciplines</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/70">
                  <span className="font-bold text-white block">Enterprise Java & Spring Boot</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">REST controllers, JPA/Hibernate, Spring Security & layered architecture.</p>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/70">
                  <span className="font-bold text-white block">Relational Database Systems</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">MySQL database schema design, normalization, joins, and indexing.</p>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/70">
                  <span className="font-bold text-white block">Data Structures & OOP Principles</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Object-oriented modeling, polymorphism, encapsulation, and algorithmic efficiency.</p>
                </div>
                <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/70">
                  <span className="font-bold text-white block">Modern Web Systems</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Component-driven UI development with React, Angular, and asynchronous API consumption.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
