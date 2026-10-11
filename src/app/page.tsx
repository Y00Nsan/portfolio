"use client";

import { useEffect, useState } from "react";

const experiences = [
  {
    id: "cti",
    year: "2026 — PRESENT",
    number: "01",
    status: "IN PROGRESS",
    title: "Cyber Threat Intelligence Intern",
    company: "Cyber Security Forum Initiative · Bravo Section",
    short:
      "Research and analyze North Korean cyber threats through OSINT and threat intelligence.",
    details: [
      "Conduct OSINT research on North Korean cyber threats.",
      "Analyze threat actors, malware, TTPs, and targeting activity.",
      "Use sources including FBI, CISA, MITRE ATT&CK, and security news.",
      "Write intelligence-focused analysis and reports.",
    ],
    tags: ["OSINT", "MITRE ATT&CK", "CTI", "DPRK"],
  },
  {
    id: "research",
    year: "2026 — PRESENT",
    number: "02",
    status: "IN PROGRESS",
    title: "Undergraduate Research Assistant",
    company: "UNCW Department of Computer Science",
    short:
      "Evaluate AI models for scam detection and compare their classification performance.",
    details: [
      "Collect screenshots and data from scam-related links and messages.",
      "Run the same inputs through multiple AI models.",
      "Compare Scam, Likely Scam, and Safe classifications.",
      "Analyze model accuracy and consistency using structured results.",
    ],
    tags: ["AI Security", "Research", "Python", "Data Analysis"],
  },
];

const projects = [
  {
    id: "cyberpath", number: "01", type: "CYBERSECURITY / AI", status: "IN PROGRESS",
    title: "CyberPath AI",
    description: "AI-powered cybersecurity career platform for resume analysis, job matching, skill-gap insights, application planning, and interview preparation.",
    details: "Built with Next.js, React, TypeScript, FastAPI, Python, and AI APIs. Helps cybersecurity job seekers match roles to their resume, identify skill gaps, prepare applications, track progress, and practice interviews.",
    tags: ["Next.js", "FastAPI", "Python", "AI", "Cybersecurity"], icon: "⌘",
    url: "https://cyber-path-ai.vercel.app/",
    github: "https://github.com/Y00Nsan/CyberPath-AI",
  },
  {
    id: "scam",
    number: "02",
    type: "RESEARCH",
    status: "IN PROGRESS",
    title: "AI Scam Detection Research",
    description:
      "Evaluating multiple AI models for scam detection by collecting scam data and comparing model classifications.",
    details:
      "This research project focuses on evaluating how effectively different AI models identify scam-related content. I collect screenshots and scam examples, run them through multiple models, and compare their classifications and accuracy.",
    tags: ["Python", "AI APIs", "Research", "Data Analysis"],
    icon: "◎",
  },
  {
    id: "prom",
    number: "03",
    type: "RESEARCH",
    status: "COMPLETED",
    title: "Korean-Language PROM Research",
    description:
      "Quantitatively analyzed Korean-language patient-reported outcome measures using readability analysis.",
    details:
      "The project involved quantitative analysis of Korean-language patient-reported outcome measures using the Korean Readability Assessment Tool and Python-based data processing.",
    tags: ["Python", "KReaD", "Research"],
    icon: "◈",
  },
  {
    id: "game",
    number: "04",
    type: "SOFTWARE",
    status: "COMPLETED",
    title: "Game Development",
    description:
      "Programmed gameplay systems, mechanics, and UI in Unity for 10+ original games.",
    details:
      "Developed gameplay systems, mechanics, and user interfaces using Unity and C#. Iterated on gameplay based on community feedback across more than ten original games.",
    tags: ["C#", "Unity", "Game Development"],
    icon: "△",
  },
  {
    id: "prosthetic",
    number: "05",
    type: "DESIGN",
    status: "COMPLETED",
    title: "Prosthetic Hand Design",
    description:
      "Designed and 3D-printed custom prosthetic hand components through iterative prototyping.",
    details:
      "Designed custom components using TinkerCAD and AutoCAD, then produced physical prototypes using 3D printing and iterative design.",
    tags: ["TinkerCAD", "AutoCAD", "3D Printing"],
    icon: "◇",
  },
];

