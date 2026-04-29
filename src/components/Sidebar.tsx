"use client";

import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

const SECTIONS = [
  { id: "about",        label: "About" },
  { id: "skills",       label: "Skills" },
  { id: "research",     label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "projects",     label: "Projects" },
  { id: "interests",    label: "Interests" },
  { id: "contact",      label: "Contact" },
];

const ICON_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/darthdaver",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davide-molinelli",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Scholar",
    href: "https://scholar.google.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3L1 9l11 6 9-4.91V17" />
        <path d="M5 13.18v4L12 21l7-3.82v-4" />
      </svg>
    ),
  },
  {
    label: "CV",
    href: "/cv.pdf",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className={styles.sidebar}>

      {/* ── Brand monogram ────────────────────────────────────── */}
      <div className={styles.brand}>
        <span className={styles.monogram}>DM</span>
        <span className={styles.brandLabel}>D. Molinelli</span>
      </div>

      {/* ── Section nav ───────────────────────────────────────── */}
      <nav className={styles.nav}>
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.navLink} ${active === id ? styles.active : ""}`}
            onClick={() => scrollTo(id)}
            aria-label={`Go to ${label}`}
          >
            <span className={styles.navDot} />
            <span className={styles.navText}>{label}</span>
          </button>
        ))}
      </nav>

      {/* ── External links ────────────────────────────────────── */}
      <div className={styles.icons}>
        {ICON_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={label}
          >
            {icon}
            <span className={styles.iconLabel}>{label}</span>
          </a>
        ))}
      </div>

    </aside>
  );
}
