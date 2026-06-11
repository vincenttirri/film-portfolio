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
const [showVideo, setShowVideo] = useState(false);
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

        {/* NAV */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">

          <h1 className="tracking-[0.35em] text-sm text-gray-300">
            VINCENT TIRRI
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">

            <a href="/" className="hover:text-emerald-400 transition">
              HOME
            </a>

            <a href="/about" className="hover:text-emerald-400 transition">
              ABOUT
            </a>

            <a href="/pre-production" className="hover:text-emerald-400 transition">
              PRE-PRODUCTION
            </a>

            <a href="/production" className="hover:text-emerald-400 transition">
              PRODUCTION
            </a>

            <a href="/Post-Production" className="hover:text-emerald-400 transition">
              POST PRODUCTION
            </a>

            <a href="/Experiences" className="hover:text-emerald-400 transition">
              EXPERIENCES
            </a>

            <a href="/exit-exam" className="text-emerald-400">
              EXIT EXAM
            </a>

          </div>

        </nav>

        {/* HEADER */}
        <section className="px-8 py-12 max-w-6xl mx-auto">

          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase">
            Exit Exam Portfolio
          </p>

          <h1 className="text-5xl font-light mt-3">
            The Sanctuary For All
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl">
            This project documents the complete production process behind
            The Sanctuary For All, from initial concept development to
            final delivery. Included are the original pitch materials,
            screenplay, shot planning documents, finished film, and
            reflection paper discussing the creative and technical process.
          </p>

        </section>

        {/* DOCUMENT NAV */}
        <section className="px-8 max-w-6xl mx-auto mb-10">

          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

            <button
              onClick={() =>
                setActiveFile({
                  title: 'Pitch Deck',
                  file: 'The Sanctuary for All.pdf',
                  thumb: 'Sanctuary Thumb.jpg',
                  type: 'pdf',
                })
              }
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition"
            >
              Pitch
            </button>

            <button
              onClick={() =>
                setActiveFile({
                  title: 'Script',
                  file: 'Sanctuary script.pdf',
                  thumb: 'Sanctuary script_page-0001.jpg',
                  type: 'pdf',
                })
              }
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition"
            >
              Script
            </button>

            <button
              onClick={() =>
                setActiveFile({
                  title: 'Shot Sheet',
                  file: 'TSFA SL.pdf',
                  thumb: 'SL thumb.jpg',
                  type: 'pdf',
                })
              }
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition"
            >
              Shot Sheet
            </button>

            <button
              onClick={() =>
                setActiveFile({
                  title: 'Reflection Paper',
                  file: 'Reflection paper.pdf',
                  thumb: 'Reflection paper_page-0001.jpg',
                  type: 'pdf',
                })
              }
              className="px-4 py-2 border border-white/10 hover:border-emerald-400 transition"
            >
              Reflection
            </button>

          </div>

        </section>

       {/* FILM */}
        <section className="px-8 max-w-6xl mx-auto">

          <p className="text-emerald-400 text-xs tracking-[0.4em] uppercase">
            Final Production
          </p>

          <h2 className="text-3xl font-light mt-2">
            The Sanctuary For All
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl">
            A documentary exploring community, faith, and service through
            interviews and observational storytelling.
          </p>

          <div className="mt-6 aspect-video border border-white/10 overflow-hidden">

            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="relative w-full h-full group"
              >

                <img
                  src="TSFA THUMB.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-black/70 border border-white/20 flex items-center justify-center group-hover:scale-110 transition">

                    <span className="text-3xl ml-1">
                      ▶
                    </span>

                  </div>

                </div>

              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/tdCZIEcx7uc?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}

          </div>

        </section>

        {/* FULLSCREEN VIEWER */}
        {activeFile && (
          <div
            onClick={() => setActiveFile(null)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
          >
            <div className="w-full max-w-5xl h-[90vh] border border-white/20 bg-black">

              <iframe
                src={activeFile.file}
                className="w-full h-full"
              />

            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10">
          EXIT EXAM ARCHIVE SYSTEM
        </footer>

      </div>

    </div>
  );
}