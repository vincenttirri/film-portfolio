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
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 relative z-20">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          POST PRODUCTION
        </h1>

       <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
  <a href="/" className="hover:text-emerald-400 transition">HOME</a>
  <a href="/about" className="hover:text-emerald-400 transition">ABOUT</a>
  <a href="/pre-production" className="hover:text-emerald-400 transition">PRE-PRODUCTION</a>
  <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
  <a href="/Post-Production" className="hover:text-emerald-400 transition">POST PRODUCTION</a>
  <a href="/Experiences" className="hover:text-emerald-400 transition">EXPERIENCES</a>
</div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-6 max-w-7xl mx-auto relative z-10">

        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Reflection & Analysis
        </p>

        <h1 className="text-4xl font-light mt-2">
          Post Production Portfolio
        </h1>

        <p className="text-gray-400 mt-3 max-w-3xl text-sm">
          A reflection on creative growth, technical development,
          leadership, and the real-world skills developed throughout
          the Video Production program.
        </p>

      </section>

      {/* CONTENT */}
      <section className="px-8 pb-10 max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* DOCUMENTS */}
          <div>

            <h2 className="text-2xl font-light mb-4">
              Reflection Documents
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <div
                onClick={() => setActivePdf('Reflection paper.pdf')}
                className="cursor-pointer border border-white/10 hover:border-emerald-400 transition p-3"
              >
                <div className="flex justify-center">
                  <img
                    src="Reflection paper_page-0001.jpg"
                    alt="Reflection"
                    className="h-[300px] w-auto object-contain border border-white/10"
                  />
                </div>

                <div className="pt-3 text-center">
                  <p className="text-sm">Self Reflection Paper</p>
                  <p className="text-xs text-gray-500">PDF Document</p>
                </div>
              </div>

              <div
                onClick={() => setActivePdf('_Resume.docx (3).pdf')}
                className="cursor-pointer border border-white/10 hover:border-emerald-400 transition p-3"
              >
                <div className="flex justify-center">
                  <img
                    src="_Resume.docx (3)_page-0001.jpg"
                    alt="Resume"
                    className="h-[300px] w-auto object-contain border border-white/10"
                  />
                </div>

                <div className="pt-3 text-center">
                  <p className="text-sm">Resume</p>
                  <p className="text-xs text-gray-500">PDF Document</p>
                </div>
              </div>

            </div>

          </div>

          {/* REFLECTIONS */}
          <div>

            <h2 className="text-2xl font-light mb-4">
              Course Reflection Responses
            </h2>

            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-1">
                  How This Course Prepares You For Life
                </h3>

                <p>
                  Video production at PCTVS prepares me for life by developing communication,
                  teamwork, leadership, and problem-solving skills through real production
                  experiences. Creating films requires working with deadlines, adapting to
                  challenges, and collaborating effectively with others.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-1">
                  Why This Course Is Worth Taking
                </h3>

                <p>
                  Video Production at PCTVS is valuable because it provides hands-on
                  experience with industry-standard equipment and software. Students
                  create projects that build both technical skills and a professional portfolio.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-1">
                  Evidence Supporting Its Value Outside The Profession
                </h3>

                <p>
                  Skills learned in this class extend beyond filmmaking. Production planning
                  improves organization, interviews improve communication, and teamwork
                  develops leadership abilities useful in any career field.
                </p>
              </div>

              <div className="border-l border-emerald-400 pl-4">
                <h3 className="text-emerald-400 mb-1">
                  Successes, Growth, And Areas For Improvement
                </h3>

                <p>
                  Throughout this course I excelled most in directing productions,
                  leading collaborative projects, and developing my editing abilities.
                  Areas for improvement include audio mixing, editing efficiency,
                  and long-term project planning. Three examples of success include
                  directing multiple short films, completing a music video under
                  competition deadlines, and producing documentary projects requiring
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
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-5 border-t border-white/10 relative z-10">
        POST PRODUCTION REFLECTION SYSTEM
      </footer>

    </main>
  );
}