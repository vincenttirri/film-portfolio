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

          <a href="#internships" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Internships
          </a>

          <a href="#fieldtrips" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Field Trips
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

      {/* INTERNSHIPS */}
      <section id="internships" className="px-8 pb-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border border-white/10 p-6">
            <h2 className="text-2xl font-light mb-4 text-emerald-400">
              Internships
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Through the Video Production Program I have participated in internship opportunities that exposed me to professional production environments. These experiences allowed me to assist with filming, editing, and event coverage while working alongside experienced professionals. During internships I learned the importance of punctuality, communication, and adaptability in fast-paced situations. I gained experience operating equipment in real-world settings where production schedules and client expectations had to be met. These opportunities helped me better understand the standards and responsibilities expected within the media industry.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/internship1.jpg" className="border border-white/10 h-64 w-full object-cover" />
            <img src="/internship2.jpg" className="border border-white/10 h-64 w-full object-cover" />
          </div>

        </div>

      </section>

      {/* FIELD TRIPS */}
      <section id="fieldtrips" className="px-8 pb-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border border-white/10 p-6">
            <h2 className="text-2xl font-light mb-4 text-emerald-400">
              Field Trips & Off-Campus Filming
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Throughout the program I have had opportunities to film outside of the classroom and studio environment. These productions required adapting to changing lighting conditions, weather, and public locations. Working on location strengthened my ability to problem solve while maintaining professional production standards. I learned how to transport, set up, and operate equipment efficiently in unfamiliar environments. These experiences prepared me for real-world filmmaking situations where flexibility and preparation are essential.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/fieldtrip1.jpg" className="border border-white/10 h-64 w-full object-cover" />
            <img src="/fieldtrip2.jpg" className="border border-white/10 h-64 w-full object-cover" />
          </div>

        </div>

      </section>

      {/* ROLES */}
      <section id="roles" className="px-8 pb-10 max-w-7xl mx-auto">

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Production Roles
          </h2>

          <p className="text-gray-400 leading-relaxed">
            During productions I have worked as a Director, Writer, Editor, Cinematographer, Interviewer, Sound Recordist, Voice Actor, and Colorist. Working in multiple positions allowed me to understand every stage of the filmmaking process. I have led crews on short films, documentaries, and music videos while also contributing to collaborative productions. These experiences strengthened both leadership and teamwork skills while teaching the responsibilities of each production department. Learning these roles has made me a more adaptable filmmaker and a stronger collaborator.
          </p>

        </div>

      </section>

      {/* SOFTWARE */}
      <section id="software" className="px-8 pb-10 max-w-7xl mx-auto">

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Software Experience
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I have developed proficiency using Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Adobe Photoshop, and Eventually Rundown Creator. Premiere Pro has been my primary editing platform for films, documentaries, commercials, and music videos. After Effects has allowed me to create motion graphics, visual effects, and title sequences. Eventually Rundown Creator introduced me to professional scheduling and production organization workflows. These applications have helped me strengthen both my technical and creative abilities.
          </p>

        </div>

      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="px-8 pb-10 max-w-7xl mx-auto">

        <div className="border border-white/10 p-6">

          <h2 className="text-2xl font-light mb-4 text-emerald-400">
            Equipment & Camera Training
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Throughout the program I have worked with Canon XA60 camcorders, Sony PXW-Z90 cameras, wireless microphone systems, shotgun microphones, LED lighting kits, tripods, and professional audio recording equipment. I have learned camera operation, exposure control, composition, and proper audio recording techniques. Repeated use of this equipment strengthened my understanding of professional production workflows. I also gained experience selecting lenses and adjusting camera settings to fit different shooting environments. These experiences have prepared me to work confidently with professional equipment on future productions.
          </p>

        </div>

      </section>

      {/* AWARDS */}
      <section id="awards" className="px-8 pb-16 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="border border-white/10 p-6">

            <h2 className="text-2xl font-light mb-4 text-emerald-400">
              Awards & Recognition
            </h2>

            <p className="text-gray-400 leading-relaxed">
              One of my most significant accomplishments was earning a Bronze Medal in the SkillsUSA Digital Cinema State Competition for my music video project "Everything Above." Beyond competitions, I have participated in documentaries, short films, music videos, and collaborative productions. These projects helped me build leadership, communication, and creative problem-solving skills. Working with different crews and production teams allowed me to strengthen my ability to manage responsibilities under deadlines. Each project has contributed to my growth as a filmmaker and future director.
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