'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  title: string;
  slug: string;
  type: 'short' | 'music' | 'doc' | 'commercial' | 'audio';
  thumb: string;
  video: string;
  logline: string;
  role: string;
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
      role: "Director / Editor"
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
      logline: "Emotional visual soundscape.",
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
      logline: "Real-world observational storytelling.",
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

  // ================= CAROUSEL LOGIC =================
  const visibleCount = 4;

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisible = () => {
    let result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(projects[(index + i) % projects.length]);
    }
    return result;
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* NAV (FIXED) */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          PRODUCTION ARCHIVE
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <Link href="/about" className="hover:text-emerald-400">About</Link>
          <Link href="/pre-production" className="hover:text-emerald-400">Pre-Pro</Link>
          <Link href="/production" className="text-emerald-400">Production</Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-light">Production Archive</h1>
        <p className="text-gray-400 mt-3">
          Short Films, Music Videos, Documentaries, Commercials, and Audio Work.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-4">

          <button onClick={prev} className="text-2xl text-gray-400 hover:text-emerald-400">
            ←
          </button>

          <button onClick={next} className="text-2xl text-gray-400 hover:text-emerald-400">
            →
          </button>

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
                <p className="text-sm capitalize">{p.type.replace('_', ' ')}</p>
                <p className="text-xs text-gray-400">{p.role}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* MODAL PLAYER */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
        >
          <div className="w-full max-w-5xl h-[80vh]">

            <iframe
              src={activeVideo.video}
              className="w-full h-full"
              allowFullScreen
            />

          </div>
        </div>
      )}

    </main>
  );
}