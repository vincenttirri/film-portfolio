'use client';

import { useState } from 'react';

export default function ExitExamPage() {
  const [activeFile, setActiveFile] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
<nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
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

    <a href="/exit exam" className="hover:text-emerald-400 transition">
      EXIT EXAM
    </a>
  </div>
</nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-7xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Graduation Portfolio Requirement
        </p>

        <h1 className="text-5xl font-light mt-3">
          Exit Exam 2026
        </h1>

        <p className="text-gray-400 mt-4 max-w-3xl">
          This project represents a complete individual production from
          concept to completion. Included are all major production
          documents, planning materials, the finished film, and a
          written reflection analyzing the project and production process.
        </p>

      </section>

      {/* CONTENT */}
      <section className="px-8 pb-16 max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* PITCH */}
            <div
              onClick={() => setActiveFile('Exit Pitch.pdf')}
              className="cursor-pointer border border-white/10 hover:border-emerald-400 transition"
            >
              <img
                src="Exit Pitch Thumb.jpg"
                alt="Pitch"
                className="h-[220px] w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-light">
                  Pitch Document
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  2 Points
                </p>
              </div>
            </div>

            {/* SCRIPT */}
            <div
              onClick={() => setActiveFile('Exit Script.pdf')}
              className="cursor-pointer border border-white/10 hover:border-emerald-400 transition"
            >
              <img
                src="Exit Script Thumb.jpg"
                alt="Script"
                className="h-[220px] w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-light">
                  Script
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  2 Points
                </p>
              </div>
            </div>

            {/* STORYBOARD */}
            <div
              onClick={() => setActiveFile('Storyboard.pdf')}
              className="cursor-pointer border border-white/10 hover:border-emerald-400 transition"
            >
              <img
                src="Storyboard Thumb.jpg"
                alt="Storyboard"
                className="h-[220px] w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-light">
                  Shot Sheet / Storyboard
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  2 Points
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* FILM */}
            <div className="border border-white/10">

              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-light">
                  Final Film
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  2 Points
                </p>
              </div>

            </div>

            {/* REFLECTION */}
            <div
              onClick={() => setActiveFile('Reflection Paper.pdf')}
              className="cursor-pointer border border-white/10 hover:border-emerald-400 transition"
            >
              <img
                src="Reflection Thumb.jpg"
                alt="Reflection"
                className="h-[320px] w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-light">
                  Reflection Paper
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  2 Points
                </p>
              </div>
            </div>

            {/* CHECKLIST */}
            <div className="border border-white/10 p-6">

              <h2 className="text-2xl font-light mb-4 text-emerald-400">
                Exit Exam Requirements
              </h2>

              <div className="space-y-2 text-gray-400">

                <p>✓ Pitch Document — 2 pts</p>
                <p>✓ Script — 2 pts</p>
                <p>✓ Shot Sheet / Storyboard — 2 pts</p>
                <p>✓ Final Film — 2 pts</p>
                <p>✓ Reflection Paper — 2 pts</p>

              </div>

              <div className="mt-6 border-t border-white/10 pt-4">

                <p className="text-sm text-gray-500">
                  Exit Exam 2026 Total
                </p>

                <h3 className="text-3xl font-light text-emerald-400">
                  10 / 10
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PDF VIEWER */}
      {activeFile && (
        <div
          onClick={() => setActiveFile(null)}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
        >
          <div className="w-full max-w-6xl h-[90vh] border border-white/20 bg-black">

            <iframe
              src={activeFile}
              className="w-full h-full"
            />

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10 relative z-10">
        EXIT EXAM ARCHIVE SYSTEM
      </footer>

    </main>
  );
}