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

const projects: Project[] = [
  {
    title: "RADIOWORLD: The Sound of Static",
    slug: "featured-short-film",
    type: "short",
    thumb: "R THUMB V.jpg",
    video: "https://www.youtube.com/embed/ajE9T5lWaqM",
    logline: "A lone man stuck in an isolated experiment of control and temptation",
    role: "Director / Writer",
    featured: true
  },
  {
    title: "Mr. Mayor",
    slug: "10 Day Film Challenge",
    type: "short",
    thumb: "Mr. Mayor.jpg",
    video: "https://www.youtube.com/embed/ThEQJCd2vSQ",
    logline: "A film noir following a race to becoming mayor...by any means necessary",
    role: "Director"
  },
  {
    title: "Everything Above",
    slug: "SkillsUSA Digital Cinema",
    type: "music",
    thumb: "EA THUMB.jpg",
    video: "https://www.youtube.com/embed/oG0P8VhuqL4",
    logline: "A narrative music video for a Tony and the Trees song created for SkillsUSA.",
    role: "Director / Colorist"
  },
  {
    title: "Somewhere Only We Know",
    slug: "Shadows Become Substance cover",
    type: "music",
    thumb: "SOWK THUMB.jpg",
    video: "https://www.youtube.com/embed/cBNgz-ZsEiU",
    logline: "A narrative music video cover produced with Shadows Become Substance.",
    role: "Director / Actor / Writer / Editor"
  },
  {
    title: "The Sanctuary For All",
    slug: "Interview with Matthew Smith",
    type: "doc",
    thumb: "TSFA THUMB.jpg",
    video: "https://www.youtube.com/embed/tdCZIEcx7uc",
    logline: "A deep dive into a community hub in Butler, New Jersey.",
    role: "Director / Sound / Interviewer / Writer / Editor"
  },
  {
    title: "The Story of Brian King",
    slug: "Reality Suite drummer",
    type: "doc",
    thumb: "TSOBK THUMB.jpg",
    video: "https://www.youtube.com/embed/p1n2Aob98mQ",
    logline: "Interview with Brian King, drummer of Reality Suite.",
    role: "Director / Sound / Interviewer / Writer / Editor"
  },
  {
    title: "Once In Time, Now In Space",
    slug: "NASA HUNCH",
    type: "doc",
    thumb: "NH THUMB.jpg",
    video: "https://www.youtube.com/embed/DZ2SC8cq1P8",
    logline: "A timeline of NASA’s Artemis mission and future lunar exploration.",
    role: "Director / Writer / Editor"
  },
  {
    title: "Donut NV",
    slug: "Commercial",
    type: "commercial",
    thumb: "DNV THUMB.jpg",
    video: "https://www.youtube.com/embed/SQDyKNhNdkg",
    logline: "A local donut food truck commercial.",
    role: "Editor / Voice Over"
  },
  {
    title: "Revenge of the Sith",
    slug: "Audio project",
    type: "audio",
    thumb: "SW THUMB.jpg",
    video: "https://www.youtube.com/embed/4TqqUuOsVwQ",
    logline: "Audio editing parody of Star Wars.",
    role: "Sound Editor / Voice Over / Foley"
  }
];

export default function ProductionPage() {
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  const [index, setIndex] = useState<Record<string, number>>({
    short: 0,
    music: 0,
    doc: 0,
    commercial: 0,
    audio: 0
  });

  const getByType = (type: Project['type']) =>
    projects.filter(p => p.type === type);

  const getVisible = (type: Project['type']) => {
    const list = getByType(type);
    const start = index[type];

    return Array.from({ length: Math.min(4, list.length) }).map(
      (_, i) => list[(start + i) % list.length]
    );
  };

  const next = (type: Project['type']) => {
    const len = getByType(type).length;
    setIndex(prev => ({ ...prev, [type]: (prev[type] + 1) % len }));
  };

  const prev = (type: Project['type']) => {
    const len = getByType(type).length;
    setIndex(prev => ({ ...prev, [type]: (prev[type] - 1 + len) % len }));
  };

  const featured = projects.find(p => p.featured);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
  <h1 className="tracking-[0.35em] text-sm text-gray-300">
    PRODUCTION ARCHIVE
  </h1>

  <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
    <a href="/" className="hover:text-emerald-400 transition">HOME</a>
    <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
    <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
    <a href="/Production" className="hover:text-emerald-400 transition">PRODUCTION</a>
    <a href="/Post-Production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
  </div>
</nav>

      {/* FEATURED */}
      {featured && (
        <section className="px-8 py-10 max-w-6xl mx-auto relative z-10">

          <p className="text-emerald-400 text-xs tracking-[0.4em] uppercase">
            Featured Film
          </p>

          <h1 className="text-4xl font-light mt-3">
            {featured.title}
          </h1>

          <p className="text-gray-400 mt-3 max-w-2xl">
            {featured.logline}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Role: {featured.role}
          </p>

          <div className="mt-6 aspect-video border border-white/10">
            <iframe
              src={featured.video}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

        </section>
      )}

      {/* SECTION BUTTONS */}
      <section className="px-8 max-w-6xl mx-auto mb-10 z-10 relative">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">
          <a href="#short" className="px-3 py-2 border border-white/10 hover:border-emerald-400">Short Films</a>
          <a href="#music" className="px-3 py-2 border border-white/10 hover:border-emerald-400">Music Videos</a>
          <a href="#doc" className="px-3 py-2 border border-white/10 hover:border-emerald-400">Documentaries</a>
          <a href="#commercial" className="px-3 py-2 border border-white/10 hover:border-emerald-400">Commercial</a>
          <a href="#audio" className="px-3 py-2 border border-white/10 hover:border-emerald-400">Audio Editing</a>
        </div>
      </section>

      {/* SECTIONS */}
      {renderSection("Short Films", "short")}
      {renderSection("Music Videos", "music")}
      {renderSection("Documentaries", "doc")}
      {renderSection("Commercial", "commercial")}
      {renderSection("Audio Editing", "audio")}

      {/* MODAL */}
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

  function renderSection(title: string, type: Project['type']) {
    return (
      <section id={type} className="px-8 pb-16 max-w-6xl mx-auto scroll-mt-24 z-10 relative">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-light">{title}</h2>

          <div className="flex gap-4 text-2xl text-gray-400">
            <button onClick={() => prev(type)}>←</button>
            <button onClick={() => next(type)}>→</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {getVisible(type).map(p => (
            <div
              key={p.slug}
              onClick={() => setActiveVideo(p)}
              className="border border-white/10 hover:border-emerald-400 cursor-pointer bg-black/40 overflow-hidden"
            >

              <div className="aspect-video overflow-hidden">
                <img
                  src={p.thumb}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">

                <h3 className="text-lg font-light">{p.title}</h3>

                <p className="text-xs text-emerald-400 uppercase tracking-[0.2em] mt-1">
                  {title}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {p.logline}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  Role: {p.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>
    );
  }
}