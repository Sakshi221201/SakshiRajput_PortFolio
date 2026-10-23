import React from 'react';
import {
  Code,
  Smartphone,
  Server,
  Zap,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/Sakshi_Profile_Photo.jpg';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: 'Frontend Development',
      desc: 'Developing fast, responsive, and accessible user interfaces using React.js and modern CSS.',
    },
    {
      icon: Server,
      title: 'Backend Services',
      desc: 'Crafting robust REST APIs, business logic, and authentication pipelines with Node.js and Express.',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile',
      desc: 'Building performant mobile applications with React Native and native hardware integrations like BLE.',
    },
    {
      icon: Zap,
      title: 'Performance & Reliability',
      desc: 'Optimizing database queries, caching strategies, and debugging production-level web applications.',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#64F0D1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6]">
            A little about my journey.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Short Intro & Profile Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl bg-[#101721] border border-[#232E3B] space-y-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-5 border-b border-[#232E3B]">
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#64F0D1] to-[#7B9CFF] opacity-40 group-hover:opacity-75 blur transition duration-300" />
                  <img
                    src={profilePhoto}
                    alt="Sakshi Rajput"
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#64F0D1]/60 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#080C12] border border-[#64F0D1]/50 text-[10px] font-mono text-[#64F0D1] flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#64F0D1]/10 border border-[#64F0D1]/30 text-[#64F0D1] text-[11px] font-mono mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Full Stack Developer</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#EAF0F6]">Sakshi Rajput</h3>
                  <p className="text-xs text-[#98A5B6] font-mono mt-1">MCA Graduate • Web & Mobile</p>
                </div>
              </div>

              <p className="text-sm text-[#98A5B6] leading-relaxed">
                Passionate software developer with an MCA background, dedicated to turning complex requirements into clean, scalable, and intuitive software solutions.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#080C12] border border-[#232E3B]">
                  <span className="text-xs text-[#98A5B6] font-mono block">EXPERIENCE</span>
                  <span className="font-heading font-bold text-[#EAF0F6] text-base mt-0.5 block">2+ Years</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080C12] border border-[#232E3B]">
                  <span className="text-xs text-[#98A5B6] font-mono block">EDUCATION</span>
                  <span className="font-heading font-bold text-[#64F0D1] text-base mt-0.5 block">MCA Grad</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080C12] border border-[#232E3B]">
                  <span className="text-xs text-[#98A5B6] font-mono block">LOCATION</span>
                  <span className="font-heading font-bold text-[#EAF0F6] text-base mt-0.5 block">Pune, India</span>
                </div>
                <div className="p-3 rounded-xl bg-[#080C12] border border-[#232E3B]">
                  <span className="text-xs text-[#98A5B6] font-mono block">AVAILABILITY</span>
                  <span className="font-heading font-bold text-[#7B9CFF] text-base mt-0.5 block">Active / Ready</span>
                </div>
              </div>
            </div>

            {/* Quick check items */}
            <div className="p-5 rounded-2xl bg-[#101721]/50 border border-[#232E3B]/80 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#EAF0F6]">
                <CheckCircle className="w-4 h-4 text-[#64F0D1] flex-shrink-0" />
                <span>Responsive & fluid cross-platform development</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EAF0F6]">
                <CheckCircle className="w-4 h-4 text-[#64F0D1] flex-shrink-0" />
                <span>Clean REST APIs, microservices & schema architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#EAF0F6]">
                <CheckCircle className="w-4 h-4 text-[#64F0D1] flex-shrink-0" />
                <span>Agile problem solving & production incident resolution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Narrative & Core Focus */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Detailed Description */}
            <div className="space-y-5 text-base sm:text-lg text-[#98A5B6] leading-relaxed">
              <p className="text-[#EAF0F6] font-medium text-lg sm:text-xl leading-relaxed">
                {personalInfo.aboutParagraphs[0]}
              </p>
              <p>
                {personalInfo.aboutParagraphs[1]}
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="pt-4">
              <h3 className="font-heading text-lg font-semibold text-[#EAF0F6] mb-4 flex items-center gap-2">
                <span>Core Engineering Pillars</span>
                <span className="w-8 h-[1px] bg-[#64F0D1]/50" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-xl bg-[#101721] border border-[#232E3B] hover:border-[#64F0D1]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#64F0D1]/10 text-[#64F0D1] flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-[#EAF0F6] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#98A5B6] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
