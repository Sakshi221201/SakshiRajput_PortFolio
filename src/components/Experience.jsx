import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#7B9CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
              <span>04 / EXPERIENCE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6]">
              Where I've grown.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#98A5B6] max-w-md">
            My professional career path delivering full-stack solutions, client application features, and reliable software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#64F0D1] via-[#7B9CFF] to-[#232E3B]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-0`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-7 h-7 rounded-full bg-[#101721] border-2 ${
                        exp.current ? 'border-[#64F0D1] shadow-[0_0_12px_#64F0D1]' : 'border-[#7B9CFF]'
                      } flex items-center justify-center`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          exp.current ? 'bg-[#64F0D1]' : 'bg-[#7B9CFF]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="group rounded-2xl bg-[#101721] border border-[#232E3B] p-6 hover:border-[#64F0D1]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#64F0D1]/5">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64F0D1] bg-[#64F0D1]/10 px-2.5 py-1 rounded-md border border-[#64F0D1]/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>

                        {exp.current && (
                          <span className="text-[11px] font-mono text-[#64F0D1] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#64F0D1] animate-ping" />
                            Current Role
                          </span>
                        )}
                      </div>

                      {/* Job Role Title */}
                      <h3 className="font-heading font-bold text-xl text-[#EAF0F6] group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[#98A5B6] mt-1 mb-4">
                        <span className="text-[#EAF0F6] font-medium">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-[#64F0D1]" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#98A5B6] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#EAF0F6]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#64F0D1] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#232E3B]/80">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#080C12] border border-[#232E3B] text-[#98A5B6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

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
