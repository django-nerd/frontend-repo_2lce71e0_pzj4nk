import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-gray-900 tracking-tight text-lg">
          <span className="inline-block align-middle bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Dev Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
