'use client';

import { useEffect, useState } from "react";

export default function ExperiencesPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cardStyle =
    "border border-white/10 bg-white/5 p-6 rounded-xl backdrop-blur";

  const fade = (d = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0px)" : "translateY(20px)",
    transition: `all 0.7s ease ${d}s`,
  });

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] -z-10" />

      {/* NAV (UNCHANGED) */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/80 backdrop-blur">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXPERIENCES
        </h1>

        <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-400 flex-wrap">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/pre-production">PRE-PRODUCTION</a>
          <a href="/production">PRODUCTION</a>
          <a href="/Post-Production">POST</a>
          <a href="/Experiences" className="text-emerald-400">EXPERIENCES</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-14 max-w-7xl mx-auto" style={fade(0)}>
        <h1 className="text-5xl font-light">Experiences & Opportunities</h1>
        <p className="text-gray-400 mt-4 max-w-3xl">
          A record of production experiences, job roles, software, equipment, and achievements.
        </p>
      </section>

      {/* GRID WRAPPER */}
      <section className="px-8 pb-24 max-w-7xl mx-auto grid gap-8">

        {/* 1A INTERNSHIPS */}
        <div style={fade(0.1)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Internships / Shop Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I participated in internship and shop production experiences where I worked on filming, editing, and assisting real productions outside the studio. These experiences helped me learn teamwork, deadlines, communication, and professional workflow.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/internship1.jpg" className="rounded object-cover h-64 w-full border border-white/10" />
              <img src="/internship2.jpg" className="rounded object-cover h-64 w-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* 1B FIELD TRIPS */}
        <div style={fade(0.2)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Field Trips / Outside Filming</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I filmed outside the classroom in school environments and real locations. I learned to adapt to lighting, movement, and real-world conditions while maintaining production quality.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="/fieldtrip1.jpg" className="rounded object-cover h-64 w-full border border-white/10" />
              <img src="/fieldtrip2.jpg" className="rounded object-cover h-64 w-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* ROLES */}
        <div style={fade(0.3)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Production Roles</h2>
          <p className="text-gray-400 leading-relaxed">
            I worked as Director, Editor, Cinematographer, Writer, Sound Recordist, and Colorist in multiple productions. These roles taught leadership, collaboration, and how each department contributes to a final film.
          </p>
        </div>

        {/* SOFTWARE */}
        <div style={fade(0.4)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Software Used</h2>
          <p className="text-gray-400 leading-relaxed">
            Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Adobe Photoshop, and Eventually Rundown Creator were used throughout my projects.
          </p>
        </div>

        {/* EQUIPMENT */}
        <div style={fade(0.5)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Equipment / Cameras</h2>
          <p className="text-gray-400 leading-relaxed">
            Canon XA60, Sony PXW-Z90, DSLR systems, wireless lavalier mics, shotgun mics, LED lighting kits, and tripods were used for production training.
          </p>
        </div>

        {/* AWARDS */}
        <div style={fade(0.6)} className={cardStyle}>
          <h2 className="text-2xl text-emerald-400 mb-4">Awards & Recognition</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I earned a Bronze Medal in the SkillsUSA Digital Cinema State Competition for my music video “Everything Above.” I also participated in festival-style productions.
            </p>

            <img
              src="/skillsusa-medal.jpg"
              className="rounded object-cover h-64 w-full border border-white/10"
            />
          </div>
        </div>

      </section>

    </main>
  );
}