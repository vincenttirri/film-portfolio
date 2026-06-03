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

      {/* DOCUMENTS */}
      <section className="px-8 pb-20 max-w-6xl mx-auto relative z-10">

        <h2 className="text-3xl font-light mb-8">
          Production Documents
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {documents.map((doc) => (
            <div
              key={doc.title}
              onClick={() => setActiveFile(doc)}
              className="border border-white/10 hover:border-emerald-400 cursor-pointer bg-black/40 overflow-hidden"
            >
              <div className="h-[320px] overflow-hidden bg-black">
                <img
                  src={doc.thumb}
                  alt={doc.title}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">

                <h3 className="text-lg font-light">
                  {doc.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  Click to View
                </p>

              </div>

            </div>
          ))}

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
              src={activeFile.file}
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