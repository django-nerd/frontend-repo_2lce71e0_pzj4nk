import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something great</h2>
        <p className="mt-3 text-gray-600">I’m available for freelance and full‑time opportunities.</p>
        <div className="mt-8 inline-flex rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
          <a href="mailto:you@example.com" className="px-5 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">Email Me</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="ml-2 px-5 py-3 rounded-md bg-white text-gray-900 text-sm font-medium border border-gray-200 hover:bg-gray-50 transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
