import SectionWrapper from "./SectionWrapper";
import styles from "./About.module.css";

export default function About() {
  return (
    <SectionWrapper id="about" index="00" title="About me">
      <div className={styles.grid}>
        <div className={styles.bio}>
          <p>
            I am a postdoctoral researcher at the <em>Università della Svizzera italiana (USI)</em> and earned my Ph.D.
            in December 2025 with a dissertation that defines a neuro-symbolic approach combining <em>AI models</em> with
            <em>static analysis</em> to infer test oracles and automate the software verification process.
          </p>
          <p>
            I enjoy integrating cutting-edge AI technologies into the entire software development lifecycle with the aim
            of automatizing routine tasks while improving <em>software quality</em>. My current research focuses on designing
            <em>agent-based AI</em> orchestrators that coordinate specialized agents to automatically generate entire test suites.
            This applied research aims to make the developed projects available for industrial use, thereby contributing
            to technological progress.
          </p>
          <p>
            In addition to my primary research, I have a strong interest in <em>UX/UI design</em>, <em>data analysis  and visualization</em>,
            as well as <em>3D web modeling</em>
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
