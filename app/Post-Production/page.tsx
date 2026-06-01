'use client';

import { useState } from 'react';

export default function PostProductionPage() {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.10),transparent_60%)] pointer-events-none" />

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 relative z-20">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          POST PRODUCTION
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="/" className="hover:text-emerald-400 transition">HOME</a>
          <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
          <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
          <a href="/Production" className="hover:text-emerald-400 transition">PRODUCTION</a>
          <a href="/Post-Production" className="text-emerald-400">POST PRODUCTION</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-10 max-w-7xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Reflection & Analysis
        </p>

        <h1 className="text-5xl font-light mt-3">
          Post Production Portfolio
        </h1>

        <p className="text-gray-400 mt-4 max-w-3xl">
          A reflection on creative growth, technical development,
          leadership, and the real-world skills developed throughout
          the Video Production program.
        </p>

      </section>

      {/* MAIN CONTENT */}
      <section className="px-8 pb-16 max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* PDF SIDE */}
          <div>

            <h2 className="text-2xl font-light mb-6">
              Reflection Documents
            </h2>

            <div className="space-y-6">

              {/* PDF 1 */}
              <div
                onClick={() => setActivePdf('Reflection paper.pdf')}
                className="cursor-pointer border border-white/10 hover:border-emerald-400 transition p-5"
              >
                <div className="flex justify-center">

                  <img
                    src="Reflection paper_page-0001.jpg"
                    alt="Reflection"
                    className="h-[450px] w-auto object-contain border border-white/10"
                  />

                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm">
                    Self Reflection Paper
                  </p>

                  <p className="text-xs text-gray-500">
                    PDF Document
                  </p>
                </div>
              </div>

              {/* PDF 2 */}
              <div
                onClick={() => setActivePdf('_Resume.docx (3).pdf')}
                className="cursor-pointer border border-white/10 hover:border-emerald-400 transition p-5"
              >
                <div className="flex justify-center">

                  <img
                    src="_Resume.docx (3)_page-0001.jpg"
                    alt="Resume"
                    className="h-[450px] w-auto object-contain border border-white/10"
                  />

                </div>

                <div className="pt-4 text-center">
                  <p className="text-sm">
                    Resume
                  </p>

                  <p className="text-xs text-gray-500">
                    PDF Document
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* QUESTIONS SIDE */}
          <div>

            <h2 className="text-2xl font-light mb-6">
              Course Reflection Responses
            </h2>

            <div className="space-y-6 text-sm text-gray-400 leading-relaxed">

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-2">
                  How This Course Prepares You For Life
                </h3>

                <p>
                  Video production at PCTVS prepares me for life by developing
                  communication, teamwork, leadership, and problem-solving
                  skills through real production experiences. Creating films
                  requires working with deadlines, adapting to challenges,
                  and collaborating effectively with others, all of which
                  mirror expectations found in college and professional
                  environments.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-2">
                  Why This Course Is Worth Taking
                </h3>

                <p>
                  Video Production at PCTVS is a valuable course because it
                  provides hands-on experience with industry-standard
                  equipment and software. Rather than simply learning theory,
                  students actively create projects that develop technical
                  skills while building a professional portfolio that
                  demonstrates growth and achievement.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-2">
                  Evidence Supporting Its Value Outside The Profession
                </h3>

                <p>
                  Skills learned in this class extend far beyond filmmaking.
                  Managing productions strengthens organization and time
                  management. Interviewing subjects improves communication
                  and confidence. Working in crews develops teamwork and
                  leadership skills that are applicable in nearly every
                  career field and everyday life situation.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-2">
                  Successes, Growth, And Areas For Improvement
                </h3>

                <p className="mb-3">
                  Throughout this course, I found the greatest success in
                  directing productions, leading collaborative projects,
                  and developing my editing abilities.
                </p>

                <p className="mb-3">
                  Areas for improvement include refining audio mixing,
                  increasing editing efficiency, and improving long-term
                  project planning. Continued practice and experimentation
                  with advanced editing and sound techniques will help
                  strengthen these skills.
                </p>

                <p>
                  Three examples of success include directing multiple short
                  films, completing a narrative music video under competition
                  deadlines, and producing documentary projects that required
                  research, interviewing, editing, and storytelling.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PDF VIEWER */}
      {activePdf && (
        <div
          onClick={() => setActivePdf(null)}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-10"
        >
          <div className="w-full max-w-6xl h-[90vh] border border-white/20 bg-black">

            <iframe
              src={activePdf}
              className="w-full h-full"
            />

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10 relative z-10">
        POST PRODUCTION REFLECTION SYSTEM
      </footer>

    </main>
  );
}