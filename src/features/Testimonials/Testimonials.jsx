import Section from '../../components/ui/Section/Section.jsx';
import { testimonials } from '../../data/testimonials.js';
import styles from './Testimonials.module.css';

function Testimonials() {
  return (
    <Section eyebrow="Vozes da casa" title="O que se fala depois da conta">
      <div className={styles.grid}>
        {testimonials.map((item) => (
          <blockquote key={item.id} className={styles.card}>
            <p className={styles.quote}>“{item.quote}”</p>
            <p className={styles.author}>{item.author}</p>
            <p className={styles.role}>{item.role}</p>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
