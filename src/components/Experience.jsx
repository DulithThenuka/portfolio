import React from 'react';
import { Briefcase, Calendar, CheckCircle2, UserCheck, Mail, Phone, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, reference } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-navy-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>06. Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-navy-700/80 hover:border-blue-500/40 transition-all space-y-4 group hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-950/70 border border-purple-500/30 px-3 py-1 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  <span>{item.organization}</span>
                </div>

                <div className="pt-2 border-t border-navy-700/70 space-y-2">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic & Professional Reference Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-navy-700/80 bg-gradient-to-br from-navy-850 to-purple-950/20 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-blue-400" />
                <span>Academic Reference</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">
                  {reference.name}
                </h4>
                <p className="text-xs text-blue-300 font-medium">
                  {reference.title}
                </p>
                <p className="text-xs text-slate-400">
                  {reference.organization}
                </p>
              </div>

              <div className="pt-3 border-t border-navy-700/70 space-y-2.5 text-xs text-slate-300">
                <a
                  href={`mailto:${reference.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">{reference.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{reference.contact}</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-navy-850/60 border border-navy-700/80 text-xs text-slate-400 leading-relaxed">
              Available to undertake full-time or part-time Associate Software Engineer internships, with quick onboarding on Spring Boot, Java, React, and MySQL environments.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
