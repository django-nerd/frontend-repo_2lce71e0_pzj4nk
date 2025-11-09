import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Crafting with code and curiosity</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I design and engineer interfaces that feel effortless and memorable. My focus blends performant React, tasteful motion, and immersive 3D to help products communicate with clarity and personality.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            From rapid prototypes to production apps, I advocate for accessibility, well-structured systems, and code that scales.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            ['React & TS', 'Modern apps, SSR, Suspense'],
            ['Three.js', '3D scenes & shaders'],
            ['Spline', 'Interactive hero visuals'],
            ['Tailwind', 'Design systems at speed'],
            ['Framer Motion', 'Micro‑interactions'],
            ['FastAPI', 'APIs and services']
          ].map(([title, desc]) => (
            <li key={title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-sm">
              <p className="text-xs text-white/60">{title}</p>
              <p className="mt-1 font-medium">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
