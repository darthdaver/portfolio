import SectionWrapper from "./SectionWrapper";
import styles from "./Publications.module.css";

const PUBS = [
  { venue: "ICSE",  year: "2026", title: "Predicting Failures in Smart Human-Centric EcoSystems" },
  { venue: "ISSTA", year: "2025", title: "Tratto: A Neuro-Symbolic Approach to Deriving Axiomatic Test Oracles" },
  { venue: "ASE",   year: "2025", title: "Do LLMs Generate Useful Test Oracles? An Empirical Study with an Unbiased Dataset" },
  { venue: "FSE",   year: "2021", title: "Health of smart ecosystems" },
  { venue: "ICWE",  year: "2021", title: "Voice-Based Virtual Assistants for User Interaction Modeling" },
];

export default function Publications() {
  return (
    <SectionWrapper id="publications" index="03" title="Publications">
      <ol className={styles.list}>
        {PUBS.map(({ venue, year, title }) => (
          <li key={title} className={styles.item}>
            <span className={styles.venue}>{venue}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.year}>{year}</span>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
