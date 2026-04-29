import SectionWrapper from "./SectionWrapper";
import styles from "./Contact.module.css";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/darthdaver",
    icon: <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davide-molinelli",
    icon: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com",
    icon: <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17"/><path d="M5 13.18v4L12 21l7-3.82v-4"/></svg>,
  },
  {
    label: "Curriculum Vitae",
    href: "/cv.pdf",
    icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" index="06" title="Contact">
      <div className={styles.grid}>
        <div>
          <p className={styles.tagline}>
            Open to new opportunities.<br />
            Let&apos;s build something together.
          </p>
          <a href="mailto:molinelli.dav@gmail.com" className={styles.email}>
            molinelli.dav@gmail.com
          </a>
        </div>

        <div className={styles.links}>
          {LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkIcon}>{icon}</span>
              <span>{label}</span>
              <span className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
