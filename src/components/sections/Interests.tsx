import SectionWrapper from "./SectionWrapper";
import styles from "./Interests.module.css";

const HOBBIES = [
  {
    label: "Photography",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
    ),
  },
  {
    label: "Reading",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
  },
  {
    label: "Travelling",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 1 16.5 3.5L13 7 4.8 5.2c-.5-.1-.9.2-1.1.7l-.3.8a1 1 0 0 0 .3 1.1l5.2 4.1-2.7 3.4a2 2 0 0 0-.1 2.2l.5.8a2 2 0 0 0 2.2.7l8.6-2.8c.7-.2 1-.9.7-1.5z"/></svg>
    ),
  },
  {
    label: "Hiking",
    icon: (
      <svg viewBox="0 0 24 24"><path d="m3 17 4-8 4 4 3-6 5 10H3z"/><path d="M21 3 9 15"/></svg>
    ),
  },
  {
    label: "Running",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="1"/><path d="m6.5 6.5 3.5 1 2 3.5-3 3.5 2.5 5.5"/><path d="M9 12H5"/><path d="m12 10 2.5 3-3.5 2 2 4"/></svg>
    ),
  },
  {
    label: "Skiing",
    icon: (
      <svg viewBox="0 0 24 24"><path d="m4 16 4-4-4-4"/><path d="m20 16-4-4 4-4"/><line x1="4" y1="12" x2="20" y2="12"/></svg>
    ),
  },
  {
    label: "Design",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>
    ),
  },
  {
    label: "Psychology",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M9.5 2A6.5 6.5 0 0 1 16 8.5c0 1.8-.7 3.4-1.9 4.6L22 21l-1 1-7.9-7.9A6.5 6.5 0 1 1 9.5 2z"/></svg>
    ),
  },
];

export default function Interests() {
  return (
    <SectionWrapper id="interests" index="05" title="Interests">
      <p className={styles.intro}>
        Beyond the lab, I explore the world through lenses and trails, pages and slopes.
      </p>

      <div className={styles.hobbies}>
        {HOBBIES.map(({ label, icon }) => (
          <div key={label} className={styles.hobby}>
            <div className={styles.hobbyIcon}>{icon}</div>
            <span className={styles.hobbyLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.featured}>
        <div>
          <p className={styles.featuredTitle}>Photography</p>
          <p className={styles.placeholder}>
            A curated gallery of photographs from travels and hikes — coming soon.
          </p>
        </div>
        <div>
          <p className={styles.featuredTitle}>Reading recommendations</p>
          <p className={styles.placeholder}>
            Books I&apos;d recommend and why — coming soon.
          </p>
        </div>
        <div>
          <p className={styles.featuredTitle}>Places to visit</p>
          <p className={styles.placeholder}>
            Favourite destinations and what makes them special — coming soon.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