const skills = {
  "CLOUD SECURITY": ["AWS cloud fundamentals", "Cloud security concepts", "Identity & access management concepts", "Network security fundamentals"],
  DEVELOPMENT: ["Python", "Java", "JavaScript / TypeScript", "C#", "React / Next.js", "FastAPI"],
  "SECURITY ANALYSIS": ["Threat intelligence analysis", "MITRE ATT&CK", "Wireshark", "Elastic / Kibana"],
  "TOOLS & PLATFORMS": ["Git / GitHub", "AWS", "VirtualBox", "Unity", "TinkerCAD / AutoCAD"],
};

const focusAreas = [
  {id:"cloud",title:"CLOUD SECURITY",short:"AWS · IAM · NETWORK SECURITY",description:"Building toward a cloud security engineering career through AWS, secure architecture, access control, and network security fundamentals."},
  {id:"threat",title:"THREAT INTELLIGENCE",short:"CTI · TTPs · OSINT RESEARCH",description:"Investigating threat actors and attack techniques; OSINT is a research methodology, not a programming skill."},
  {id:"research",title:"SECURITY RESEARCH",short:"AI · DATA · EVALUATION",description:"Evaluating AI-assisted scam detection and security research results with reproducible analysis."},
  {id:"software",title:"SOFTWARE DEVELOPMENT",short:"PYTHON · JAVA · NEXT.JS",description:"Building applications, APIs, and practical automation that support security workflows."},
];

