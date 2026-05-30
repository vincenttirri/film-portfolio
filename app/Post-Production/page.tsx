'use client';

export default function PostProductionPage() {
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
    <a href="/production" className="hover:text-emerald-400 transition">PRODUCTION</a>
    <a href="/post-production" className="text-emerald-400">POST PRODUCTION</a>
  </div>
</nav>

      {/* HEADER */}
      <section className="px-8 py-12 max-w-6xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.4em] text-emerald-400 uppercase">
          Reflection & Analysis
        </p>

        <h1 className="text-5xl font-light mt-3">
          Post Production Portfolio
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl">
          A reflection on creative growth, technical development, and how this course
          prepares students for both professional and real-world applications of media production.
        </p>
      </section>

      {/* PDF */}
      <section className="px-8 max-w-6xl mx-auto mb-16 relative z-10">

        <h2 className="text-2xl font-light mb-4">
          Self Reflection Paper
        </h2>

        <div className="w-full h-[80vh] border border-white/10 bg-black">
          <iframe
            src="/self-reflection.pdf"
            className="w-full h-full"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Place your PDF inside the /public folder for it to display correctly.
        </p>
      </section>

      {/* PROMPTS */}
      <section className="px-8 max-w-6xl mx-auto pb-20 relative z-10">

        <h2 className="text-2xl font-light mb-8">
          Course Reflection Responses
        </h2>

        {/* PROMPT 1 */}
        <div className="mb-10 border-l border-emerald-400 pl-6">
          <h3 className="text-lg font-light text-emerald-400 mb-2">
            1. How this course prepares you for life
          </h3>

          <p className="text-gray-400 leading-relaxed">
            This course prepares me for life by teaching collaboration, communication, and problem-solving in real production environments.
            Working on film projects requires teamwork under deadlines, which reflects real-world expectations in any career field.
            Beyond filmmaking, these skills translate into leadership, organization, and adaptability in everyday life situations.
          </p>
        </div>

        {/* PROMPT 2 */}
        <div className="mb-10 border-l border-emerald-400 pl-6">
          <h3 className="text-lg font-light text-emerald-400 mb-2">
            2. Why this course is worth taking
          </h3>

          <p className="text-gray-400 leading-relaxed">
            This course is worth taking because it provides hands-on experience with professional equipment, editing software, and real production workflows.
            Instead of just learning theory, students actively create films and media projects that build a portfolio.
            This experience gives a strong foundation for both college-level media programs and entry-level creative work.
          </p>
        </div>

        {/* PROMPT 3 */}
        <div className="mb-10 border-l border-emerald-400 pl-6">
          <h3 className="text-lg font-light text-emerald-400 mb-2">
            3. Evidence supporting its value outside of profession
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Evidence of this course’s value outside of a profession includes improved communication skills, critical thinking, and time management.
            For example, managing film shoots requires planning schedules, coordinating groups, and solving unexpected problems quickly.
            These abilities apply directly to everyday life, school responsibilities, and any future workplace environment, even outside of media.
          </p>
        </div>

        {/* PROMPT 4 (NEW) */}
        <div className="border-l border-emerald-400 pl-6 mt-10">
          <h3 className="text-lg font-light text-emerald-400 mb-2">
            4. Successes, growth, and areas for improvement
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4">
            After creating this portfolio, I was most successful in developing my technical filmmaking skills and improving my ability to complete full projects from start to finish.
            I learned the most during hands-on production work where I had to problem-solve in real time, especially during editing and shooting scenarios.
            I also saw myself excelling in creative leadership, where I was responsible for directing and organizing group projects.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            However, there are still areas I need improvement in, such as time management during long-term projects, refining audio mixing, and becoming more efficient with editing workflows.
            I plan to improve these skills by practicing more structured planning before production, seeking feedback from peers and instructors, and spending additional time experimenting with advanced editing techniques.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Three examples that support my success include leading the production of multiple short films, successfully completing a music video project under deadline pressure, and independently editing and finishing a documentary-style interview piece.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-[10px] tracking-[0.3em] text-gray-600 py-6 border-t border-white/10 relative z-10">
        POST PRODUCTION REFLECTION SYSTEM
      </footer>

    </main>
  );
}