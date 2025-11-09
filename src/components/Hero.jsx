import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Sticky, scroll-zoom hero using Spline with a futuristic cyan/purple aesthetic
export default function Hero() {
  const [progress, setProgress] = useState(0); // 0 -> 1 across the hero scroll area
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scale from 1 to 1.6 as user scrolls; fade out headline
  const scale = 1 + progress * 0.6;
  const titleOpacity = 1 - progress * 1.2;

  return (
    <section ref={sectionRef} id="home" className="relative w-full h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Spline Scene */}
        <div className="absolute inset-0 will-change-transform" style={{ transform: `scale(${scale})` }}>
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Decorative corner glows that don't block interaction */}
        <div className="pointer-events-none absolute -inset-40 opacity-60">
          <div className="absolute right-[-10%] top-[-10%] h-80 w-80 rounded-full blur-[90px] bg-cyan-500/30" />
          <div className="absolute left-[-10%] bottom-[-10%] h-80 w-80 rounded-full blur-[90px] bg-fuchsia-500/30" />
        </div>

        {/* Readability gradient overlay; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/20 to-neutral-950" />

        {/* Headline content that fades as you scroll */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div
            className="max-w-4xl transition-opacity duration-200"
            style={{ opacity: Math.max(0, Math.min(1, titleOpacity)) }}
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              AVAILABLE FOR PROJECTS
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              Futuristic Web Experiences
            </h1>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Interactive 3D, elegant motion, and robust engineering for brands that want to stand out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#work" className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
                View Work
              </a>
              <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
