import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 100);

  return (
    <div className="min-h-screen bg-[#080C12] text-[#EAF0F6] flex flex-col selection:bg-[#64F0D1]/20 selection:text-[#64F0D1]">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
