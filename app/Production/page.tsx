'use client';



import { useState } from 'react';



type Project = {
  title: string;
  slug: string;
  type: 'short' | 'music' | 'doc' | 'commercial' | 'audio'
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
    logline: "A narrative music video for a Tony and the Trees song created for the SkillsUSA Digital cinema state competition.",
    role: "Director / Colorist"
  },
  {
    title: "Somewhere Only We Know",
    slug: "Shadows Become Subtance original cover",
    type: "music",
    thumb: "SOWK THUMBjpg",
    video: "https://www.youtube.com/embed/cBNgz-ZsEiU",
    logline: "A narrative music video for a cover of Keane's Somewhere Only We Know produced by Vincent's band Shadows Become Substance",
    role: "Director / Actor / Editor / Writer"
  },
  {
    title: "Documentary 1",
    slug: "doc-1",
    type: "doc",
    thumb: "/doc1.jpg",
    video: "https://www.youtube.com/embed/xxxx",
    logline: "Observational storytelling.",
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
    logline: "Brand storytelling.",
    role: "Director / Editor"
  },
  {
    title: "Audio Editing Project",
    slug: "audio",
    type: "audio",
    thumb: "/audio.jpg",
    video: "https://www.youtube.com/embed/xxxx",
    logline: "Sound design narrative work.",
    role: "Sound Editor"
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

  const visibleCount = 4;

  const getVisible = (type: Project['type']) => {
    const list = getByType(type);
    const start = index[type];

    return Array.from({ length: Math.min(visibleCount, list.length) }).map(
      (_, i) => list[(start + i) % list.length]
    );
  };

  const next = (type: Project['type']) => {
    const len = getByType(type).length;
    setIndex(prev => ({
      ...prev,
      [type]: (prev[type] + 1) % len
    }));
  };

  const prev = (type: Project['type']) => {
    const len = getByType(type).length;
    setIndex(prev => ({
      ...prev,
      [type]: (prev[type] - 1 + len) % len
    }));
  };

  const featured = projects.find(p => p.featured);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          PRODUCTION ARCHIVE
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/pre-production">PRE-PRODUCTION</a>
          <a href="/production" className="text-emerald-400">PRODUCTION</a>
        </div>
      </nav>

      {/* FEATURED FILM */}
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

          <div className="mt-6 aspect-video border border-white/10">
            <iframe
              src={featured.video}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

        </section>
      )}

      {/* SECTION NAV BUTTONS */}
      <section className="px-8 max-w-6xl mx-auto relative z-10 mb-10">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a href="#short" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Short Films
          </a>

          <a href="#music" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Music Videos
          </a>

          <a href="#doc" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Documentaries
          </a>

          <a href="#commercial" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Commercial
          </a>

          <a href="#audio" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Audio Editing
          </a>

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
    const list = getByType(type);

    return (
      <section
        id={type}
        className="px-8 pb-16 max-w-6xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light">{title}</h2>

          <div className="flex gap-4 text-2xl text-gray-400">
            <button onClick={() => prev(type)}>←</button>
            <button onClick={() => next(type)}>→</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">

          {getVisible(type).map((p) => (
            <div
              key={p.slug}
              onClick={() => setActiveVideo(p)}
              className="border border-white/10 hover:border-emerald-400 cursor-pointer"
            >

              <div className="h-[300px] overflow-hidden">
                <img
                  src={p.thumb}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3">
                <p className="text-sm capitalize">{p.type}</p>
                <p className="text-xs text-gray-500">{p.role}</p>
              </div>

            </div>
          ))}

        </div>

      </section>
    );
  }
}

