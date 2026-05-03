import SectionWrapper from "./SectionWrapper";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    num: "01",
    category: "Testing · Concrete Test Oracle Generation",
    title: "Tracto",
    desc: "A neuro-symbolic framework for automatically generating concrete test oracles from Java method documentation, signatures, and test prefixes.",
    tags: ["Java", "Python", "PyTorch"],
    repo: "Repo", //"github.com/darthdaver/tracto",
    url: "https://github.com/darthdaver/tracto",
  },
  {
    num: "02",
    category: "Empirical evaluation · LLMs ",
    title: "LLMs Oracle Generation",
    desc: "An empirical study evaluating the usefulness of LLM-generated test oracles using an unbiased benchmark dataset of Java methods. Presented at ASE 2025.",
    tags: ["Java", "Python", "PyTorch"],
    repo: "Repo", //"github.com/darthdaver/llm-prompts-empirical-study",
    url: "https://github.com/darthdaver/llm-prompts-empirical-study",
  },
  {
    num: "03",
    category: "Testing · Axiomatic Test Oracle Generation",
    title: "Tratto",
    desc: "A neuro-symbolic approach for deriving axiomatic test oracles, combining neural language models with symbolic constraint reasoning. Presented at ISSTA 2025.",
    tags: ["Java", "Python", "PyTorch"],
    repo: "Repo", //"github.com/AML14/tratto",
    url: "https://github.com/AML14/tratto",
  },
  {
    num: "04",
    category: "Testing · SES",
    title: "Failure Predictions in Smart Human-Centric Ecosystems",
    desc: "Failure prediction and health monitoring for smart, human-centric software ecosystems. Presented at ICSE 2026.",
    tags: ["Python", "Pandas"],
    repo: "Repo", //"github.com/darthdaver/icse2026-she",
    url: "https://github.com/darthdaver/icse2026-she",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" index="04" title="Projects">
      <div className={styles.grid}>
        {PROJECTS.map(({ num, category, title, desc, tags, repo, url }) => (
          <a
            key={num}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.category}>{category}</span>
              <span className={styles.num}>
                <span className={styles.numDot} />#{num}
              </span>
            </div>
            <div className={styles.divider} />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < tags.length - 1 && <span className={styles.tagDot}> · </span>}
                  </span>
                ))}
              </div>
              <span className={styles.repoLink}>{repo} →</span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
