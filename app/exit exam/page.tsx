'use client';

import { useState } from 'react';

type Asset = {
  title: string;
  file: string;
  thumb: string;
  type: 'pdf' | 'image';
};

export default function ExitExamPage() {
  const [activeFile, setActiveFile] = useState<Asset | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  const planningDocs: Asset[] = [
    {
      title: 'Pitch Deck',
      file: 'The Sanctuary for All.pdf',
      thumb: 'Sanctuary Thumb.jpg',
      type: 'pdf',
    },
    {
      title: 'Shot Sheet',
      file: 'TSFA SL.pdf',
      thumb: 'SL thumb.jpg',
      type: 'pdf',
    },
  ];

  const writtenDocs: Asset[] = [
    {
      title: 'Script',
      file: 'Sanctuary script.pdf',
      thumb: 'Sanctuary script_page-0001.jpg',
      type: 'pdf',
    },
    {
      title: 'Reflection Paper',
      file: 'Reflection paper.pdf',
      thumb: 'Reflection paper_page-0001.jpg',
      type: 'pdf',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <div className="relative z-10">

        {/* NAV (UNCHANGED) */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
          <h1 className="tracking-[0.35em] text-sm text-gray-300">
            VINCENT TIRRI
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-emerald-400 transition">HOME</a>
            <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
            <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
            <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
            <a href="/Post-Production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
            <a href="/Experiences" className="hover:text-emerald-400 transition">EXPERIENCES</a>
            <a href="/exit-exam" className="text-emerald-400">EXIT EXAM</a>
          </div>
        </nav>

        {/* HEADER (UNCHANGED) */}
        <section className="px-8 py-12 max-w-6xl mx-auto">
          <h1 className="text-5xl font-light mt-3">
            The Sanctuary For All
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl">
            This project documents the complete production process behind
            The Sanctuary For All.
          </p>
        </section>

        {/* DOCUMENT NAV (UNCHANGED) */}
        <section className="px-8 max-w-6xl mx-auto mb-10">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

            <button onClick={() => setActiveFile(planningDocs[0])}
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition">
              Pitch
            </button>

            <button onClick={() => setActiveFile(writtenDocs[0])}
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition">
              Script
            </button>

            <button onClick={() => setActiveFile(planningDocs[1])}
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition">
              Shot Sheet
            </button>

            <button onClick={() => setActiveFile(writtenDocs[1])}
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition">
              Reflection
            </button>

          </div>
        </section>

        {/* VIDEO WITH CUSTOM THUMBNAIL */}
        <section className="px-8 max-w-6xl mx-auto">

          <h2 className="text-3xl font-light mb-4">Final Production</h2>

          <div className="relative aspect-video border border-white/10 overflow-hidden">

            {!videoStarted ? (
              <div
                onClick={() => setVideoStarted(true)}
                className="cursor-pointer w-full h-full relative"
              >

                <img
                  src="/video-thumbnail.jpg"
                  className="w-full h-full object-cover"
                  alt="Video Thumbnail"
                />

                {/* PLAY OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-emerald-400 text-2xl tracking-widest border border-emerald-400 px-6 py-3">
                    PLAY FILM
                  </div>
                </div>

              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/tdCZIEcx7uc?rel=0"
                title="The Sanctuary For All"
                className="w-full h-full"
                allowFullScreen
              />
            )}

          </div>

        </section>

        {/* DOCUMENT GRID (UNCHANGED) */}
        <section className="px-8 py-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="border border-white/10 p-6">
            <h2 className="text-2xl font-light mb-5">Planning Documents</h2>

            <div className="flex gap-4 overflow-x-auto pb-3">
              {planningDocs.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[280px] cursor-pointer border border-white/10 hover:border-emerald-400/50"
                >
                  <img src={item.thumb} className="h-[200px] w-full object-cover" />
                  <div className="p-3 text-sm">{item.title}</div>
                </div>
              ))}
            </div>

          </div>

          <div className="border border-white/10 p-6">
            <h2 className="text-2xl font-light mb-5">Written Documents</h2>

            <div className="flex gap-4 overflow-x-auto pb-3">
              {writtenDocs.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[220px] cursor-pointer border border-white/10 hover:border-emerald-400/50"
                >
                  <div className="h-[320px] overflow-hidden">
                    <img
                      src={item.thumb}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 text-sm">{item.title}</div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* FOOTER (UNCHANGED) */}
        <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10">
          EXIT EXAM ARCHIVE SYSTEM
        </footer>

        {/* MODAL VIEWER */}
        {activeFile && (
          <div
            onClick={() => setActiveFile(null)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
          >
            <div className="w-full max-w-5xl h-[90vh] border border-white/20 bg-black">
              <iframe src={activeFile.file} className="w-full h-full" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}