import Section from '../../components/ui/Section/Section.jsx';
import { menuHighlights } from '../../data/menu.js';
import styles from './Menu.module.css';

function Menu() {
  return (
    <Section id="cardapio" eyebrow="À mesa" title="Destaques da estação">
      <div className={styles.grid}>
        {menuHighlights.map((dish) => (
          <article key={dish.id} className={styles.card}>
            <img src={dish.image} alt={dish.name} />
            <div className={styles.body}>
              <p className={styles.category}>{dish.category}</p>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <span className={styles.price}>{dish.price}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Menu;
