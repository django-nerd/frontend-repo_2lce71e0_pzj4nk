import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-neutral-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          <span className="inline-block align-middle bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Futurist.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
