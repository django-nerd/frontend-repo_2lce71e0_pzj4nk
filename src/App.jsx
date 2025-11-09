import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import PortfolioGrid from './components/PortfolioGrid.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioGrid />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950/80">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="mailto:you@example.com" className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/5 transition">Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/5 transition">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 hover:bg-white/5 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
