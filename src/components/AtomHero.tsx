"use client";

import styles from "./AtomHero.module.css";

/* Ellipse path for animateMotion: cx=1887.5, cy=1053, rx=166.5, ry=90 */
const ORBIT_PATH =
    "M 2054 1053 A 166.5 90 0 1 1 1721 1053 A 166.5 90 0 1 1 2054 1053 Z";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function AtomHero() {
  return (
      <section className={styles.hero}>
        <div className={styles.inner}>

          {/* ── Name block ────────────────────────────────────────── */}
          <div className={styles.nameBlock}>
            <span className={styles.greeting}>Hello, I am</span>
            <h1 className={styles.name}>Davide Molinelli</h1>
            <p className={styles.tagline}>
              PhD in Computer Science &middot; PostDoc Researcher at USI Lugano
            </p>
          </div>

          {/* ── Atom SVG ──────────────────────────────────────────── */}
          <div className={styles.atomWrap}>
            <svg
                viewBox="0 0 1084 701"
                className={styles.atomSvg}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={1.5}
            >
              <g transform="matrix(1,0,0,1,-1364.333769,-716.414479)">

                {/* ── Top connector → About me ───────────────────── */}
                <g transform="matrix(1,0,0,1,1,0)">
                  <g transform="matrix(1,0,0,1,-1,0)">
                    <path d="M1902.5,790L1902.5,867" className={styles.connector} />
                  </g>
                  <g transform="matrix(2.16,0,0,2.16,-1955.18,-913)">
                    <circle cx="1785.5" cy="787.5" r="2.5" className={styles.connectorDot} />
                  </g>
                </g>

                {/* ── Bottom connector → Contact ─────────────────── */}
                <g transform="matrix(1,0,0,-1,1,2133.6)">
                  <g transform="matrix(1,0,0,1,-1,0)">
                    <path d="M1902.5,790L1902.5,867" className={styles.connector} />
                  </g>
                  <g transform="matrix(2.16,0,0,2.16,-1955.18,-913)">
                    <circle cx="1785.5" cy="787.5" r="2.5" className={styles.connectorDot} />
                  </g>
                </g>

                {/* ── Diagonal connectors — bottom half ─────────── */}
                <g transform="matrix(1,0,0,1,2,0)">
                  {/* Interests — bottom left */}
                  <path d="M1729.357,1169L1617,1267L1566,1267" className={styles.connector} />
                  <g transform="matrix(1,0,0,1,5.168616,1.415692)">
                    <circle cx="1555.416" cy="1265.584" r="5.416" className={styles.connectorDot} />
                  </g>
                  {/* Projects — bottom right (mirrored) */}
                  <g transform="matrix(-1,0,0,1,3801,0)">
                    <path d="M1729.357,1169L1617,1267L1566,1267" className={styles.connector} />
                    <g transform="matrix(1,0,0,1,5.168616,1.415692)">
                      <circle cx="1555.416" cy="1265.584" r="5.416" className={styles.connectorDot} />
                    </g>
                  </g>
                </g>

                {/* ── Diagonal connectors — top half (vert-mirrored) */}
                <g transform="matrix(1,0,0,-1,2,2133.415692)">
                  {/* Skills — top left */}
                  <path d="M1729.357,1169L1617,1267L1566,1267" className={styles.connector} />
                  <g transform="matrix(1,0,0,1,5.168616,1.415692)">
                    <circle cx="1555.416" cy="1265.584" r="5.416" className={styles.connectorDot} />
                  </g>
                  {/* Research — top right (mirrored) */}
                  <g transform="matrix(-1,0,0,1,3801,0)">
                    <path d="M1729.357,1169L1617,1267L1566,1267" className={styles.connector} />
                    <g transform="matrix(1,0,0,1,5.168616,1.415692)">
                      <circle cx="1555.416" cy="1265.584" r="5.416" className={styles.connectorDot} />
                    </g>
                  </g>
                </g>

                {/* ── Orbit 1 (tilted right) ─────────────────────── */}
                <g transform="matrix(1.009326,0.576916,-0.359759,0.629406,376.224102,-685.092096)">
                  <ellipse cx="1887.5" cy="1053" rx="166.5" ry="90" className={styles.orbit} />
                  <circle r="7" className={styles.electron}>
                    <animateMotion dur="8s" repeatCount="indefinite" path={ORBIT_PATH} />
                  </circle>
                </g>

                {/* ── Orbit 2 (tilted left / mirrored) ──────────── */}
                <g transform="matrix(-1.009326,0.576916,0.359759,0.629406,3428.775898,-685.092096)">
                  <ellipse cx="1887.5" cy="1053" rx="166.5" ry="90" className={styles.orbit} />
                  <circle r="7" className={styles.electron}>
                    <animateMotion dur="10s" repeatCount="indefinite" path={ORBIT_PATH} begin="-4s" />
                  </circle>
                </g>

                {/* ── Orbit 3 (near-vertical) ────────────────────── */}
                <g transform="matrix(0,1.16257,0.724968,-0,1139.108752,-1127.751055)">
                  <ellipse cx="1887.5" cy="1053" rx="166.5" ry="90" className={styles.orbit} />
                  <circle r="7" className={styles.electron}>
                    <animateMotion dur="12s" repeatCount="indefinite" path={ORBIT_PATH} begin="-7s" />
                  </circle>
                </g>

                {/* ── Nucleus ────────────────────────────────────── */}
                <g transform="matrix(1.219178,0,0,1.219178,-418.205479,-245.844567)">
                  <circle cx="1903.5" cy="1076.5" r="36.5" className={styles.nucleus} />
                </g>

                {/* ── Clickable text labels ──────────────────────── */}
                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,0.885423,-5.003092)"
                    onClick={() => scrollTo("about")}
                >
                  <text x="1798" y="757" className={styles.label}>About me</text>
                </g>

                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,16.656025,659.582429)"
                    onClick={() => scrollTo("contact")}
                >
                  <text x="1798" y="757" className={styles.label}>Contact</text>
                </g>

                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,477.670304,126.400003)"
                    onClick={() => scrollTo("research")}
                >
                  <text x="1798" y="757" className={styles.label}>Research</text>
                </g>

                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,-390.552905,126.299487)"
                    onClick={() => scrollTo("skills")}
                >
                  <text x="1798" y="757" className={styles.label}>Skills</text>
                </g>

                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,-467.023188,527.743018)"
                    onClick={() => scrollTo("interests")}
                >
                  <text x="1798" y="757" className={styles.label}>Interests</text>
                </g>

                <g
                    className={styles.labelGroup}
                    transform="matrix(1,0,0,1,477.670304,527.039411)"
                    onClick={() => scrollTo("projects")}
                >
                  <text x="1798" y="757" className={styles.label}>Projects</text>
                </g>

              </g>
            </svg>
          </div>

          {/* ── Scroll cue ────────────────────────────────────────── */}
          <button
              className={styles.scrollCue}
              onClick={() => scrollTo("about")}
              aria-label="Scroll to About section"
          >
            <span>Scroll</span>
            <svg
                className={styles.scrollArrow}
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            >
              <path d="M9 3v12M3 11l6 6 6-6" />
            </svg>
          </button>

        </div>
      </section>
  );
}
