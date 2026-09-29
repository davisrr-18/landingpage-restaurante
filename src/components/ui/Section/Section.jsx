import styles from './Section.module.css';

function Section({ id, eyebrow, title, children }) {
  const headingId = id ? `${id}-titulo` : undefined;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      {title ? (
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

export default Section;
