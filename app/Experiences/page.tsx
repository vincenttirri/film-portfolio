'use client';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] -z-10" />

      {/* NAV */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/80 backdrop-blur">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXPERIENCES
        </h1>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-emerald-400">HOME</a>
          <a href="/about" className="hover:text-emerald-400">ABOUT</a>
          <a href="/pre-production" className="hover:text-emerald-400">PRE-PRODUCTION</a>
          <a href="/production" className="hover:text-emerald-400">PRODUCTION</a>
          <a href="/Post-Production" className="hover:text-emerald-400">POST</a>
          <a href="/Experiences" className="text-emerald-400">EXPERIENCES</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-14 max-w-7xl mx-auto">
        <h1 className="text-5xl font-light">Experiences & Opportunities</h1>
        <p className="text-gray-400 mt-4 max-w-3xl">
          A record of production experiences, job roles, software, equipment, and achievements developed in the Video Production program.
        </p>
      </section>

      {/* 1A — INTERNSHIPS */}
      <section className="px-8 pb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Internships / Shop Experiences
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <p className="text-gray-400 leading-relaxed">
            I participated in internship and shop-based production experiences where I worked on filming, editing, and assisting with real productions outside the studio. These opportunities helped me understand professional workflow, communication, and how to operate under deadlines. I gained experience working in a production environment similar to real industry settings where teamwork and responsibility were required.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/internship1.jpg" className="h-64 w-full object-cover border border-white/10" />
            <img src="/internship2.jpg" className="h-64 w-full object-cover border border-white/10" />
          </div>
        </div>
      </section>

      {/* 1B — FIELD TRIPS */}
      <section className="px-8 pb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Field Trips / Outside Filming
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <p className="text-gray-400 leading-relaxed">
            I have filmed outside of the classroom and studio in school areas and real-world environments. This included shooting around the school building and other locations, where I learned how to adapt to lighting changes, movement, and real production conditions. These experiences improved my problem-solving skills and helped me understand how to work outside controlled studio settings.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img src="/fieldtrip1.jpg" className="h-64 w-full object-cover border border-white/10" />
            <img src="/fieldtrip2.jpg" className="h-64 w-full object-cover border border-white/10" />
          </div>
        </div>
      </section>

      {/* 2 — ROLES */}
      <section className="px-8 pb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Job Roles / Production Work
        </h2>

        <p className="text-gray-400 leading-relaxed border border-white/10 p-6">
          I have worked in multiple production roles including Director, Editor, Cinematographer, Writer, Sound Recordist, and Colorist. These roles were used in my own projects and collaborative festival and class productions. Each role taught me how every part of the production process connects, while improving leadership, teamwork, and communication skills.
        </p>
      </section>

      {/* 3 — SOFTWARE */}
      <section className="px-8 pb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Software Used
        </h2>

        <p className="text-gray-400 leading-relaxed border border-white/10 p-6">
          I have used Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Adobe Photoshop, and Eventually Rundown Creator. Premiere Pro has been my main editing software for films and projects, while After Effects has been used for motion graphics and visual effects. These programs have helped me develop strong technical and creative editing skills.
        </p>
      </section>

      {/* 4 — EQUIPMENT */}
      <section className="px-8 pb-14 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Equipment / Cameras Used
        </h2>

        <p className="text-gray-400 leading-relaxed border border-white/10 p-6">
          I have used Canon XA60 camcorders, Sony PXW-Z90 cameras, DSLR systems, wireless lavalier microphones, shotgun microphones, LED lighting kits, tripods, and professional audio recorders. I learned how to control exposure, framing, focus, audio levels, and lighting setups for professional-quality production.
        </p>
      </section>

      {/* 5 — AWARDS */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl text-emerald-400 font-light mb-4">
          Awards / Recognition
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <p className="text-gray-400 leading-relaxed border border-white/10 p-6">
            I earned a Bronze Medal in the SkillsUSA Digital Cinema State Competition for my music video project “Everything Above.” I also participated in multiple film and festival-style class projects which strengthened my production, teamwork, and leadership skills.
          </p>

          <img
            src="/skillsusa-medal.jpg"
            className="h-full w-full object-cover border border-white/10"
          />
        </div>
      </section>

    </main>
  );
}