'use client';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXPERIENCES
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-emerald-400 transition">HOME</a>
          <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
          <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
          <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
          <a href="/Post-Production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
          <a href="/Experiences" className="text-emerald-400">EXPERIENCES</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-7xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Professional Development
        </p>

        <h1 className="text-5xl font-light mt-3">
          Experiences & Opportunities
        </h1>

        <p className="text-gray-400 mt-4 max-w-3xl">
          A record of production experiences, technical training,
          software proficiency, equipment knowledge, and achievements
          developed throughout the Video Production Program.
        </p>

      </section>

      {/* QUICK NAV */}
      <section className="px-8 max-w-7xl mx-auto relative z-10 mb-10">

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a href="#fieldwork" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Field Work
          </a>

          <a href="#roles" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Production Roles
          </a>

          <a href="#software" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Software
          </a>

          <a href="#equipment" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Equipment
          </a>

          <a href="#awards" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Awards
          </a>

        </div>

      </section>

      {/* FIELD WORK */}
      <section
        id="fieldwork"
        className="px-8 pb-10 max-w-7xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Field Work & Production Experiences
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Throughout the Video Production Program I have filmed both
            inside and outside of the classroom environment. Many projects
            required filming around Passaic County Technical Institute and
            throughout local communities. These experiences helped me adapt
            to changing weather, lighting conditions, and real-world
            production challenges. Working outside of the studio improved
            my problem-solving abilities and confidence when operating
            equipment in unpredictable situations. These opportunities
            helped prepare me for professional production environments.
          </p>

        </div>

      </section>

      {/* ROLES */}
      <section
        id="roles"
        className="px-8 pb-10 max-w-7xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Production Roles
          </h2>

          <p className="text-gray-400 leading-relaxed">
            During productions I have worked in a variety of roles
            including Director, Writer, Editor, Cinematographer,
            Interviewer, Sound Recordist, Voice Actor, and Colorist.
            Working in multiple positions allowed me to understand every
            stage of the filmmaking process. I have led crews on short
            films, documentaries, and music videos while also contributing
            to collaborative productions. These experiences strengthened
            both leadership and teamwork skills while teaching the
            responsibilities of each production department.
          </p>

        </div>

      </section>

      {/* SOFTWARE */}
      <section
        id="software"
        className="px-8 pb-10 max-w-7xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Software Experience
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I have developed proficiency using industry-standard software
            including Adobe Premiere Pro, Adobe After Effects, Adobe
            Audition, Adobe Photoshop, and Eventually Rundown Creator.
            Premiere Pro has been my primary editing platform for films,
            documentaries, commercials, and music videos. After Effects
            has allowed me to create visual effects and motion graphics.
            These programs have helped me build both technical and
            creative skills throughout my productions.
          </p>

        </div>

      </section>

      {/* EQUIPMENT */}
      <section
        id="equipment"
        className="px-8 pb-10 max-w-7xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Equipment & Camera Training
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Throughout the program I have worked with professional video
            production equipment including Canon XA60 camcorders, Sony
            PXW-Z90 cameras, wireless microphone systems, shotgun
            microphones, LED lighting kits, tripods, and audio recording
            equipment. I have learned camera operation, composition,
            exposure control, lens selection, and proper audio recording
            techniques. Repeated use of this equipment has strengthened my
            understanding of professional production workflows and set
            procedures.
          </p>

        </div>

      </section>

      {/* AWARDS */}
      <section
        id="awards"
        className="px-8 pb-16 max-w-7xl mx-auto relative z-10 scroll-mt-24"
      >

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-4 text-emerald-400">
              Awards & Recognition
            </h2>

            <p className="text-gray-400 leading-relaxed">
              One of my most significant accomplishments was earning a
              Bronze Medal in the SkillsUSA Digital Cinema State
              Competition for my music video project "Everything Above."
              Beyond competitions, I have participated in collaborative
              productions, documentaries, music videos, and community
              projects throughout my time in the Video Production Program.
              These experiences have strengthened my leadership,
              creativity, and communication skills while helping me build
              a professional portfolio of work.
            </p>

          </div>

          <div className="border border-white/10 overflow-hidden">

            <img
              src="/skillsusa-medal.jpg"
              alt="SkillsUSA Award"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10 relative z-10">
        EXPERIENCES ARCHIVE SYSTEM
      </footer>

    </main>
  );
}