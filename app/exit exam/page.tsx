'use client';

export default function FilmPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          FILM PROJECT
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/pre-production">PRE-PRODUCTION</a>
          <a href="/production">PRODUCTION</a>
          <a href="/Post-Production">POST PRODUCTION</a>
          <a href="/Experiences">EXPERIENCES</a>
          <a href="/exit-exam" className="text-emerald-400">
            EXIT EXAM
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-6xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Complete Individual Production
        </p>

        <h1 className="text-5xl font-light mt-3">
          The Sanctuary For All
        </h1>

        <p className="text-gray-400 mt-5 max-w-3xl">
          This project documents the entire production process from
          concept development through post-production. Included are
          the original pitch deck, screenplay, shot planning
          materials, final film, and reflection documents used
          throughout the project.
        </p>

      </section>

      {/* QUICK LINKS */}
      <section className="px-8 max-w-6xl mx-auto mb-8">

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a
            href="/pitch.pdf"
            target="_blank"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Pitch
          </a>

          <a
            href="/script.pdf"
            target="_blank"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Script
          </a>

          <a
            href="/shotsheet.pdf"
            target="_blank"
            className="px-3 py-2 border border-white/10 hover:border-emerald-400"
          >
            Shot Sheet
          </a>

        </div>

      </section>

      {/* FEATURED FILM */}
      <section className="px-8 pb-12 max-w-6xl mx-auto">

        <h2 className="text-3xl font-light mb-6">
          Final Production
        </h2>

        <div className="aspect-video border border-white/10">

          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            className="w-full h-full"
            allowFullScreen
          />

        </div>

      </section>

      {/* DOCUMENTS */}
      <section className="px-8 pb-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-light mb-8">
          Production Documents
        </h2>

        <div className="space-y-8">

          {/* PITCH */}
          <a
            href="/pitch.pdf"
            target="_blank"
            className="grid md:grid-cols-[320px_1fr] gap-6 border border-white/10 hover:border-emerald-400 transition p-4"
          >

            <div className="aspect-video overflow-hidden">
              <img
                src="/pitch-thumb.jpg"
                alt="Pitch"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                Development
              </p>

              <h3 className="text-2xl font-light mt-2">
                Pitch Deck
              </h3>

              <p className="text-gray-400 mt-3">
                Original proposal outlining the documentary concept,
                target audience, goals, and production approach.
              </p>

            </div>

          </a>

          {/* SCRIPT */}
          <a
            href="/script.pdf"
            target="_blank"
            className="grid md:grid-cols-[220px_1fr] gap-6 border border-white/10 hover:border-emerald-400 transition p-4"
          >

            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/script-thumb.jpg"
                alt="Script"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                Screenplay
              </p>

              <h3 className="text-2xl font-light mt-2">
                Production Script
              </h3>

              <p className="text-gray-400 mt-3">
                Complete screenplay used during filming,
                including interview planning, narration,
                and scene structure.
              </p>

            </div>

          </a>

          {/* SHOT SHEET */}
          <a
            href="/shotsheet.pdf"
            target="_blank"
            className="grid md:grid-cols-[320px_1fr] gap-6 border border-white/10 hover:border-emerald-400 transition p-4"
          >

            <div className="aspect-video overflow-hidden">
              <img
                src="/shotsheet-thumb.jpg"
                alt="Shot Sheet"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
                Planning
              </p>

              <h3 className="text-2xl font-light mt-2">
                Shot Sheet
              </h3>

              <p className="text-gray-400 mt-3">
                Camera planning document detailing framing,
                movement, coverage requirements, and
                production logistics.
              </p>

            </div>

          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10">
        EXIT EXAM ARCHIVE SYSTEM
      </footer>

    </main>
  );
}