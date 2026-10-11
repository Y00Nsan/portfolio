const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function Resume() {
  return <main className="resume-page">
    <div className="mouse-glow" /><div className="grid-background" /><div className="ambient-orb orb-a" /><div className="ambient-orb orb-b" /><div className="symbol-background" aria-hidden="true"><span>⌘</span><span>◇</span><span>⌁</span><span>⊕</span><span>⟡</span><span>⌗</span></div>
    <nav className="navbar"><div className="nav-inner"><a href={`${base}/`} className="logo">JYB<span>_</span></a><div className="nav-links"><a href={`${base}/#about`}>About</a><a href={`${base}/#experience`}>Experience</a><a href={`${base}/#projects`}>Projects</a><a href={`${base}/#skills`}>Skills</a><a href="https://github.com/Y00Nsan" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/jae-yoon-bae0327/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={`${base}/`} className="nav-resume">← Back to portfolio</a></div></div></nav>
    <section className="resume-content"><div className="section-kicker">DOCUMENT / 001 — RESUME</div><h1>Professional <em>resume.</em></h1><p>Jae Yoon Bae · Computer Science × Cybersecurity</p>
    <div className="resume-actions"><a className="button-primary" href={`${base}/resume.pdf`} target="_blank" rel="noopener noreferrer">Open PDF ↗</a><a className="button-secondary" href={`${base}/resume.pdf`} download>Download PDF ↓</a></div>
    <div className="resume-frame"><div className="resume-frame-bar"><span className="resume-dots">● ● ●</span><span>jaeyoon_bae_resume.pdf</span><span>PDF VIEWER</span></div><iframe title="Jae Yoon Bae resume PDF" src={`${base}/resume.pdf#toolbar=1`} /></div>
    <a className="resume-return" href={`${base}/`}>← Return to portfolio</a></section>
    <footer><div>JYB<span>_</span></div><p>Computer Science × Cybersecurity</p><p>© 2026 Jae Yoon Bae</p></footer>
  </main>;
}
