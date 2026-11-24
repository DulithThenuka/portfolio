import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Software Engineering Inquiry')}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-mono text-xs tracking-wider uppercase font-semibold">
            <MessageSquare className="w-4 h-4" />
            <span>07. Contact & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto sm:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 text-base leading-relaxed">
              I am actively seeking <strong className="text-white">Associate Software Engineer</strong> roles and internship opportunities. Whether you have an open position, an engineering project, or want to connect, feel free to reach out.
            </p>

            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="glass-panel p-4 rounded-xl border border-navy-700/80 hover:border-blue-500/40 transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Email</span>
                    <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-navy-850 border border-navy-700 text-slate-300 hover:text-blue-400 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel p-4 rounded-xl border border-navy-700/80 hover:border-purple-500/40 transition-all flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Phone / Mobile</span>
                  <a href={`tel:${personal.phone}`} className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-panel p-4 rounded-xl border border-navy-700/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-white">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Profile Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl glass-panel hover:bg-navy-800 text-xs font-mono text-slate-200 hover:text-white border border-navy-700 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl glass-panel hover:bg-navy-800 text-xs font-mono text-slate-200 hover:text-white border border-navy-700 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-navy-700/80 shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm text-white placeholder-slate-500 transition-colors outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm text-white placeholder-slate-500 transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Associate Software Engineer Opportunity / Project"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm text-white placeholder-slate-500 transition-colors outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Hi Dulith, I reviewed your portfolio and would like to discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-navy-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-sm text-white placeholder-slate-500 transition-colors outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-600/50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {sent && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Opening your email client... Looking forward to speaking!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
