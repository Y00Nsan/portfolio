export default function Resume() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-emerald-900/40 bg-zinc-950/95">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}
            className="font-mono font-bold text-lg text-emerald-400 tracking-wider"
          >
            JYB<span className="text-zinc-600">_</span>
          </a>

          <div className="flex items-center gap-5 font-mono text-sm">

            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}
              className="text-zinc-400 hover:text-emerald-400 transition"
            >
              ← Back
            </a>

            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
              download
              className="rounded-md border border-emerald-500/60 px-4 py-2 text-emerald-400 hover:bg-emerald-500/10 transition"
            >
              Download PDF
            </a>

          </div>

        </div>
      </nav>


      {/* Resume Header */}
      <div className="mx-auto max-w-5xl px-6 py-12">

        <div className="mb-10">

          <p className="font-mono text-sm text-emerald-400 mb-3">
            $ cat resume.pdf
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Jae Yoon Bae
          </h1>

          <p className="mt-3 text-zinc-400">
            Computer Science · Cybersecurity · Threat Intelligence
          </p>

        </div>


        {/* Resume Viewer */}
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">

          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">

            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/70" />

            <span className="ml-3 font-mono text-xs text-zinc-500">
              jaeyoon_bae_resume.pdf
            </span>

          </div>


          <iframe
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
            title="Jae Yoon Bae Resume"
            className="h-[80vh] w-full bg-white"
          />

        </div>


        {/* Bottom Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

          <div>
            <p className="font-mono text-sm text-zinc-500">
              Last updated: 2026
            </p>
          </div>

          <div className="flex gap-4">

            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`}
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm hover:border-emerald-500 hover:text-emerald-400 transition"
            >
              Back to Portfolio
            </a>

            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
              download
              className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}