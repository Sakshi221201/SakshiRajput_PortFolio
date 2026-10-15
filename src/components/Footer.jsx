import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-[#232E3B] bg-[#080C12] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a
              href="#hero"
              onClick={handleScrollToTop}
              className="font-heading text-xl font-bold tracking-tight text-[#EAF0F6] hover:text-white transition-colors"
            >
              sakshi<span className="text-[#64F0D1]">.</span>
            </a>
            <span className="hidden sm:inline text-[#232E3B]">•</span>
            <p className="text-xs text-[#98A5B6]">
              Designed and built with React.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#98A5B6] hover:text-[#64F0D1] hover:bg-[#101721] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#98A5B6] hover:text-[#7B9CFF] hover:bg-[#101721] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <span className="text-[#232E3B]">•</span>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#98A5B6] hover:text-[#64F0D1] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Dynamic Copyright */}
        <div className="mt-8 pt-6 border-t border-[#232E3B]/40 text-center text-xs font-mono text-[#98A5B6]/70">
          © {currentYear} Sakshi Rajput. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
