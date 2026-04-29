import styles from "./SectionWrapper.module.css";

interface Props {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, index, title, children }: Props) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.index}>§ {index}</span>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rule} />
      </div>
      {children}
    </section>
  );
}
