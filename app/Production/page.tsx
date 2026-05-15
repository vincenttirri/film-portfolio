'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  title: string;
  slug: string;
  type: 'short' | 'music' | 'doc' | 'commercial' | 'audio';
  thumb: string;
  video?: string;
  logline: string;
  role: string;
  featured?: boolean;
};

export default function ProductionPage() {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      title: "FEATURED SHORT FILM",
      slug: "featured-short-film",
      type: "short",
      thumb: "/short1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "A filmmaker struggles to distinguish reality from the stories he creates.",
      role: "Director / Editor",
      featured: true
    },
    {
      title: "Music Video 1",
      slug: "music-video-1",
      type: "music",
      thumb: "/music1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Visual interpretation of sound and emotion.",
      role: "Director"
    },
    {
      title: "Documentary 1",
      slug: "doc-1",
      type: "doc",
      thumb: "/doc1.jpg",
      video: "https://www.youtube.com/embed/xxxx",
      logline: "Observational storytelling of real subjects.",
      role: "Director / Camera"
    }
  ];

  const featured = projects.find(p => p.featured);

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter(p => p.type === filter);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative z-10">

        {/* NAV */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
          <h1 className="tracking-[0.35em] text-sm text-gray-300">
            PRODUCTION ARCHIVE
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <Link href="/about" className="hover:text-emerald-400">About</Link>
            <Link href="/pre-production" className="hover:text-emerald-400">Pre</Link>
            <Link href="/production" className="text-emerald-400">Production</Link>
          </div>
        </nav>

        {/* FEATURED HERO (UPGRADED CINEMATIC SPOTLIGHT) */}
        {featured && (
          <section className="relative px-8 py-16 max-w-6xl mx-auto">

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

            <div className="relative z-10 max-w-2xl">

              <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
                Featured Film
              </p>

              <h1 className="text-5xl font-light mt-3">
                {featured.title}
              </h1>

              <p className="text-gray-400 mt-4">
                {featured.logline}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Role: {featured.role}
              </p>

              <Link
                href={`/production/${featured.slug}`}
                className="inline-block mt-6 border border-emerald-400 px-6 py-2 text-sm uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition"
              >
                Enter Film
              </Link>

            </div>

          </section>
        )}

        {/* FILTER BAR (NETFLIX STYLE) */}
        <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-y border-white/10 px-8 py-3 flex gap-3 text-xs uppercase tracking-[0.3em]">

          {['all', 'short', 'music', 'doc', 'commercial', 'audio'].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1 border transition ${
                filter === t
                  ? 'border-emerald-400 text-emerald-400'
                  : 'border-white/10 text-gray-400'
              }`}
            >
              {t}
            </button>
          ))}

        </div>

        {/* ARCHIVE ROW */}
        <section className="px-8 py-10 max-w-6xl mx-auto">

          <div className="flex gap-4 overflow-x-auto pb-4">

            {filtered.map(p => (
              <Link
                key={p.slug}
                href={`/production/${p.slug}`}
                className="min-w-[260px] border border-white/10 hover:border-emerald-400/50 transition group"
              >

                <div className="h-[340px] relative overflow-hidden">

                  <img
                    src={p.thumb}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* hover play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
                      ▶
                    </div>
                  </div>

                </div>

                <div className="p-3">
                  <p className="text-sm">{p.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{p.role}</p>
                </div>

              </Link>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}