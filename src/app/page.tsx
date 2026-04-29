import Sidebar from "@/components/Sidebar";
import AtomHero from "@/components/AtomHero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Research from "@/components/sections/Research";
import Publications from "@/components/sections/Publications";
import Projects from "@/components/sections/Projects";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <AtomHero />
        <About />
        <Skills />
        <Research />
        <Publications />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}
