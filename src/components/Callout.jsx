import React from 'react';

// Centered CTA with premium look
export default function Callout() {
  return (
    <section className="relative bg-neutral-950 text-white py-24">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[70%] bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/80">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
          PREMIUM PARTNERSHIPS OPEN
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Let’s elevate your next release</h2>
        <p className="mt-3 text-white/70">From immersive landing pages to high‑polish product interfaces, I bring motion, 3D, and engineering together.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Book a call</a>
          <a href="#work" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition">See case studies</a>
        </div>
      </div>
    </section>
  );
}
