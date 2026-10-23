import React, { useState } from 'react';
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/Sakshi_Profile_Photo.jpg';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:py-32 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64F0D1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[28rem] h-[28rem] bg-[#7B9CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Role Tag with Profile Avatar */}
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1 rounded-full bg-[#101721] border border-[#232E3B] text-xs font-semibold tracking-wider text-[#64F0D1] uppercase mb-6 shadow-sm hover:border-[#64F0D1]/40 transition-colors">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Sakshi Rajput"
                  className="w-7 h-7 rounded-full object-cover border border-[#64F0D1]/60"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10B981] border border-[#101721]" />
              </div>
              <div className="flex items-center gap-2">
                <span>{personalInfo.role}</span>
                <span className="text-[#232E3B]">•</span>
                <span className="text-[#98A5B6] font-normal normal-case">2+ Years Exp</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAF0F6] leading-[1.15] mb-6">
              Building digital experiences that{' '}
              <span className="text-[#64F0D1] relative inline-block">
                make an impact.
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#64F0D1] to-transparent rounded-full opacity-60" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#98A5B6] max-w-2xl leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#080C12] bg-[#64F0D1] hover:bg-[#7ff3d9] transition-all duration-300 shadow-[0_0_25px_rgba(100,240,209,0.3)] hover:shadow-[0_0_35px_rgba(100,240,209,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sakshi_Rajput_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#EAF0F6] bg-[#101721] hover:bg-[#151F2C] border border-[#232E3B] hover:border-[#64F0D1]/50 transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-[#64F0D1]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location Bar */}
            <div className="pt-6 border-t border-[#232E3B] w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101721] border border-[#232E3B] text-[#98A5B6] hover:text-[#64F0D1] hover:border-[#64F0D1]/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101721] border border-[#232E3B] text-[#98A5B6] hover:text-[#7B9CFF] hover:border-[#7B9CFF]/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#101721] border border-[#232E3B] text-xs font-mono text-[#98A5B6] hover:text-[#EAF0F6] hover:border-[#64F0D1]/40 transition-all"
                  title="Click to copy email address"
                >
                  <Mail className="w-4 h-4 text-[#64F0D1]" />
                  <span>{personalInfo.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#64F0D1]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#98A5B6] group-hover:text-[#64F0D1]" />
                  )}
                </button>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#98A5B6]">
                <MapPin className="w-4 h-4 text-[#64F0D1]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column - Developer Card / Code Illustration */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#64F0D1]/20 to-[#7B9CFF]/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

            {/* Profile Card Container */}
            <div className="relative rounded-2xl bg-[#101721] border border-[#232E3B] p-6 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#232E3B] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-2 font-mono text-xs text-[#98A5B6]">sakshi_developer.js</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-[#080C12] text-[#64F0D1] border border-[#232E3B]">
                  <Terminal className="w-3 h-3" />
                  <span>v2.4.0</span>
                </div>
              </div>

              {/* Developer Profile Header with Photo */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-[#080C12]/90 border border-[#232E3B] mb-5">
                <div className="relative flex-shrink-0 group">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#64F0D1] to-[#7B9CFF] opacity-60 group-hover:opacity-100 blur-sm transition duration-300" />
                  <img
                    src={profilePhoto}
                    alt="Sakshi Rajput"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-[#64F0D1]/60 shadow-[0_0_15px_rgba(100,240,209,0.3)]"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#080C12]"
                    title="Available for opportunities"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-base text-[#EAF0F6] truncate">
                      Sakshi Rajput
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#64F0D1]/10 text-[#64F0D1] border border-[#64F0D1]/30 flex-shrink-0">
                      Full Stack
                    </span>
                  </div>
                  <p className="text-xs text-[#98A5B6] font-mono truncate mt-0.5">
                    rajputsakshig@gmail.com
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-[#64F0D1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#64F0D1] animate-pulse" />
                    <span className="text-[11px] font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-1.5 text-[#98A5B6] bg-[#080C12]/80 p-4 rounded-xl border border-[#232E3B]/80 mb-6 overflow-x-auto">
                <p>
                  <span className="text-[#7B9CFF]">const</span>{' '}
                  <span className="text-[#64F0D1]">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-[#EAF0F6]">'Sakshi Rajput'</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-[#64F0D1]">'Full Stack Engineer'</span>,
                </p>
                <p className="pl-4">
                  experience: <span className="text-[#FFBD2E]">'2+ Years'</span>,
                </p>
                <p className="pl-4">
                  primaryStack: [
                </p>
                <p className="pl-8 text-[#7B9CFF]">
                  'React.js', 'React Native', 'Node.js', 'Express', 'MongoDB'
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  passionateAbout: <span className="text-[#64F0D1]">'Clean Code & Real Impact'</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Quick Experience Statistics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#080C12]/60 border border-[#232E3B] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#64F0D1]/10 text-[#64F0D1]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-[#EAF0F6]">2+ Years</div>
                    <div className="text-xs text-[#98A5B6]">Industry Experience</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#080C12]/60 border border-[#232E3B] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#7B9CFF]/10 text-[#7B9CFF]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-[#EAF0F6]">Production</div>
                    <div className="text-xs text-[#98A5B6]">Tested Web & Mobile</div>
                  </div>
                </div>
              </div>

              {/* Interactive Tech Stacks Pills */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#98A5B6] mb-2 font-mono">
                  <span>SPECIALIZED IN:</span>
                  <span className="text-[#64F0D1] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Core Skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'React Native', 'MongoDB', 'REST APIs', 'Express'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#151F2C] border border-[#232E3B] text-[#EAF0F6] hover:border-[#64F0D1]/50 hover:text-[#64F0D1] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Floating Decorative Badges */}
            <div className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-xl bg-[#101721] border border-[#64F0D1]/40 text-[#64F0D1] text-xs font-mono shadow-lg shadow-black/40 hidden sm:flex items-center gap-1.5 animate-float">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Stack Ready</span>
            </div>

            <div className="absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-xl bg-[#101721] border border-[#7B9CFF]/40 text-[#7B9CFF] text-xs font-mono shadow-lg shadow-black/40 hidden sm:flex items-center gap-1.5 animate-float" style={{ animationDelay: '2.5s' }}>
              <Code2 className="w-3.5 h-3.5" />
              <span>Web & Mobile</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
