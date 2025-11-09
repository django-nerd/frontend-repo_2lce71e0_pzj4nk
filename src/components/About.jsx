import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hi, I’m a Developer</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I design and build clean, performant interfaces with a focus on delightful UX. My toolkit includes React, TypeScript, Node, and cloud services. I care about accessibility, motion, and maintainable code.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Beyond work, I enjoy experimenting with creative coding and 3D on the web. If you have an interesting idea, let’s talk.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {[
            ['React', 'Hooks, Suspense, SSR'],
            ['TypeScript', 'typed safety everywhere'],
            ['Node & FastAPI', 'APIs and services'],
            ['Tailwind', 'rapid, consistent UI'],
          ].map(([title, desc]) => (
            <li key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">{title}</p>
              <p className="mt-1 font-medium text-gray-900">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
