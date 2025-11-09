import React from 'react';

const projects = [
  {
    title: 'Volumetric 3D Landing',
    description: 'Spline hero with scroll‑zoom and custom motion system.',
    tags: ['Spline', 'Framer Motion', 'UX'],
    link: '#'
  },
  {
    title: 'Interactive Data Viz',
    description: 'Animated charts with buttery panning & zoom.',
    tags: ['React', 'D3'],
    link: '#'
  },
  {
    title: 'Realtime Collab Notes',
    description: 'Presence avatars, CRDT syncing, offline support.',
    tags: ['React', 'WebRTC'],
    link: '#'
  },
  {
    title: 'Commerce UI Kit',
    description: 'Accessible components, cart and checkout flows.',
    tags: ['Tailwind', 'Design System'],
    link: '#'
  }
];

export default function PortfolioGrid() {
  return (
    <section id="work" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Interactive builds, product experiments, and client deliveries.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition">Start a project</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 blur-2xl group-hover:from-cyan-500/20 group-hover:to-fuchsia-500/20" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-white/60">→</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
