import React from 'react';
import {
  Layout,
  Server,
  Database,
  Smartphone,
  CheckCircle2,
  Terminal,
  Code2,
  GitBranch,
  Cpu,
  Layers,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7B9CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
              <span>02 / MY TOOLKIT</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6]">
              Technologies I work with.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#98A5B6] max-w-md">
            Production-tested stack spanning frontend interfaces, scalable backend runtimes, database architecture, and developer workflows.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-2xl bg-[#101721] border border-[#232E3B] p-6 hover:border-[#64F0D1]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#64F0D1]/5 flex flex-col justify-between"
            >
              <div>
                {/* Header with Category Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#080C12] border border-[#232E3B] flex items-center justify-center text-[#64F0D1] group-hover:scale-110 group-hover:border-[#64F0D1]/40 transition-all">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-[#98A5B6] px-2 py-0.5 rounded bg-[#080C12] border border-[#232E3B]">
                    {category.skills.length} Techs
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="font-heading font-bold text-lg text-[#EAF0F6] mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h3>

                {/* Category Description */}
                <p className="text-xs text-[#98A5B6] mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#232E3B]/80">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      skill.highlight
                        ? 'bg-[#151F2C] text-[#EAF0F6] border border-[#64F0D1]/30 hover:border-[#64F0D1] hover:text-[#64F0D1]'
                        : 'bg-[#080C12] text-[#98A5B6] border border-[#232E3B] hover:text-[#EAF0F6] hover:border-[#98A5B6]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        skill.highlight ? 'bg-[#64F0D1]' : 'bg-[#98A5B6]'
                      }`}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stack Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#101721]/60 border border-[#232E3B] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#64F0D1]/10 text-[#64F0D1] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm text-[#EAF0F6]">Modern Architecture Standards</h4>
              <p className="text-xs text-[#98A5B6]">Adhering to clean code, semantic components, and RESTful guidelines.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#98A5B6]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#64F0D1]" />
              Core Competency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7B9CFF]" />
              Production Deployed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
