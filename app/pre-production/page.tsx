'use client';

import { useState } from 'react';

type Asset = {
  title: string;
  file: string;
  thumb: string;
  type: 'pdf' | 'image';
};

export default function PreProductionPage() {
  const [activeFile, setActiveFile] = useState<Asset | null>(null);

  // ================= PITCHES =================
  const pitches: Asset[] = [
    {
      title: "Everything Above",
      file: "Everything Above.pdf",
      thumb: "Everything Above Thumb.jpg",
      type: "pdf"
    },
    {
      title: "RADIOWORLD",
      file: "RADIOWORLD.pdf",
      thumb: "RADIOWORLD Thumb.jpg",
      type: "pdf"
    },
    {
      title: "The Sanctuary for All",
      file: "The Sanctuary for All.pdf",
      thumb: "Sanctuary Thumb.jpg",
      type: "pdf"
    },
    {
      title: "Once in Time, Now in Space",
      file: "Once in time, Now in space.pdf",
      thumb: "Nasa Hunch Thumb.jpg",
      type: "pdf"
    },
  ];

  // ================= SCRIPTS =================
  const scripts: Asset[] = [
    {
      title: "Everything Above",
      file: "Everything Above Script.pdf",
      thumb: "Everything Above Script_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "RADIOWORLD",
      file: "RADIOWORLD SCRIPT.pdf",
      thumb: "RS Thumb_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "The Sanctuary for All",
      file: "Sanctuary script.pdf",
      thumb: "Sanctuary script_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "Once in Time, Now in Space",
      file: "Nasa script.pdf",
      thumb: "Nasa script_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "In⏺Congruity",
      file: "IC Script.pdf",
      thumb: "ICS Thumb_page-0001.jpg",
      type: "pdf"
    },
  ];

  // ================= SHOT SHEETS =================
  const shotSheets: Asset[] = [
    {
      title: "Everything Above",
      file: "EA SL.pdf",
      thumb: "EA SL_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "RADIOWORLD",
      file: "RW SL.pdf",
      thumb: "RW SL_pages-to-jpg-0001.jpg",
      type: "pdf"
    },
    {
      title: "The Sanctuary for All",
      file: "TSFA SL.pdf",
      thumb: "SL thumb.jpg",
      type: "pdf"
    },
  ];

  // ================= CAST & CREW =================
  const castCrew: Asset[] = [
    {
      title: "RADIOWORLD",
      file: "RW CCS.pdf",
      thumb: "RW CCS_page-0001.jpg",
      type: "pdf"
    },
    {
      title: "Everything Above",
      file: "EA CCS.docx.pdf",
      thumb: "EA CCS.docx_page-0001.jpg",
      type: "pdf"
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

            <a href="/pre-production" className="text-emerald-400">
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

            <a href="/exit-exam" className="hover:text-emerald-400 transition">
              EXIT EXAM
            </a>

          </div>

        </nav>

        {/* HEADER */}
        <section className="px-8 py-12 max-w-6xl mx-auto">

          <p className="text-xs tracking-[0.4em] text-gray-500 uppercase">
            Studio Archive System
          </p>

          <h1 className="text-5xl font-light mt-3">
            Pre-Production Dossier
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl">
            Structured archive of pitch decks, scripts, shot planning documents,
            and cast & crew paperwork used throughout production workflows.
          </p>

        </section>

        {/* GRID */}
        <section className="px-8 pb-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* PITCHES */}
          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-5">
              Pitch Decks
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-3">

              {pitches.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[280px] cursor-pointer border border-white/10 hover:border-emerald-400/50 transition"
                >
                  <img
                    src={item.thumb}
                    className="h-[200px] w-full object-cover"
                    alt={item.title}
                  />

                  <div className="p-3">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">Pitch Document</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* SCRIPTS */}
          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-5">
              Scripts
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-3">

              {scripts.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[220px] cursor-pointer border border-white/10 hover:border-emerald-400/50 transition bg-black/40"
                >

                  <div className="h-[320px] overflow-hidden">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-full object-contain hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-3">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">Screenplay</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* SHOT SHEETS */}
          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-5">
              Shot Sheets
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-3">

              {shotSheets.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[280px] cursor-pointer border border-white/10 hover:border-emerald-400/50 transition"
                >

                  <img
                    src={item.thumb}
                    className="h-[200px] w-full object-cover"
                    alt={item.title}
                  />

                  <div className="p-3">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">Shot Planning</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* CAST & CREW */}
          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-5">
              Cast & Crew
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-3">

              {shotSheets.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setActiveFile(item)}
                  className="min-w-[280px] cursor-pointer border border-white/10 hover:border-emerald-400/50 transition"
                >

                  <img
                    src={item.thumb}
                    className="h-[200px] w-full object-cover"
                    alt={item.title}
                  />

                  <div className="p-3">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">Crew list</p>
                  </div>

                </div>
              ))}

            </div>

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
          PRE-PRODUCTION ARCHIVE SYSTEM
        </footer>

      </div>

    </div>
  );
}