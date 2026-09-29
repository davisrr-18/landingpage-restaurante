import Section from '../../components/ui/Section/Section.jsx';
import { restaurant } from '../../data/restaurant.js';
import styles from './Contact.module.css';

function Contact() {
  return (
    <Section id="contato" eyebrow="Encontre" title="Porta aberta no Jardins">
      <div className={styles.grid}>
        <div className={styles.block}>
          <h3>Endereço e contato</h3>
          <ul className={styles.list}>
            <li>{restaurant.address}</li>
            <li>{restaurant.phone}</li>
            <li>{restaurant.email}</li>
          </ul>
          <h3>Horários</h3>
          <ul className={styles.list}>
            {restaurant.hours.map((item) => (
              <li key={item.days}>
                {item.days} — {item.time}
              </li>
            ))}
            <li>{restaurant.closed}</li>
          </ul>
        </div>
        <div className={styles.map} aria-hidden="true">
          <p>
            <strong>Mapa ilustrativo</strong>
            Rua das Laranjeiras, 120
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
