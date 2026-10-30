import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ArrowDown, ArrowUpRight, ArrowRight, Github, Linkedin, Mail, ExternalLink, Cpu, Network, Database, Code2, Trophy, GraduationCap } from "lucide-react";
import Navbar from "./components/Navbar";
import NeuralScene from "./components/NeuralScene";
import SectionHeading from "./components/SectionHeading";
import { profile, experience, projects, skillGroups, achievements } from "./data";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-image">
        <img src={project.image} alt="" loading="lazy" />
        <span className="project-index">{project.number}</span>
        <span className="image-arrow"><ArrowUpRight size={17} /></span>
      </div>
      <div className="project-body">
        <div className="project-type">{project.type}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-foot">
          <span>{project.metric}</span>
          <a href={project.github} target="_blank" rel="noreferrer">View Project <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.85 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 });
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el, { y: 34, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
      gsap.utils.toArray(".experience-item").forEach((el, i) => {
        gsap.from(el, { x: 24, opacity: 0, duration: 0.75, delay: i * 0.08, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span>01</span>AI ENGINEER · GENERATIVE AI · AGENTIC SYSTEMS</div>
            <h1>I build <span>AI systems</span> for real <span>impact.</span></h1>
            <p className="hero-intro">I'm {profile.name}, an AI Engineer and B.Tech CSE graduate at ITM University, Gwalior. I build real-world AI systems — from LLM agents and RAG pipelines to multimodal AI and scalable backend solutions.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">View My Work <ArrowRight size={16} /></a>
              <a className="button button-outline" href="#contact">Contact Me</a>
            </div>
            <a className="scroll-cue" href="#about"><span className="scroll-line" /><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
          </div>
          <div className="hero-art">
            <NeuralScene />
            <div className="art-label">IDEAS<br />MODELS<br />AGENTS<br />DATA<br />SYSTEMS</div>
            <div className="art-coordinate">01 / INTELLIGENCE IN MOTION</div>
          </div>
          <div className="hero-count">01 <span>/ 06</span></div>
        </section>

        <section id="about" className="section-wrap about-section">
          <SectionHeading number="02" eyebrow="ABOUT ME" title="Turning complex problems" accent="into practical AI solutions." />
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>{profile.about}</p>
              <p>My work spans agentic workflows, document intelligence, speech systems, multimodal machine learning and production-minded backend engineering.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More About Me <ArrowUpRight size={15} /></a>
            </div>
            <div className="about-visual reveal">
              <NeuralScene compact />
              <div className="visual-caption">EXPLORING THE SPACE BETWEEN<br />HUMAN IDEAS & MACHINE INTELLIGENCE</div>
            </div>
          </div>
          <div className="stats-row reveal">
            <div><strong>5K+</strong><span>Annotations<br />Processed</span></div>
            <div><strong>~60%</strong><span>Less QA<br />Effort</span></div>
            <div><strong>~13%</strong><span>Diarization<br />Error Rate</span></div>
            <div><strong>~92%</strong><span>Deepfake<br />Detection Accuracy</span></div>
          </div>
        </section>

        <section id="experience" className="section-wrap experience-section">
          <SectionHeading number="03" eyebrow="EXPERIENCE" title="My Professional" accent="Journey." />
          <div className="experience-list">
            {experience.map((job, i) => (
              <article className="experience-item" key={job.company}>
                <div className="timeline-mark"><span>{i === 0 ? <Cpu size={17} /> : <Network size={17} />}</span></div>
                <div className="experience-main">
                  <div className="experience-top">
                    <div><h3>{job.company}</h3><span className="role">{job.role}</span></div>
                    <time>{job.date}</time>
                  </div>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap projects-section">
          <SectionHeading number="04" eyebrow="SELECTED WORK" title="Selected" accent="Projects." note="A collection of work exploring LLMs, computer vision and agentic systems." />
          <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section id="skills" className="section-wrap skills-section">
          <SectionHeading number="05" eyebrow="TECHNICAL TOOLKIT" title="Tools &" accent="Technologies." note="A mix of AI/ML, backend and system design tools I work with to build end-to-end solutions." />
          <div className="skills-layout">
            <div className="skills-orbit reveal">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
              <div className="orbit-core"><Network size={42} strokeWidth={1} /><span>BUILD<br />INTELLIGENT<br />SYSTEMS</span></div>
              <i className="orbit-node node-one" /><i className="orbit-node node-two" /><i className="orbit-node node-three" />
            </div>
            <div className="skills-groups">
              {skillGroups.map((group, i) => (
                <div className="skill-group reveal" key={group.title}>
                  <div className="skill-icon">{[<Cpu />, <Network />, <Database />, <Code2 />][i]}</div>
                  <div><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap education-section">
          <SectionHeading number="06" eyebrow="BACKGROUND" title="Education &" accent="Recognition." />
          <div className="education-grid">
            <div className="education-block reveal">
              <div className="subhead"><GraduationCap size={19} /> <h3>Education</h3></div>
              <div className="education-card">
                <div className="education-icon"><GraduationCap size={26} /></div>
                <div><h4>ITM University, Gwalior</h4><p>B.Tech Computer Science & Engineering</p><span>2022 — May 2026 <b>·</b> CGPA: 8.4</span></div>
              </div>
            </div>
            <div className="achievements-block reveal">
              <div className="subhead"><Trophy size={18} /> <h3>Achievements</h3></div>
              <div className="achievement-list">
                {achievements.map((item, i) => <div className="achievement" key={item.title}><span className="trophy-icon"><Trophy size={19} /></span><div><h4>{item.title}</h4><p>{item.event}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-art"><NeuralScene compact /></div>
          <div className="section-wrap contact-inner">
            <div className="eyebrow"><span>07</span> LET'S CONNECT</div>
            <h2>Let's Build<br />Something <em>Interesting.</em></h2>
            <p>I'm always open to discussing new ideas, projects or opportunities in AI and software engineering.</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}`}>Get In Touch <ArrowUpRight size={16} /></a>
              <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a className="social-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
            </div>
            <footer><span>© {new Date().getFullYear()} Aaryan Sahu</span><span>DESIGNED & BUILT WITH INTENTION.</span><a href="#home">BACK TO TOP ↑</a></footer>
          </div>
        </section>
      </main>
    </div>
  );
}