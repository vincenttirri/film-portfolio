'use client';

export default function Home() {
  return <h1>Home</h1>;
    <div style={{ color: "white", background: "black", height: "100vh" }}>
      <h1>Home Page Working</h1>
    </div>
;
}
    <div className="h-screen bg-black text-white font-sans overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.07] animate-grain bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <div className="relative z-10 flex flex-col h-full">

        {/* NAV */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
          <h1 className="tracking-[0.35em] text-sm text-gray-300">
            VINCENT TIRRI
          </h1>

          <div className="flex gap-8 text-sm tracking-widest text-gray-400 uppercase">
            <a href="/" className="hover:text-emerald-400">Home</a>
            <a href="/about" className="hover:text-emerald-400">About</a>
            <a href="/pre-production" className="hover:text-emerald-400">Pre-Production</a>
            <a href="/production" className="hover:text-emerald-400">Production</a>
          </div>
        </nav>

        {/* MAIN */}
        <main className="flex-1 flex items-center px-6">

          <div className="w-full max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="space-y-6">

              <p className="text-sm tracking-[0.4em] text-gray-500 uppercase">
                Film Portfolio 2027
              </p>

              <h1 className="text-6xl font-light leading-tight">
                Aspiring <span className="text-emerald-400">Director</span> &
                Cinematic Storyteller
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
                alt="Portrait"
                className="h-[560px] w-full max-w-md object-contain"
              />

              {/* EMAIL */}
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                  Contact
                </p>
                <p className="text-emerald-400 text-xl mt-1 font-medium">
                  vincetirri@gmail.com
                </p>
              </div>

              {/* QUOTE */}
              <p className="text-sm italic text-gray-400 border-l border-emerald-400 pl-4 text-center">
                “This website is where you will find details about my experiences from the Video Production Program at PCTI.”
              </p>

            </div>

          </div>

        </main>

        {/* FOOTER */}
        <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-5 border-t border-white/10">
          © 2026 VINCENT TIRRI FILM PORTFOLIO
        </footer>

      </div>
    </div>