import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

// Scroll-driven hero: person at computer. As you scroll, the scene subtly zooms in
// to create a transition toward the portfolio below.
export default function Hero() {
  const [progress, setProgress] = useState(0); // 0 -> 1 across the hero scroll area
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight; // scrollable distance inside this section
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
    <section ref={sectionRef} id="home" className="relative w-full h-[200vh]">
      {/* Sticky viewport holding the interactive scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0 will-change-transform" style={{ transform: `scale(${scale})` }}>
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Gradient overlay for readability; does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/0 to-white/80" />

        {/* Headline content that fades as you scroll */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div
            className="max-w-3xl transition-opacity duration-200"
            style={{ opacity: Math.max(0, Math.min(1, titleOpacity)) }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              I build modern web experiences
            </h1>
            <p className="mt-4 text-gray-700">
              Frontend-focused developer crafting interactive, performant apps.
            </p>
            <p className="mt-6 text-sm text-gray-500">Scroll to explore my work ↓</p>
          </div>
        </div>
      </div>
    </section>
  );
}
