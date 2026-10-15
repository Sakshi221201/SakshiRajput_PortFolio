import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry - Sakshi Rajput');
    const body = encodeURIComponent(
      `Hi Sakshi,\n\nMy name is ${formData.name || '[Name]'}.\n\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''} (${formData.email || ''})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#232E3B]/60 bg-[#080C12]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#64F0D1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-[#64F0D1] uppercase mb-3">
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EAF0F6] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-base sm:text-lg text-[#98A5B6] leading-relaxed">
            I'm open to discussing software development opportunities, interesting projects, and new ideas. Feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Action */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#101721] border border-[#232E3B] space-y-6 shadow-xl">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#EAF0F6] mb-2">
                  Let's start a conversation
                </h3>
                <p className="text-sm text-[#98A5B6] leading-relaxed">
                  Whether you have an open Full Stack Developer role, a freelance inquiry, or simply want to connect, my inbox is always open.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[#080C12] border border-[#232E3B] space-y-2">
                <span className="text-xs font-mono text-[#98A5B6]">PRIMARY EMAIL</span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm text-[#64F0D1] hover:underline truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#98A5B6] hover:text-[#64F0D1] hover:bg-[#151F2C] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#64F0D1]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct "Say Hello" CTA Button */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-[#080C12] bg-[#64F0D1] hover:bg-[#7ff3d9] transition-all duration-300 shadow-[0_0_20px_rgba(100,240,209,0.3)] hover:shadow-[0_0_30px_rgba(100,240,209,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Say Hello</span>
                </a>
              </div>

              {/* Location & Socials */}
              <div className="pt-6 border-t border-[#232E3B] space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#98A5B6]">
                  <MapPin className="w-4 h-4 text-[#64F0D1]" />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#080C12] border border-[#232E3B] text-xs font-mono text-[#98A5B6] hover:text-[#64F0D1] hover:border-[#64F0D1]/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-[#98A5B6]" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#080C12] border border-[#232E3B] text-xs font-mono text-[#98A5B6] hover:text-[#7B9CFF] hover:border-[#7B9CFF]/40 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3 h-3 text-[#98A5B6]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Clear Frontend Demo) */}
          <div className="lg:col-span-7">
            
            <div className="p-8 rounded-2xl bg-[#101721] border border-[#232E3B] shadow-xl relative">
              
              {/* Demo Notice Banner */}
              <div className="mb-6 p-3 rounded-xl bg-[#080C12] border border-[#232E3B] flex items-start gap-2.5 text-xs text-[#98A5B6]">
                <AlertCircle className="w-4 h-4 text-[#64F0D1] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#EAF0F6]">Frontend Demo:</strong> This form demonstrates client-side validation and layout. You can also click <em>Say Hello</em> on the left or use the pre-fill action below to open your email client directly.
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#64F0D1]/20 border border-[#64F0D1] flex items-center justify-center mx-auto text-[#64F0D1]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#EAF0F6]">
                    Demo Form Ready!
                  </h4>
                  <p className="text-sm text-[#98A5B6] max-w-md mx-auto">
                    To send this message directly to Sakshi, click the button below to launch your email client with your details prefilled:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#080C12] bg-[#64F0D1] hover:bg-[#7ff3d9] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-xl text-sm font-medium text-[#98A5B6] hover:text-[#EAF0F6] bg-[#080C12] border border-[#232E3B]"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-[#98A5B6] mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#080C12] border border-[#232E3B] text-sm text-[#EAF0F6] placeholder-[#98A5B6]/40 focus:border-[#64F0D1] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-[#98A5B6] mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080C12] border border-[#232E3B] text-sm text-[#EAF0F6] placeholder-[#98A5B6]/40 focus:border-[#64F0D1] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-[#98A5B6] mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#080C12] border border-[#232E3B] text-sm text-[#EAF0F6] placeholder-[#98A5B6]/40 focus:border-[#64F0D1] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-[#98A5B6] mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080C12] border border-[#232E3B] text-sm text-[#EAF0F6] placeholder-[#98A5B6]/40 focus:border-[#64F0D1] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-[#EAF0F6] bg-[#151F2C] hover:bg-[#1f2d3f] border border-[#232E3B] hover:border-[#64F0D1]/50 transition-all duration-300"
                    >
                      <Send className="w-4 h-4 text-[#64F0D1]" />
                      <span>Send Message (Demo)</span>
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
