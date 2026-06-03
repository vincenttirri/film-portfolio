'use client';

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-black -z-20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] -z-10" />

      {/* TOP NAV (SITE NAV) */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/90 backdrop-blur">
        <h1 className="tracking-[0.35em] text-sm text-gray-300">
          EXPERIENCES
        </h1>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-gray-400">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/pre-production">PRE-PRODUCTION</a>
          <a href="/production">PRODUCTION</a>
          <a href="/Post-Production">POST</a>
          <a href="/Experiences" className="text-emerald-400">EXPERIENCES</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-light">Experiences & Opportunities</h1>
        <p className="text-gray-400 mt-4 max-w-3xl">
          A record of production experiences, job roles, software, equipment, and achievements.
        </p>
      </section>

      {/* SECTION NAV BUTTONS (THIS WAS MISSING BEFORE) */}
      <section className="px-8 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em]">

          <a href="#internships" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Internships
          </a>

          <a href="#fieldtrips" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Field Trips
          </a>

          <a href="#roles" className="px-3 py-2 border border-white/10 hover:border-emerald-400">
            Roles
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

      {/* CONTENT */}
      <section className="px-8 pb-24 max-w-7xl mx-auto space-y-10">

        {/* INTERNSHIPS */}
        <div id="internships" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Internships</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              Junior year of my highschool jourey, I was chosen to participate in the Co-op internship program at PCTVS. During this year, I gained numerous skills sucha as camera operating for live production, spotlighting, interviewing, and other technical credibilities. Using these new skills I have particpated in the production of multiple live events, a musical, and our stuednt of the month videos. I have lerned how to sue more technology and how to tak care of equipment, useful for future job experiences I may have. Overall, this unpaid internship, which will become paid next year, has given me the true experience of working in the film industry.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="EP6.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="EP7.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* FIELD TRIPS */}
        <div id="fieldtrips" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Field Trips / Outside Filming</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              During the course of being in the Audio/Visual production I have been a part of mny field trips. A notable trip was going to Record High and learning about mixing live performences. Furthermore, I ahve also ahd the honor of attending the first two New Jersey Film Expos where I lerned how to netwrk and discover job opputunities for my future. Additional to field trips, I have done off campus filming multiple times. I have shot music vieos, documenteries, commercials, and personal projects. This tought me ho to locaiton scout and use iverse equipment and situations to my advantage even wwhen negative at first glance.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="EP4.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="EP5.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* ROLES */}
        <div id="roles" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Production Roles</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              Throughout my time working in productions, I have been abl to find my voice in many different ares of film. I find that my strongest and most repeitive role is director. With my ability to effictively collaborate and work a team, this role has become a highlight of my journey as an aspiring filmmaker. Addiitonally, however, I have also worked as a colorist, camera operator, audio mixer, and writer. My other strongest voice is in color, but I find myself growing in other areas as well.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="EP3.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="EP9 (1).jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* SOFTWARE */}
        <div id="software" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Software Used</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I have been able to grow my tecnical skills in the software I have used in this program. I have utulized adobe software such as Premiere, After Effects, and AUdition to create films on an industry standard. I also have an understanding of Davinci Resolve's free studio version that I have pursued on my own. Aditionally, I have used collaborative audio mixing programs such as Soundtrap to further my understaanding of producing music and audio effects. 
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="AEP.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="DREP.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* EQUIPMENT */}
        <div id="equipment" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Equipment</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              I have been fortunate to work with multiple types of equipment throughout my experience in the video production program. Cameras and camera tech incldude the Fx3, Fx6, Fx9, Panasonic HC-X1000 4K Ultraa HD Camcorder. Autocue Teleprompter, GY-HC900STU Studio Camera Rig, 4K Panasonic PTZ Camera, Canon EOS R50 Mirrorles Camera, DJI Ronin-S Standard, and Panasonic AG-CX350 Pro Camcorder. Furthermore, I have used other tech including the Blackmagic Design ATEM Television Studio HD8, Mac Studio, and ETC ColorSource AV Lighting Console. Finally, audio equipment I have used includes the Yamaha TF-1 Audio Mixer, Zoom PodTrak P4 Zoom Recorder, and the RODECaster Pro II.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="EP1.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="EP10.jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

        {/* AWARDS */}
        <div id="awards" className="border border-white/10 bg-white/5 p-6 rounded-xl">
          <h2 className="text-2xl text-emerald-400 mb-4">Awards & Recognition</h2>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-400 leading-relaxed">
              In 2025, I had earned a Bronze Medal in the SkillsUSA Digital Cinema State Competition for my film “RADIOWORLD." This film was made undr criteria of being a broad 7 minute short film of any genre or prompt. Competing against twelve other teams of two, we placed third, scoring a 95 out of 100 on the rubric. THis award shows the true ahrd work, dedication, nd crative storytelling that went into the process of planning, producing, and editing the short film. 
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img src="EP2 (1).jpg" className="h-64 w-full object-cover rounded border border-white/10" />
              <img src="EP8 (1).jpg" className="h-64 w-full object-cover rounded border border-white/10" />
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}