export default function Home() {
  const [activeExperience, setActiveExperience] = useState("cti");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeFocus, setActiveFocus] = useState("threat");
  const [activeSkill, setActiveSkill] = useState("SECURITY");
  const [typedText, setTypedText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);

  const terminalText = "system ready — security_profile loaded";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(terminalText.slice(0, index));
      index++;

      if (index > terminalText.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-x-percent",
        `${(event.clientX / window.innerWidth) * 100}%`
      );

      document.documentElement.style.setProperty(
        "--mouse-y-percent",
        `${(event.clientY / window.innerHeight) * 100}%`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const selectedFocus =
    focusAreas.find((focus) => focus.id === activeFocus) ?? focusAreas[0];

  const selectedExperience =
    experiences.find((experience) => experience.id === activeExperience) ??
    experiences[0];

  return (
    <main className="site">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mouse-glow" />
      <div className="grid-background" />
      <div className="symbol-background" aria-hidden="true"><span>⌘</span><span>◇</span><span>⌁</span><span>⊕</span><span>⟡</span><span>⌗</span></div>
      <div className="ambient-orb orb-a" />
      <div className="ambient-orb orb-b" />

      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            JYB<span>_</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>

            <a
              href="https://github.com/Y00Nsan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jae-yoon-bae0327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume/`} className="nav-resume">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {notice && <div className="work-notice" role="status"><span>{notice}</span><button onClick={() => setNotice(null)} aria-label="Close notification">×</button></div>}
      {/* HERO */}

      <section className="hero">
        <div className="hero-grid-lines" />

        <div className="hero-inner">
          <div className="hero-copy reveal">
            <div className="availability">
              <span />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <div className="terminal-label">
              <span>$</span> whoami
            </div>

            <h1>
              Jae Yoon
              <br />
              <em>Bae</em>
            </h1>

            <div className="hero-role">
              Computer Science
              <b>×</b>
              Cybersecurity
            </div>

            <p className="hero-description">
              I build practical software and security solutions through
              <strong> cyber threat intelligence</strong>,
              <strong> security research</strong>, and
              <strong> software development</strong>.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button-primary magnetic">
                Explore Work
                <span>→</span>
              </a>

              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume/`} className="button-secondary magnetic">
                View Resume
                <span>↗</span>
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>02</strong>
                <span>ACTIVE<br />EXPERIENCES</span>
              </div>

              <div>
                <strong>05</strong>
                <span>SELECTED<br />PROJECTS</span>
              </div>

              <div>
                <strong>04</strong>
                <span>SECURITY<br />FOCUS AREAS</span>
              </div>
            </div>
          </div>

          {/* SECURITY VISUAL */}

          <div className="security-visual reveal delay-1">
            <div className="visual-grid" />

            <div className="orbit orbit-large" />
            <div className="orbit orbit-medium" />
            <div className="orbit orbit-small" />

            <div className="visual-node node-top">
              <span className="node-icon">⌁</span>
              <div>
                <strong>CLOUD SECURITY</strong>
                <small>DETECT · ANALYZE · PREDICT</small>
              </div>
            </div>

            <div className="visual-node node-right">
              <span className="node-icon">⌕</span>
              <div>
                <strong>RESEARCH</strong>
                <small>EXPLORE · DISCOVER</small>
              </div>
            </div>

            <div className="visual-node node-bottom">
              <span className="node-icon">&lt;/&gt;</span>
              <div>
                <strong>SOFTWARE</strong>
                <small>BUILD · AUTOMATE</small>
              </div>
            </div>

            <div className="visual-node node-left">
              <span className="node-icon">☁</span>
              <div>
                <strong>CLOUD</strong>
                <small>DEPLOY · SECURE</small>
              </div>
            </div>

            <div className="security-core">
              <div className="core-ring ring-one" />
              <div className="core-ring ring-two" />

              <div className="core-shield">
                ◇
              </div>

              <strong>SECURITY</strong>
              <span>PROFILE</span>

              <div className="core-status">
                <i />
                SYSTEM ACTIVE
              </div>
            </div>

            <div className="visual-data data-one">
              <span>THREATS</span>
              <strong>ACTIVE</strong>
            </div>

            <div className="visual-data data-two">
              <span>RESEARCH</span>
              <strong>RUNNING</strong>
            </div>

            <div className="visual-scan" />
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="about-section">
        <div className="about-left reveal">
          <div className="section-kicker">01 / ABOUT</div>

          <h2>
            More than
            <br />
            <span>just security.</span>
          </h2>

          <p>
            I&apos;m a Computer Science student at the University of North
            Carolina Wilmington interested in cybersecurity, cyber threat
            intelligence, cloud security, and software engineering.
          </p>

          <p>
            I like learning by actually building things, researching real
            problems, and figuring out how systems work.
          </p>
        </div>

        <div className="profile-panel reveal delay-1">
          <div className="profile-glow" />

          <div className="profile-panel-header">
            <span>PROFILE / 001</span>
            <span>JYB</span>
          </div>

          <div className="profile-grid">
            <div className="profile-stat">
              <span>FIELD</span>
              <strong>COMPUTER SCIENCE</strong>
            </div>

            <div className="profile-stat">
              <span>INTEREST</span>
              <strong>CLOUD SECURITY</strong>
            </div>

            <div className="profile-stat">
              <span>FOCUS</span>
              <strong>CLOUD SECURITY</strong>
            </div>

            <div className="profile-stat">
              <span>APPROACH</span>
              <strong>BUILD + RESEARCH</strong>
            </div>
          </div>

          <div className="profile-tags">
            <span>CTI</span>
            <span>CLOUD SECURITY</span>
            <span>AI SECURITY</span>
            <span>SOFTWARE</span>
            <span>AWS</span>
          </div>

          <div className="profile-scan">
            <div />
          </div>

          <div className="profile-footer">
            <span>IDENTITY VERIFIED</span>
            <b>●</b>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="experience-section">
        <div className="experience-intro reveal">
          <div className="section-kicker">02 / EXPERIENCE</div>

          <h2>
            Where I&apos;ve
            <br />
            been learning.
          </h2>

          <p>Click an experience to see what I actually worked on.</p>
        </div>

        <div className="experience-layout reveal delay-1">
          <div className="timeline">
            {experiences.map((experience) => (
              <button
                key={experience.id}
                className={`timeline-item ${
                  activeExperience === experience.id ? "active" : ""
                }`}
                onClick={() => setActiveExperience(experience.id)}
              >
                <div className="timeline-dot" />

                <div className="timeline-content">
                  <span>{experience.year}</span>

                  <h3>{experience.title}</h3>

                  <p>{experience.company}</p>
                </div>

                <b>→</b>
              </button>
            ))}

            <div className="timeline-line" />
          </div>

          <div className="experience-detail">
            <div className="detail-top">
              <span>{selectedExperience.number}</span>

              <div className="status-badge">
                {selectedExperience.status}
              </div>
            </div>

            <h3>{selectedExperience.title}</h3>

            <div className="detail-company">
              {selectedExperience.company}
            </div>

            <p className="detail-summary">
              {selectedExperience.short}
            </p>

            <div className="detail-divider" />

            <div className="detail-list">
              {selectedExperience.details.map((detail) => (
                <div key={detail}>
                  <span>+</span>
                  <p>{detail}</p>
                </div>
              ))}
            </div>

            <div className="tags">
              {selectedExperience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="projects-section">
        <div className="projects-header reveal">
          <div>
            <div className="section-kicker">03 / PROJECTS</div>

            <h2>
              Things I&apos;ve
              <br />
              <span>actually worked on.</span>
            </h2>
          </div>

          <div className="project-counter">
            <strong>05</strong>

            <span>
              SELECTED
              <br />
              PROJECTS
            </span>
          </div>
        </div>

        <div className="project-feature-grid reveal delay-1">
          {projects.map((project, index) => {
            const isOpen = activeProject === project.id;

            return (
              <article
                key={project.id}
                className={`project-feature project-${index + 1} ${
                  isOpen ? "open" : ""
                }`}
              >
                <button
                  aria-expanded={isOpen}
                  className="project-main"
                  onClick={() =>
                    setActiveProject(isOpen ? null : project.id)
                  }
                >
                  <div className="project-number-large">
                    {project.number}
                  </div>

                  <div className="project-meta">
                    <span>PROJECT_{project.number}</span>
                    <span>{project.type}</span>
                  </div>

                  <div className="project-icon">{project.icon}</div>

                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    <span className="project-expand">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-bottom">
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="project-details">
                    <div>
                      <span>DETAILS</span>
                      <p>{project.details}</p>
                    </div>

                    {"url" in project && project.url ? (
                      <div className="project-actions">
                        <a className="project-visit" href={project.url} target="_blank" rel="noopener noreferrer">Launch CyberPath AI ↗ <small>New tab · portfolio stays open</small></a>
                        {"github" in project && project.github && <a className="project-visit project-github" href={project.github} target="_blank" rel="noopener noreferrer">View GitHub source ↗</a>}
                      </div>
                    ) : (
                      <div className="project-pending" role="status">IN PROCESS — public project materials are not available yet.</div>
                    )}
                    <div className="project-detail-state">
                      {project.status === "IN PROGRESS"
                        ? "WORK IN PROGRESS"
                        : "PROJECT COMPLETED"}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="skills-section">
        <div className="skills-heading reveal">
          <div className="section-kicker">04 / SKILLS</div>

          <h2>
            Technologies &
            <br />
            <span>capabilities.</span>
          </h2>
        </div>

        <div className="skills-interface reveal delay-1">
          <div className="skill-tabs">
            {Object.keys(skills).map((category, index) => (
              <button
                key={category}
                className={activeSkill === category ? "active" : ""}
                onClick={() => setActiveSkill(category)}
              >
                <span>0{index + 1}</span>
                {category}
              </button>
            ))}
          </div>

          <div className="skill-display">
            <div className="skill-terminal-top">
              <span>skills_terminal</span>
              <span>● ONLINE</span>
            </div>

            <div className="skill-terminal-body">
              <div className="terminal-command">
                <span>$</span> load skills --category=
                {activeSkill.toLowerCase()}
              </div>

              <h3>{activeSkill}</h3>

              <div className="skill-list">
                {skills[activeSkill as keyof typeof skills].map(
                  (skill, index) => (
                    <div
                      className="skill-row"
                      key={skill}
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span>0{index + 1}</span>

                      <strong>{skill}</strong>

                      <span className="skill-evidence">TECHNOLOGY / KNOWLEDGE</span>
                    </div>
                  )
                )}
              </div>

              <div className="terminal-bottom">
                <span>category loaded successfully</span>
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section reveal">
        <div className="contact-orbit orbit-one" />
        <div className="contact-orbit orbit-two" />

        <div className="contact-particle particle-one" />
        <div className="contact-particle particle-two" />
        <div className="contact-particle particle-three" />

        <div className="section-kicker">05 / CONTACT</div>

        <h2>
          Let&apos;s build
          <br />
          <span>something useful.</span>
        </h2>

        <p>
          Interested in cybersecurity, software engineering,
          or security research? Let&apos;s connect.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:jaeyoonbae03@gmail.com"
            className="contact-email"
          >
            <span>jaeyoonbae03@gmail.com</span>
            <b>→</b>
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/Y00Nsan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jae-yoon-bae0327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume/`}>Resume ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          JYB<span>_</span>
        </div>

        <p>Computer Science × Cybersecurity</p>

        <p>© 2026 Jae Yoon Bae</p>
      </footer>
    </main>
  );
}