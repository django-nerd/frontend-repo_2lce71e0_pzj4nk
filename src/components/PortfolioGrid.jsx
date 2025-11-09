import React from 'react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'WebSockets, authentication, and message persistence.',
    tags: ['React', 'Node', 'Socket.io'],
    link: '#'
  },
  {
    title: 'E‑commerce UI',
    description: 'Product browsing, cart, and checkout flows.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Charts, filters, and role-based access.',
    tags: ['React', 'D3', 'Auth'],
    link: '#'
  },
  {
    title: '3D Landing Page',
    description: 'Immersive hero using Spline and smooth scroll.',
    tags: ['Spline', 'Framer Motion'],
    link: '#'
  }
];

export default function PortfolioGrid() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A mix of client projects, experiments, and open‑source work.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">{p.title}</h3>
                <span className="text-xs text-gray-500">→</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
