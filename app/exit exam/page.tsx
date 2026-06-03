'use client';

export default function FilmPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] -z-10" />

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/90 backdrop-blur">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          FILM PROJECT
        </h1>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-400">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/production">PRODUCTION</a>
          <a href="/post-production">POST</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-light">Featured Film</h1>
        <p className="text-gray-400 mt-4">
          Script, Pitch, Shot Sheet, and Final Film Documentation
        </p>
      </section>

      {/* DOCUMENT LINKS */}
      <section className="px-8 max-w-7xl mx-auto pb-10">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a href="/pitch.pdf" target="_blank" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Pitch
          </a>

          <a href="/shotsheet.pdf" target="_blank" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Shot Sheet
          </a>

          <a href="/script.pdf" target="_blank" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Script
          </a>

        </div>
      </section>

      {/* VIDEO */}
      <section className="px-8 max-w-7xl mx-auto pb-12">
        <div className="aspect-video border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Featured Film"
            allowFullScreen
          />
        </div>
      </section>

      {/* THUMBNAILS */}
      <section className="px-8 max-w-7xl mx-auto pb-20">

        <h2 className="text-2xl text-emerald-400 mb-6">
          Production Documents
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* PITCH (HORIZONTAL - SLIDES / VIDEO RATIO) */}
          <a href="/pitch.pdf" target="_blank" className="border border-white/10 bg-white/5 hover:border-emerald-400 transition">
            <div className="aspect-video">
              <img
                src="/pitch-thumb.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-3 text-sm text-gray-300">Pitch Deck</p>
          </a>

          {/* SHOT SHEET (HORIZONTAL - VIDEO RATIO) */}
          <a href="/shotsheet.pdf" target="_blank" className="border border-white/10 bg-white/5 hover:border-emerald-400 transition">
            <div className="aspect-video">
              <img
                src="/shotsheet-thumb.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-3 text-sm text-gray-300">Shot Sheet</p>
          </a>

          {/* SCRIPT (TALL - DOCUMENT / GOOGLE DOC FEEL) */}
          <a href="/script.pdf" target="_blank" className="border border-white/10 bg-white/5 hover:border-emerald-400 transition">
            <div className="aspect-[3/4]">
              <img
                src="/script-thumb.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-3 text-sm text-gray-300">Script</p>
          </a>

        </div>

      </section>

    </main>
  );
}