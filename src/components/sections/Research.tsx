import SectionWrapper from "./SectionWrapper";
import styles from "./Research.module.css";

const DOMAINS = [
  "Oracle Inference",
  "AI4SE",
  "LLMs",
  "Static Analysis",
  "Software Testing",
];

export default function Research() {
  return (
    <SectionWrapper id="research" index="02" title="Research">
      <div className={styles.layout}>

        {/* ── Left: body text ───────────────────────────────────── */}
        <div className={styles.body}>
          {/*<p>
              My research focused on developing <em>automated software testing</em>{" "}
              techniques by combining neural and symbolic approaches.
          </p>*/}
          <p>
            My doctoral thesis &mdash;{" "}
            <em>A Neuro-Symbolic Approach for Test Oracle Generation</em> &mdash;
            centered on <em>neuro-symbolic</em> methods for the automated generation of axiomatic
            and concrete unit testing oracles, leveraging Java class documentation, method signatures, and test prefixes.
          </p>

          <p>
            Currently, I am shifting the focus towards <em>agent-based</em> approaches
            in which an <em>orchestrator</em> delegates tasks to <em>specialized agents</em>{" "}
            for source code analysis, specification analysis, and generation
            of unit test cases and test suites.
          </p>

          <div className={styles.thesis}>
            <span className={styles.thesisLabel}>
              PhD Thesis &middot; USI Lugano &middot; December 2025
            </span>
            <a
              href="https://sonar.rero.ch/global/documents/334462"
              className={styles.thesisLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              A Neuro-Symbolic Approach for Test Oracle Generation
              <span className={styles.thesisArrow}>↗</span>
            </a>
          </div>
        </div>

        {/* ── Right: meta panel ─────────────────────────────────── */}
        <aside className={styles.meta}>

          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Advisor</span>
            <span className={styles.metaVal}>
              <a
                href="https://search.usi.ch/it/persone/4fcdc3b7f6e5a58050ee5b3a2b530ad6/pezze-mauro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Mauro Pezzè ↗
              </a>
            </span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Co-Advisor</span>
            <span className={styles.metaVal}>
              <a
                  href="https://personal.us.es/amarlop/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Dr. Alberto Martín López ↗
              </a>
              <br />
              <a
                  href="https://www.lucadigrazia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Dr. Luca Di Grazia ↗
              </a>
            </span>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Group</span>
            <span className={styles.metaVal}>
              <a
                href="https://star.inf.usi.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                STAR Lab ↗
              </a>
              <span className={styles.sep}>&middot;</span>
              USI Lugano
            </span>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Committee</span>
            <span className={styles.metaVal}>
              <a
                href="https://www.inf.usi.ch/faculty/bavota/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Gabriele Bavota ↗
              </a>
              <br />
              <a
                  href="https://bugcounting.net/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Prof. Carlo Alberto Furia ↗
              </a>
              <br />
              <a
                  href="https://apanichella.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Prof. Annibale Panichella ↗
              </a>
              <br />
              <a
                  href="https://mpapad.github.io//"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Prof. Mike Papadakis ↗
              </a>
            </span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Thesis</span>
            <span className={styles.metaVal}>
              <a
                  href="https://sonar.rero.ch/global/documents/334462"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                PDF ↗
              </a>
            </span>
          </div>
          <div className={styles.metaRow}>
            <span className={styles.metaKey}>Domains</span>
            <div className={styles.tags}>
              {DOMAINS.map((d) => (
                <span key={d} className={styles.tag}>{d}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
