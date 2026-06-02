'use client';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] -z-10" />

      {/* NAV (FIXED + ALWAYS VISIBLE) */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/90 backdrop-blur">

        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXPERIENCES
        </h1>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-emerald-400">HOME</a>
          <a href="/about" className="hover:text-emerald-400">ABOUT</a>
          <a href="/pre-production" className="hover:text-emerald-400">PRE-PRODUCTION</a>
          <a href="/production" className="hover:text-emerald-400">PRODUCTION</a>
          <a href="/Post-Production" className="hover:text-emerald-400">POST PRODUCTION</a>
          <a href="/Experiences" className="text-emerald-400">EXPERIENCES</a>
        </div>

      </nav>

      {/* HEADER */}
      <section className="px-8 py-14 max-w-7xl mx-auto">
        <h1 className="text-5xl font-light">Experiences & Opportunities</h1>
        <p className="text-gray-400 mt-4 max-w-3xl">
          A record of production experiences, job roles, software, equipment, and achievements in the Video Production program.
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-8 pb-24 max-w-7xl mx-auto space-y-10">

        {/* INTERNSHIPS */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Internships / Shop Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I participated in internship and shop production experiences where I worked on filming, editing, and assisting real productions outside the studio. These experiences helped me learn teamwork, deadlines, and professional workflow.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/internship1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/internship2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* FIELD TRIPS */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Field Trips / Outside Filming</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I filmed outside the classroom in school environments and real locations, learning how to adapt to lighting, movement, and production conditions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/fieldtrip1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/fieldtrip2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* ROLES */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Production Roles</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I worked as Director, Editor, Cinematographer, Writer, Sound Recordist, and Colorist in various productions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/role1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/role2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* SOFTWARE */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Software Used</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              Adobe Premiere Pro, After Effects, Audition, Photoshop, and Eventually Rundown Creator.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/software1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/software2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* EQUIPMENT */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Equipment / Cameras</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              Canon XA60, Sony PXW-Z90, DSLR cameras, microphones, lighting kits, and tripods.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/camera1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/camera2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* AWARDS */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Awards & Recognition</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I earned a Bronze Medal in the SkillsUSA Digital Cinema State Competition for my music video “Everything Above.”
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/skillsusa-medal.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="/award2.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}