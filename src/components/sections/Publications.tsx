import SectionWrapper from "./SectionWrapper";
import styles from "./Publications.module.css";

const PUBS = [
  { venue: "ICSE",  year: "2026", pdf: "/resources/papers/icse2026.pdf", title: "Predicting Failures in Smart Human-Centric EcoSystems" },
  { venue: "ISSTA", year: "2025", pdf: "/resources/papers/issta2025.pdf", title: "Tratto: A Neuro-Symbolic Approach to Deriving Axiomatic Test Oracles" },
  { venue: "ASE",   year: "2025", pdf: "/resources/papers/ase2025.pdf", title: "Do LLMs Generate Useful Test Oracles? An Empirical Study with an Unbiased Dataset" },
  { venue: "FSE",   year: "2021", pdf: "/resources/papers/fse2021.pdf", title: "Health of smart ecosystems" },
  { venue: "ICWE",  year: "2021", pdf: "/resources/papers/icwe2021.pdf", title: "Voice-Based Virtual Assistants for User Interaction Modeling" },
];

export default function Publications() {
  return (
    <SectionWrapper id="publications" index="03" title="Publications">
      <ol className={styles.list}>
        {PUBS.map(({ venue, year, pdf, title }) => (
          <a href={pdf}>
              <li key={title} className={styles.item}>
                <span className={styles.venue}>{venue}</span>
                <span className={styles.title}>{title}</span>
                <span className={styles.year}>{year}</span>
              </li>
          </a>
        ))}
      </ol>
    </SectionWrapper>
  );
}
