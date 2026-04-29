import SectionWrapper from "./SectionWrapper";
import styles from "./Skills.module.css";

const COMPUTER_SKILLS = [
  { label: "Programming Languages",          tags: ["Java", "Python"] },
  { label: "AI Frameworks & Libraries",      tags: ["Hugging Face", "Pandas", "PyTorch"] },
  { label: "Java Frameworks & Libraries",    tags: ["JavaParser", "JUnit", "Maven", "Pitest"] },
  { label: "Web Development",                tags: ["CSS", "HTML", "JavaScript", "TypeScript"] },
  { label: "Web Frameworks & Libraries",     tags: ["D3.js", "Express", "Flask", "Node.js", "React", "Three.js", "Vite"] },
  { label: "Version Control",                tags: ["Git"] },
];

const DESIGN_SKILLS = [
  { label: "UI / UX Design",  tags: ["Affinity Designer", "Illustrator", "Figma"] },
  { label: "Photography",     tags: ["Lightroom"] },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" index="01" title="Skills">
      <div className={styles.grid}>
        <div className={styles.group}>
          <span className={styles.groupTitle}>Computer Skills</span>
          {COMPUTER_SKILLS.map(({ label, tags }) => (
            <div key={label} className={styles.category}>
              <span className={styles.categoryLabel}>{label}</span>
              <div className={styles.tags}>
                {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.group}>
          <span className={styles.groupTitle}>Design Skills</span>
          {DESIGN_SKILLS.map(({ label, tags }) => (
            <div key={label} className={styles.category}>
              <span className={styles.categoryLabel}>{label}</span>
              <div className={styles.tags}>
                {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
