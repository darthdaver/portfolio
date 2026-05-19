import SectionWrapper from "./SectionWrapper";
import styles from "./Skills.module.css";

const HARD_SKILLS = [
  { label: "Programming Languages",
    tags: ["Java", "Python", "Typescript", "Javascript"]
  },
  { label: "AI/ML",
    tags: ["Hugging Face", "Pandas", "PyTorch"]
  },
  { label: "Java Stack",
    tags: ["JavaParser", "JUnit", "Maven", "Pitest"]
  },
  { label: "Web Stack",
    tags: ["CSS", "HTML", "Node.js", "Express", "Flask", "Vite", "Three.js"]
  },
  { label: "VCS",
    tags: ["Git", "GitHub"]
  },
];

const SOFT_SKILLS = [
  { label: "UI / UX ",
    tags: ["Affinity Designer", "Illustrator", "Figma"]
  },
  { label: "Photography",
    tags: ["Lightroom", "Analog", "Composition"]
  },
  { label: "Research",
    tags: ["Writing", "Peer Review", "Mentoring"]
  },
  { label: "Personality",
    tags: ["Curiosity", "Willpower", "Empathy", "Open minded", "Creativity"]
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" index="01" title="Skills">
      <div className={styles.grid}>
        <div className={styles.group}>
          <span className={styles.groupTitle}>Hard Skills</span>
          {HARD_SKILLS.map(({ label, tags }) => (
            <div key={label} className={styles.category}>
              <span className={styles.categoryLabel}>{label}</span>
              <div className={styles.tags}>
                {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.group}>
          <span className={styles.groupTitle}>Soft Skills</span>
          {SOFT_SKILLS.map(({ label, tags }) => (
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
