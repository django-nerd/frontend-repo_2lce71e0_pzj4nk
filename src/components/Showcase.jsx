import React, { useEffect, useRef } from 'react';

// A parallax showcase with depth layers and subtle tilt on mouse move
export default function Showcase() {
  const containerRef = useRef(null);
  const layersRef = useRef([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height;
      layersRef.current.forEach((layer, i) => {
        if (!layer) return;
        const depth = (i + 1) / layersRef.current.length; // 0..1
        const translateX = -dx * 20 * depth;
        const translateY = -dy * 20 * depth;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="relative bg-neutral-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Interactive Showcase</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A layered composition demonstrating depth, glass, and neon accents. Move your cursor to feel the parallax.</p>
          </div>
        </div>

        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { title: 'Holographic Card', desc: 'Glass morphism with moving glow.' },
            { title: 'Neon Panel', desc: 'Gradient stroke and vibrant edges.' },
            { title: 'Motion Tile', desc: 'Soft shadows with lift on hover.' },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl"
            >
              <div
                ref={(el) => (layersRef.current[idx] = el)}
                className="pointer-events-none absolute -inset-12 opacity-60"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/30 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/70">{item.desc}</p>
                <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900/60 p-5">
                  <div className="h-28 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.2),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(217,70,239,0.2),transparent_55%)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
