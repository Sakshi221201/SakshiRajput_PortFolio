import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Building2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#64F0D1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
              <span>05 / EDUCATION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6]">
              My academic background.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#98A5B6] max-w-md">
            Foundational computer science principles, database modeling, and software engineering methodologies.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="group rounded-2xl bg-[#101721] border border-[#232E3B] p-8 hover:border-[#64F0D1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#64F0D1]/5 relative overflow-hidden">
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Graduation Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#64F0D1]/20 to-[#7B9CFF]/20 border border-[#64F0D1]/30 flex items-center justify-center text-[#64F0D1] flex-shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>

              {/* Education Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64F0D1] bg-[#64F0D1]/10 px-3 py-1 rounded-md border border-[#64F0D1]/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {education.duration}
                  </span>
                  <span className="text-xs font-mono text-[#98A5B6] px-2.5 py-1 rounded bg-[#080C12] border border-[#232E3B]">
                    {education.grade}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#EAF0F6] group-hover:text-white transition-colors mb-1">
                  {education.degree}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#7B9CFF] font-medium mb-4">
                  <Building2 className="w-4 h-4 text-[#7B9CFF]" />
                  <span>{education.institution}</span>
                </div>

                <p className="text-sm text-[#98A5B6] leading-relaxed mb-6">
                  {education.description}
                </p>

                {/* Course Modules */}
                <div>
                  <h4 className="font-heading font-semibold text-xs font-mono text-[#EAF0F6] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#64F0D1]" />
                    <span>Academic Highlights & Core Competencies</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {education.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#080C12] border border-[#232E3B] text-xs text-[#EAF0F6]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#64F0D1] flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
