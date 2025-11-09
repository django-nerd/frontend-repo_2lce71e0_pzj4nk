import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something visionary</h2>
        <p className="mt-3 text-white/70">Available for freelance and select collaborations.</p>
        <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 p-2 shadow-sm">
          <a href="mailto:you@example.com" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-sm font-semibold hover:opacity-95 transition">Email Me</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="ml-2 px-5 py-3 rounded-full bg-transparent text-white/90 text-sm font-semibold border border-white/15 hover:bg-white/5 transition">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
