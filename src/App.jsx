import { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight, MapPin, Download } from "lucide-react";

const focus = [
  { label: "Computer Vision", v: 94 },
  { label: "LLM Integration", v: 90 },
  { label: "AI Agents", v: 85 },
];

const experience = [
  {
    role: "AI Intern",
    co: "Elevate Health",
    when: "Sep 2025 — Nov 2025",
    bullets: [
      "Built a hybrid AI web app that analyzes dermatoscopic images and returns empathetic, safety-bound medical context.",
      "Integrated a Hugging Face Vision Transformer (trained on HAM10000) for multi-class skin-lesion classification in PyTorch — 100% correct across all employer sample images.",
      "Engineered a secure prompt pipeline from CV output to Gemini 2.5 Flash, turning raw probabilities into patient-friendly language with enforced medical disclaimers.",
      "Shipped a responsive Streamlit UI with model caching and confidence-score bars for transparency.",
    ],
  },
  {
    role: "AI Intern",
    co: "ideaHelix",
    when: "Jul 2025 — Aug 2025",
    bullets: [
      "Built a proof-of-concept AI knowledge agent in Python (ChatGPT API) to help the sales team surface information across internal and external sources.",
      "Designed it to parse slide decks and spreadsheets for structured retrieval across document types.",
      "Added web scraping to index the company site and LinkedIn page, expanding the agent's live knowledge base.",
    ],
  },
];

const projects = [
  {
    name: "Dermatoscopic Lesion Classifier",
    stack: ["PyTorch", "Hugging Face ViT", "Gemini 2.5 Flash", "Streamlit"],
    desc: "A computer-vision + LLM app that classifies skin lesions and explains findings in plain language — safety-bound, and never a substitute for a doctor.",
    link: "https://github.com/rigor07",
  },
  {
    name: "Multi-Source Sales Knowledge Agent",
    stack: ["Python", "ChatGPT API", "Web Scraping"],
    desc: "An agent that unifies slide decks, spreadsheets, and live web/LinkedIn content into one queryable knowledge base, so reps find answers fast.",
    link: "https://github.com/rigor07",
  },
];

const skills = [
  { cat: "AI / ML", items: ["PyTorch", "Hugging Face Transformers", "Vision Transformers"] },
  { cat: "APIs & Models", items: ["OpenAI ChatGPT API", "Google Gemini 2.5 Flash"] },
  { cat: "Languages", items: ["Python", "Java"] },
  { cat: "Tools", items: ["Streamlit", "Prompt Engineering", "Web Scraping"] },
];

function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add("in"), io.unobserve(el)),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
}

export default function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="rg">
      <nav className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="mark">RISHI<b>·</b>GORAI</a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="/resume.pdf" className="btn"><Download size={13} /> Resume</a>
          </div>
        </div>
      </nav>

      <div className="wrap" id="top">
        <header className="hero">
          <div>
            <div className="eyebrow">AI / ML Engineer</div>
            <h1 className="name">Rishi<br />Gorai</h1>
            <p className="thesis">
              Computer Science student at Rutgers turning research-grade models —{" "}
              <span className="hl">vision transformers, LLMs, and multi-source agents</span> —
              into tools people can actually use.
            </p>
            <div className="meta">
              <span className="chip"><MapPin /> Montville, NJ</span>
              <a className="chip" href="mailto:rishigorai07@gmail.com"><Mail /> rishigorai07@gmail.com</a>
              <a className="chip" href="https://www.linkedin.com/in/rishi-gorai-6553ab27b" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a className="chip" href="https://github.com/rigor07" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </div>
          </div>

          <div className="readout">
            <div className="readout-top">
              <span><span className="dot" />focus.readout</span>
              <span>softmax</span>
            </div>
            {focus.map((f) => (
              <div className="bar" key={f.label}>
                <div className="bar-head">
                  <span>{f.label}</span>
                  <span className="pct">{ready ? (f.v / 100).toFixed(2) : "0.00"}</span>
                </div>
                <div className="track">
                  <div className="fill" style={{ width: ready ? `${f.v}%` : 0 }} />
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="section">
          <div className="sec-label"><span className="idx">01</span> Education</div>
          <Reveal>
            <div className="edu">
              <div>
                <h3>Rutgers University</h3>
                <div className="sub">B.S. Computer Science · Honors College</div>
              </div>
              <div className="side">New Brunswick, NJ<br />Expected May 2029</div>
            </div>
            <div className="course">
              <span className="gpa">GPA 3.83</span> &nbsp;·&nbsp; Coursework: Data Structures, Intro to Computer Science, Data 101
            </div>
          </Reveal>
        </section>

        <section className="section" id="experience">
          <div className="sec-label"><span className="idx">02</span> Experience</div>
          {experience.map((x) => (
            <Reveal key={x.co}>
              <div className="xp">
                <div className="xp-head">
                  <h3>{x.role} · <span className="co">{x.co}</span></h3>
                  <span className="when">{x.when}</span>
                </div>
                <ul>{x.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="sec-label"><span className="idx">03</span> Projects</div>
          <div className="projects">
            {projects.map((p) => (
              <Reveal key={p.name}>
                <a className="proj" href={p.link} target="_blank" rel="noreferrer">
                  <div className="proj-top">
                    <h3>{p.name}</h3>
                    <ArrowUpRight className="go" size={20} />
                  </div>
                  <p>{p.desc}</p>
                  <div className="stack">{p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="sec-label"><span className="idx">04</span> Skills</div>
          <Reveal>
            <div className="skills">
              {skills.map((s) => (
                <div className="skill-group" key={s.cat}>
                  <div className="skill-cat">{s.cat}</div>
                  <div className="skill-tags">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="foot">
        <div className="wrap">
          <h2>Let's build something.</h2>
          <p>Open to internships and collaborations in AI / ML.</p>
          <div className="meta">
            <a className="chip" href="mailto:rishigorai07@gmail.com"><Mail /> rishigorai07@gmail.com</a>
            <a className="chip" href="https://www.linkedin.com/in/rishi-gorai-6553ab27b" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a className="chip" href="https://github.com/rigor07" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Rishi Gorai</span>
            <span>rishigorai.com · designed &amp; built in React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
