'use client';

import { useState } from 'react';

type Project = {
  title: string;
  slug: string;
  type: 'short' | 'music' | 'doc' | 'commercial' | 'audio';
  thumb: string;
  video: string;
  logline: string;
  role: string;
  featured?: boolean;
};

export default function ProductionPage() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "FEATURED SHORT FILM",
      slug: "featured-short-film",
      type: "short",
      thumb: "/short1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "A filmmaker struggles to distinguish reality from fiction.",
      role: "Director / Editor",
      featured: true
    },
    {
      title: "Short Film 2",
      slug: "short-film-2",
      type: "short",
      thumb: "/short2.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "TBD",
      role: "Director"
    },

    {
      title: "Music Video 1",
      slug: "music-video-1",
      type: "music",
      thumb: "/music1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Emotional visual storytelling.",
      role: "Director"
    },
    {
      title: "Music Video 2",
      slug: "music-video-2",
      type: "music",
      thumb: "/music2.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "TBD",
      role: "Director"
    },

    {
      title: "Documentary 1",
      slug: "doc-1",
      type: "doc",
      thumb: "/doc1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Observational real-world storytelling.",
      role: "Director / Camera"
    },
    {
      title: "Documentary 2",
      slug: "doc-2",
      type: "doc",
      thumb: "/doc2.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "TBD",
      role: "Camera"
    },
    {
      title: "Documentary 3",
      slug: "doc-3",
      type: "doc",
      thumb: "/doc3.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "TBD",
      role: "Editor"
    },

    {
      title: "Commercial Project",
      slug: "commercial",
      type: "commercial",
      thumb: "/commercial.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Brand storytelling piece.",
      role: "Director / Editor"
    },

    {
      title: "Audio Editing Project",
      slug: "audio-project",
      type: "audio",
      thumb: "/audio.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Sound design narrative composition.",
      role: "Sound Editor"
    }
  ];

  const visibleCount = 4;

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisible = () => {
    return Array.from({ length: visibleCount }).map(
      (_, i) => projects[(index + i) % projects.length]
    );
  };

  const featured = projects.find(p => p.featured);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* KEEP YOUR BACKGROUND STYLE */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative z-10">

        {/* NAV (UPDATED TEXT ONLY) */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
          <h1 className="tracking-[0.35em] text-sm text-gray-300">
            PRODUCTION ARCHIVE
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-emerald-400">HOME</a>
            <a href="/about" className="hover:text-emerald-400">ABOUT</a>
            <a href="/pre-production" className="hover:text-emerald-400">PRE-PRODUCTION</a>
            <a href="/production" className="text-emerald-400">PRODUCTION</a>
          </div>
        </nav>

        {/* FEATURED FILM (UNCHANGED FEEL) */}
        {featured && (
          <section className="px-8 py-12 max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
              Featured Film
            </p>

            <h1 className="text-5xl font-light mt-3">
              {featured.title}
            </h1>

            <p className="text-gray-400 mt-4 max-w-2xl">
              {featured.logline}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Role: {featured.role}
            </p>
          </section>
        )}

        {/* CAROUSEL (4 ITEMS + ARROWS + WRAP) */}
        <section className="px-8 pb-20 max-w-6xl mx-auto">

          <div className="flex justify-between mb-4 text-2xl text-gray-400">
            <button onClick={prev} className="hover:text-emerald-400">←</button>
            <button onClick={next} className="hover:text-emerald-400">→</button>
          </div>

          <div className="grid grid-cols-4 gap-4">

            {getVisible().map((p) => (
              <div
                key={p.slug}
                onClick={() => setActiveVideo(p)}
                className="border border-white/10 hover:border-emerald-400 transition cursor-pointer"
              >

                <div className="h-[320px] overflow-hidden">
                  <img
                    src={p.thumb}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>

                <div className="p-3">
                  <p className="text-sm capitalize">
                    {p.type.replace('_', ' ')}
                  </p>
                  <p className="text-xs text-gray-500">{p.role}</p>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* MODAL (FIXED FOR ALL TYPES) */}
        {activeVideo && (
          <div
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
          >
            <div className="w-full max-w-5xl h-[80vh] border border-white/10">

              <iframe
                src={activeVideo.video}
                className="w-full h-full"
                allowFullScreen
              />

            </div>
          </div>
        )}

      </div>
    </main>
  );
}