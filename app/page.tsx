'use client';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* NAV */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
  <h1 className="tracking-[0.35em] text-sm text-gray-300">
    VINCENT TIRRI
  </h1>

  <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
    <a href="/" className="text-emerald-400">HOME</a>
    <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
    <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
    <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
    <a href="/post-production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
  </div>
</nav>

        {/* MAIN */}
        <section className="flex-1 flex items-center px-6">

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              <p className="text-sm tracking-[0.4em] text-gray-500 uppercase">
                Film Portfolio 2027
              </p>

              <h1 className="text-5xl md:text-6xl font-light leading-tight">
                Aspiring <span className="text-emerald-400">Director</span> & Cinematic Storyteller
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed">
                A filmmaker focused on directing, cinematography, editing, and music-driven storytelling.
                This portfolio documents my growth through short films and productions.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center space-y-8">

              <img
                src="/vincent-portrait.jpg"
                alt="Portrait of Vincent Tirri"
                className="h-[560px] w-full max-w-md object-cover object-top border border-white/10"
              />

              {/* EMAIL */}
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                  Contact
                </p>

                <a
                  href="mailto:vincetirri@gmail.com"
                  className="text-emerald-400 text-xl mt-1 font-medium hover:underline"
                >
                  vincetirri@gmail.com
                </a>
              </div>

              {/* QUOTE (YOUR EXACT TEXT) */}
              <p className="text-sm italic text-gray-400 border-l border-emerald-400 pl-4 text-center">
                “This website is where you will find details about my experiences from the Video Production Program at PCTI.”
              </p>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-5 border-t border-white/10">
          © 2026 VINCENT TIRRI FILM PORTFOLIO
        </footer>

      </div>

    </main>
  );
}