import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowRight,
  Radio,
  Coffee,
  Wheat,
  X,
  Sparkles,
  Info,
  ShieldCheck,
  Smartphone,
  Server,
  Activity,
  Gauge,
  ShoppingBag,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // High-fidelity handcrafted mockups for each project
  const renderProjectVisual = (project) => {
    if (project.id === 'grain-distribution') {
      return (
        <div className="w-full h-64 sm:h-72 bg-[#080C12] rounded-xl p-5 border border-[#232E3B] flex flex-col justify-between relative overflow-hidden group-hover:border-[#64F0D1]/50 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#64F0D1]/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between border-b border-[#232E3B] pb-3 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#64F0D1] animate-pulse" />
              <span className="text-xs font-mono text-[#EAF0F6]">Grain Agri-Portal • Live Feed</span>
            </div>
            <span className="text-[11px] font-mono text-[#64F0D1] bg-[#64F0D1]/10 px-2 py-0.5 rounded border border-[#64F0D1]/30">
              AI Powered
            </span>
          </div>

          {/* Center Graphic: Market Ticker & AI Inspection Card */}
          <div className="space-y-3 my-auto z-10">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B]">
                <div className="text-[10px] text-[#98A5B6]">WHEAT GRADE A</div>
                <div className="text-[#64F0D1] font-bold text-sm mt-0.5">₹2,480/Qntl</div>
                <div className="text-[10px] text-[#27C93F]">+2.4% Today</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B]">
                <div className="text-[10px] text-[#98A5B6]">SOYBEAN SEED</div>
                <div className="text-[#7B9CFF] font-bold text-sm mt-0.5">₹4,620/Qntl</div>
                <div className="text-[10px] text-[#27C93F]">+1.1% Today</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#151F2C] border border-[#64F0D1]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#64F0D1]/20 flex items-center justify-center text-[#64F0D1]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#EAF0F6]">AI Quality Analysis</div>
                  <div className="text-[10px] text-[#98A5B6]">Purity Index: 98.6% (Passed)</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#64F0D1] font-bold">98.6%</span>
            </div>
          </div>

          {/* Bottom order status */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#98A5B6] border-t border-[#232E3B] pt-2 z-10">
            <span>Advance Orders: 1,420 Active</span>
            <span className="text-[#64F0D1]">Synced with MongoDB</span>
          </div>
        </div>
      );
    }

    if (project.id === 'tpms-iot') {
      return (
        <div className="w-full h-64 sm:h-72 bg-[#080C12] rounded-xl p-5 border border-[#232E3B] flex flex-col justify-between relative overflow-hidden group-hover:border-[#7B9CFF]/50 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#7B9CFF]/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#232E3B] pb-3 z-10">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#7B9CFF] animate-pulse" />
              <span className="text-xs font-mono text-[#EAF0F6]">BLE TPMS • 4 Sensors Active</span>
            </div>
            <span className="text-[11px] font-mono text-[#7B9CFF] bg-[#7B9CFF]/10 px-2 py-0.5 rounded border border-[#7B9CFF]/30">
              Low Latency
            </span>
          </div>

          {/* 4 Wheels Telemetry Visual */}
          <div className="grid grid-cols-2 gap-3 my-auto z-10">
            <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#98A5B6] block">FRONT LEFT</span>
                <span className="text-sm font-bold text-[#EAF0F6]">32.4 PSI</span>
              </div>
              <span className="text-[10px] font-mono text-[#64F0D1]">31°C • 98% Bat</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#98A5B6] block">FRONT RIGHT</span>
                <span className="text-sm font-bold text-[#EAF0F6]">32.2 PSI</span>
              </div>
              <span className="text-[10px] font-mono text-[#64F0D1]">32°C • 96% Bat</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#98A5B6] block">REAR LEFT</span>
                <span className="text-sm font-bold text-[#EAF0F6]">33.0 PSI</span>
              </div>
              <span className="text-[10px] font-mono text-[#64F0D1]">33°C • 99% Bat</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#98A5B6] block">REAR RIGHT</span>
                <span className="text-sm font-bold text-[#EAF0F6]">32.8 PSI</span>
              </div>
              <span className="text-[10px] font-mono text-[#64F0D1]">32°C • 95% Bat</span>
            </div>
          </div>

          {/* Bottom connection status */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#98A5B6] border-t border-[#232E3B] pt-2 z-10">
            <span>Protocol: Bluetooth 5.0 LE</span>
            <span className="text-[#7B9CFF]">AsyncStorage Synced</span>
          </div>
        </div>
      );
    }

    // Default: Life of Chai
    return (
      <div className="w-full h-64 sm:h-72 bg-[#080C12] rounded-xl p-5 border border-[#232E3B] flex flex-col justify-between relative overflow-hidden group-hover:border-[#64F0D1]/50 transition-all">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#64F0D1]/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-[#232E3B] pb-3 z-10">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-[#64F0D1]" />
            <span className="text-xs font-mono text-[#EAF0F6]">Life Of Chai • Cafe Admin</span>
          </div>
          <span className="text-[11px] font-mono text-[#64F0D1] bg-[#64F0D1]/10 px-2 py-0.5 rounded border border-[#64F0D1]/30">
            CRUD & Orders
          </span>
        </div>

        {/* Cafe metrics mockup */}
        <div className="space-y-3 my-auto z-10">
          <div className="grid grid-cols-3 gap-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-[#101721] border border-[#232E3B] text-center">
              <div className="text-[10px] text-[#98A5B6]">ORDERS</div>
              <div className="text-[#EAF0F6] font-bold text-sm mt-0.5">342</div>
            </div>
            <div className="p-2 rounded-lg bg-[#101721] border border-[#232E3B] text-center">
              <div className="text-[10px] text-[#98A5B6]">REVENUE</div>
              <div className="text-[#64F0D1] font-bold text-sm mt-0.5">₹48,200</div>
            </div>
            <div className="p-2 rounded-lg bg-[#101721] border border-[#232E3B] text-center">
              <div className="text-[10px] text-[#98A5B6]">ACTIVE TABLES</div>
              <div className="text-[#7B9CFF] font-bold text-sm mt-0.5">18 / 22</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#101721] border border-[#232E3B] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#64F0D1]" />
              <span className="text-[#EAF0F6] font-mono">Order #1049 (Masala Chai x 4, Bun Maska x 2)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#27C93F]/10 text-[#27C93F] text-[10px] font-mono">
              Completed
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#98A5B6] border-t border-[#232E3B] pt-2 z-10">
          <span>Backend: PHP / CodeIgniter / MySQL</span>
          <span className="text-[#64F0D1]">AJAX Real-Time</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#64F0D1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
              <span>03 / SELECTED WORK</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6]">
              Projects I'm proud of.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#98A5B6] max-w-md">
            Engineered real-world applications covering mobile applications, IoT telemetry, AI grain classification, and enterprise management.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#101721] border border-[#232E3B] p-6 hover:border-[#64F0D1]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#64F0D1]/5"
            >
              <div>
                {/* Visual Preview / Architecture Mockup */}
                <div className="mb-6">
                  {renderProjectVisual(project)}
                </div>

                {/* Status & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64F0D1]">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#98A5B6] px-2 py-0.5 rounded bg-[#080C12] border border-[#232E3B]">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-bold text-xl text-[#EAF0F6] mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#98A5B6] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Features Bullets (Top 3) */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#EAF0F6]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#64F0D1] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#232E3B] mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[#080C12] border border-[#232E3B] text-[#98A5B6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#EAF0F6] bg-[#151F2C] hover:bg-[#1f2d3f] border border-[#232E3B] hover:border-[#64F0D1]/40 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-[#64F0D1]" />
                    <span>Inspect Highlights</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on links policy */}
        <div className="mt-12 text-center text-xs font-mono text-[#98A5B6] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#64F0D1]" />
          <span>Proprietary and client-production projects. Source code & live endpoints are protected under organizational NDA.</span>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#080C12]/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#101721] border border-[#232E3B] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#232E3B] mb-6">
              <div>
                <span className="text-xs font-mono text-[#64F0D1] uppercase tracking-wider block mb-1">
                  {selectedProject.badge} • {selectedProject.status}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#EAF0F6]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-[#98A5B6] hover:text-[#EAF0F6] bg-[#080C12] border border-[#232E3B]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#EAF0F6] mb-2">Project Overview</h4>
                <p className="text-sm text-[#98A5B6] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Complete Features */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#EAF0F6] mb-3">Key Features & Modules</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#EAF0F6] p-2.5 rounded-lg bg-[#080C12] border border-[#232E3B]">
                      <CheckCircle2 className="w-4 h-4 text-[#64F0D1] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#EAF0F6] mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#151F2C] border border-[#232E3B] text-[#64F0D1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#232E3B] flex items-center justify-between text-xs text-[#98A5B6]">
                <span>Repository URLs and live credentials available upon verified technical interview request.</span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl font-semibold bg-[#64F0D1] text-[#080C12] text-xs hover:bg-[#7ff3d9] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
