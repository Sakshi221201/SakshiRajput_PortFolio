import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import profilePhoto from '../assets/Sakshi_Profile_Photo.jpg';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C12]/90 backdrop-blur-md border-b border-[#232E3B]/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Avatar */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Sakshi Rajput - Home"
          >
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Sakshi Rajput"
                className="w-8 h-8 rounded-full object-cover border border-[#64F0D1]/60 group-hover:border-[#64F0D1] shadow-[0_0_10px_rgba(100,240,209,0.3)] transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10B981] border border-[#080C12]" />
            </div>
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#EAF0F6] group-hover:text-white transition-colors">
              sakshi<span className="text-[#64F0D1] inline-block group-hover:scale-125 transition-transform">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#64F0D1]'
                      : 'text-[#98A5B6] hover:text-[#EAF0F6] hover:bg-[#101721]/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#64F0D1] rounded-full shadow-[0_0_8px_#64F0D1]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Highlighted CTA Button ("Let's Talk") */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#080C12] bg-[#64F0D1] hover:bg-[#7ff3d9] transition-all duration-300 shadow-[0_0_20px_rgba(100,240,209,0.3)] hover:shadow-[0_0_25px_rgba(100,240,209,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#98A5B6] hover:text-[#64F0D1] hover:bg-[#101721] border border-[#232E3B] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#080C12]/95 backdrop-blur-xl border-b border-[#232E3B] z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#101721] text-[#64F0D1] border border-[#64F0D1]/30 font-semibold'
                      : 'text-[#EAF0F6] hover:bg-[#101721] hover:text-[#64F0D1]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#64F0D1] shadow-[0_0_6px_#64F0D1]" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#232E3B] flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-[#080C12] bg-[#64F0D1] hover:bg-[#7ff3d9] transition-colors shadow-lg shadow-[#64F0D1]/20"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-xs text-[#98A5B6] px-2">
              <span>{personalInfo.location}</span>
              <span className="flex items-center gap-1 text-[#64F0D1]">
                <span className="w-2 h-2 rounded-full bg-[#64F0D1] animate-ping" />
                Available for work
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
