import React from 'react';
import { ArrowRight, Download, Terminal, Code2, Server, Database, CheckCircle2, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy-900">
      {/* Background ambient lighting - Navy, Electric Blue & Purple accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-purple-700/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-blue-700/10 blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-850 border border-blue-500/30 text-xs font-mono text-slate-200 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-blue-400 tracking-wider uppercase font-semibold">
                  Hello, I'm
                </span>
                <span className="h-px w-8 bg-blue-500/50"></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {personal.name}
              </h1>
              <div className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {personal.role}
                </p>
              </div>
            </div>

            {/* Professional Headline */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
              {personal.headline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Software Engineering undergraduate at <strong className="text-slate-200">NSBM Green University</strong> specializing in modern full-stack web applications, Spring Boot architectures, and database engineering.
            </p>

            {/* Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Downloadable CV Button */}
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 text-slate-200 font-semibold text-sm border border-navy-700 hover:border-blue-500/50 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Shortcuts */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Interactive Developer Session */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-navy-850 border border-navy-700 shadow-2xl overflow-hidden font-mono text-xs text-slate-300">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950 border-b border-navy-700/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-sans font-medium">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    DulithThenukaApplication.java
                  </span>
                  <div className="w-10"></div>
                </div>

                {/* Code body */}
                <div className="p-5 space-y-3.5">
                  <div className="text-slate-400">
                    <span className="text-purple-400">@SpringBootApplication</span><br/>
                    <span className="text-blue-400">public class</span> <span className="text-amber-300">DulithThenukaProfile</span> &#123;
                  </div>

                  <div className="pl-4 space-y-1.5 border-l border-navy-700 text-slate-300">
                    <p><span className="text-purple-400">String</span> name = <span className="text-emerald-300">"Dulith Thenuka"</span>;</p>
                    <p><span className="text-purple-400">String</span> university = <span className="text-emerald-300">"NSBM Green University"</span>;</p>
                    <p><span className="text-purple-400">String[]</span> primarySkills = &#123;</p>
                    <p className="pl-4 text-blue-300">"Java", "Spring Boot", "MySQL",</p>
                    <p className="pl-4 text-purple-300">"Python", "React", "Angular"</p>
                    <p>&#125;;</p>
                    <p><span className="text-purple-400">boolean</span> readyForInternships = <span className="text-blue-400">true</span>;</p>
                  </div>

                  <div className="text-slate-400">
                    &#125;
                  </div>

                  <div className="pt-2 border-t border-navy-700/80 text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Spring Boot 3.x Context Loaded
                    </span>
                    <span className="text-purple-400 font-mono">JVM 21</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-navy-700/80 hover:border-blue-500/40 transition-all text-center sm:text-left hover:-translate-y-1"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
