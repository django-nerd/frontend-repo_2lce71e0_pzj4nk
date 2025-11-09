import React from 'react';

// A seamless, looping marquee of logos/keywords with neon accents
export default function FeaturesRail() {
  const items = [
    'Spline', 'Three.js', 'React', 'Framer Motion', 'FastAPI', 'Tailwind', 'WebGL', 'TypeScript', 'UX', 'Shaders'
  ];

  // Duplicate list for continuous loop
  const loop = [...items, ...items, ...items];

  return (
    <section className="relative bg-neutral-950 text-white py-10 border-y border-white/10">
      {/* Local keyframes to avoid changing Tailwind config */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden">
          <div
            className="flex min-w-max gap-6 whitespace-nowrap will-change-transform"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {loop.map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
