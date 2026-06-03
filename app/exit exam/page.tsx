'use client';

import { useState } from 'react';

type Document = {
  title: string;
  file: string;
  thumb: string;
};

const documents: Document[] = [
  {
    title: 'Pitch Deck',
    file: 'Exit Pitch.pdf',
    thumb: 'Exit Pitch Thumb.jpg',
  },
  {
    title: 'Script',
    file: 'Exit Script.pdf',
    thumb: 'Exit Script Thumb.jpg',
  },
  {
    title: 'Shot Sheet',
    file: 'Storyboard.pdf',
    thumb: 'Storyboard Thumb.jpg',
  },
  {
    title: 'Reflection Paper',
    file: 'Reflection Paper.pdf',
    thumb: 'Reflection Thumb.jpg',
  },
];

export default function ExitExamPage() {
  const [activeFile, setActiveFile] = useState<Document | null>(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXIT EXAM
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-emerald-400 transition">HOME</a>
          <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
          <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
          <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
          <a href="/Post-Production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
          <a href="/Experiences" className="hover:text-emerald-400 transition">EXPERIENCES</a>
          <a href="/Exit-Exam" className="text-emerald-400">EXIT EXAM</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-6xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Complete Production Portfolio
        </p>

        <h1 className="text-5xl font-light mt-3">
          The Sanctuary For All
        </h1>

        <p className="text-gray-400 mt-4 max-w-3xl">
          A complete showcase of my individual production process from
          initial concept through final delivery. Included are all
          pre-production materials, the finished documentary, and a
          written reflection discussing the project's development.
        </p>

      </section>

      {/* FEATURED FILM */}
      <section className="px-8 pb-12 max-w-6xl mx-auto relative z-10">

        <p className="text-emerald-400 text-xs tracking-[0.4em] uppercase">
          Final Production
        </p>

        <h2 className="text-3xl font-light mt-2">
          Documentary Film
        </h2>

        <div className="mt-6 aspect-video border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            className="w-full h-full"
            allowFullScreen
          />
        </div>

      </section>

           {/* DOCUMENT NAV */}
      <section className="px-8 max-w-6xl mx-auto mb-10 relative z-10">

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a
            href="#pitch"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Pitch
          </a>

          <a
            href="#script"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Script
          </a>

          <a
            href="#shotsheet"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Shot Sheet
          </a>

          <a
            href="#reflection"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Reflection
          </a>

        </div>

      </section>

      {/* PITCH */}
      <section
        id="pitch"
        className="px-8 pb-12 max-w-6xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl font-light mb-5">
          Pitch Deck
        </h2>

        <div
          onClick={() =>
            setActiveFile({
              title: 'Pitch Deck',
              file: 'Exit Pitch.pdf',
              thumb: 'Exit Pitch Thumb.jpg',
            })
          }
          className="cursor-pointer border border-white/10 hover:border-emerald-400 overflow-hidden"
        >

          <img
            src="Exit Pitch Thumb.jpg"
            alt="Pitch"
            className="w-full h-[320px] object-cover"
          />

          <div className="p-4">
            <p className="text-gray-400">
              Initial concept, project goals, audience, and production planning.
            </p>
          </div>

        </div>

      </section>

      {/* SCRIPT */}
      <section
        id="script"
        className="px-8 pb-12 max-w-6xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl font-light mb-5">
          Script
        </h2>

        <div
          onClick={() =>
            setActiveFile({
              title: 'Script',
              file: 'Exit Script.pdf',
              thumb: 'Exit Script Thumb.jpg',
            })
          }
          className="cursor-pointer border border-white/10 hover:border-emerald-400 overflow-hidden"
        >

          <div className="bg-black flex justify-center p-6">

            <img
              src="Exit Script Thumb.jpg"
              alt="Script"
              className="h-[500px] object-contain"
            />

          </div>

          <div className="p-4">
            <p className="text-gray-400">
              Complete screenplay used during production.
            </p>
          </div>

        </div>

      </section>

      {/* SHOT SHEET */}
      <section
        id="shotsheet"
        className="px-8 pb-12 max-w-6xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl font-light mb-5">
          Shot Sheet
        </h2>

        <div
          onClick={() =>
            setActiveFile({
              title: 'Shot Sheet',
              file: 'Storyboard.pdf',
              thumb: 'Storyboard Thumb.jpg',
            })
          }
          className="cursor-pointer border border-white/10 hover:border-emerald-400 overflow-hidden"
        >

          <div className="bg-black flex justify-center p-6">

            <img
              src="Storyboard Thumb.jpg"
              alt="Shot Sheet"
              className="h-[500px] object-contain"
            />

          </div>

          <div className="p-4">
            <p className="text-gray-400">
              Visual planning guide used throughout filming.
            </p>
          </div>

        </div>

      </section>

      {/* REFLECTION */}
      <section
        id="reflection"
        className="px-8 pb-20 max-w-6xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl font-light mb-5">
          Reflection Paper
        </h2>

        <div
          onClick={() =>
            setActiveFile({
              title: 'Reflection',
              file: 'Reflection Paper.pdf',
              thumb: 'Reflection Thumb.jpg',
            })
          }
          className="cursor-pointer border border-white/10 hover:border-emerald-400 overflow-hidden"
        >

          <div className="bg-black flex justify-center p-6">

            <img
              src="Reflection Thumb.jpg"
              alt="Reflection"
              className="h-[500px] object-contain"
            />

          </div>

          <div className="p-4">
            <p className="text-gray-400">
              Analysis of the production process, lessons learned, and project outcomes.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10 relative z-10">
        EXIT EXAM ARCHIVE SYSTEM
      </footer>

    </main>
  );
}