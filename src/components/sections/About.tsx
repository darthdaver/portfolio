import SectionWrapper from "./SectionWrapper";
import styles from "./About.module.css";

export default function About() {
  return (
    <SectionWrapper id="about" index="00" title="About me">
      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            I am a young researcher (I wonder until what age it&apos;s valid to label oneself as
            &lsquo;young&rsquo;) who obtained a PhD in Computer Science in December 2025 at the{" "}
            <em>Università della Svizzera italiana</em>, with a thesis titled{" "}
            <em>A Neuro-Symbolic Approach fro Test Oracle Generation</em>. Previously, I earned a Master&apos;s degree
            in Computer Science and Engineering at <em>Politecnico di Milano</em>.
          </p>
          <p>
            I currently hold a PostDoc position at the Università della Svizzera italiana. My
            research interests include Software Engineering, Artificial Intelligence, Data Analysis,
            and Software Testing.
          </p>
        </div>

        <aside className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Current role</span>
            <span className={styles.metaValue}>PostDoc Researcher · USI Lugano</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PhD</span>
            <span className={styles.metaValue}>
              Computer Science · USI Lugano · Dec 2025
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>MSc</span>
            <span className={styles.metaValue}>
              Computer Science &amp; Engineering · Politecnico di Milano
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Research areas</span>
            <span className={styles.metaValue}>
              Software Engineering · AI · Data Analysis · Software Testing
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={styles.metaValue} style={{ color: "var(--accent)" }}>
              Open to industry offers
            </span>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
