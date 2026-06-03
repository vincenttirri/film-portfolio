'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* CINEMATIC BACKGROUND */}
      <div className="fixed inset-0 bg-black" />

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />

      <div className="fixed inset-0 pointer-events-none opacity-[0.05] animate-grain bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <div className="relative z-10 flex flex-col min-h-screen">

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

        {/* MAIN */}
        <main className="flex-1 flex items-center px-6 py-10">

          <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              <div>

                <p className="uppercase tracking-[0.35em] text-gray-500 text-xs mb-4">
                  Director • Musician • Creative
                </p>

                <h1 className="text-6xl font-light leading-tight">
                  Vincent <span className="text-emerald-400">Tirri</span>
                </h1>

              </div>

              <div className="border-l border-emerald-400 pl-5">

                <p className="text-gray-400 text-lg leading-relaxed">
                  My name is Vincent Tirri and I am in the class of 2027 at
                  Passaic County Technical Institute. I am part of the
                  Audio/Video Production program where I have created short films,
                  music videos, and documentaries while also working as an intern
                  helping with live broadcasting, editing, and on-site filming.
                  Beyond filmmaking, I create and perform original music, combining
                  sound and visual storytelling through scoring and music video
                  production. I have also competed in SkillsUSA Digital Cinema,
                  earning third place at the state level while developing leadership,
                  collaboration, and responsibility through both film and music.
                  In the future, I hope to pursue directing for studio productions
                  or a professional music career connected to the entertainment industry.
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="grid grid-cols-2 gap-6">

              {/* FILM IMAGE */}
              <div className="group">

                <div className="overflow-hidden border border-white/10 bg-black">

                  <img
                    src="about-cinema.jpg.jpg"
                    alt="Film"
className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"                  />

                </div>

                <div className="mt-3 flex justify-between items-center">

                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-emerald-400">
                    Vincent in film
                    </p>

                    <h3 className="text-xl font-light mt-1">
                      Vincent Tirri on the red carpet with fellow students and David Schoner.
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500">
                   
                  </p>

                </div>

              </div>

              {/* MUSIC IMAGE */}
              <div className="group mt-16">

                <div className="overflow-hidden border border-white/10 bg-black">

                  <img
                    src="about-sound.jpg.JPG"
                    alt="Music"
className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700"                  />

                </div>

                <div className="mt-3 flex justify-between items-center">

                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-emerald-400">
                      Vincent in music
                    </p>

                    <h3 className="text-xl font-light mt-1">
                      Vincent Tirri playing drums for his band Shadows Become Substance.
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500">
                    
                  </p>

                </div>

              </div>

            </div>

          </div>

        </main>

        {/* FOOTER */}
        <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-5 border-t border-white/10">
          © 2026 VINCENT TIRRI FILM PORTFOLIO
        </footer>

      </div>
    </div>
  );
}