import { restaurant } from '../../../data/restaurant.js';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>{restaurant.name}</p>
          <p className={styles.muted}>{restaurant.tagline}</p>
        </div>
        <div>
          <h2 className={styles.columnTitle}>Casa</h2>
          <ul className={styles.list}>
            <li>{restaurant.address}</li>
            <li>{restaurant.phone}</li>
            <li>{restaurant.email}</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.columnTitle}>Horários</h2>
          <ul className={styles.list}>
            {restaurant.hours.map((item) => (
              <li key={item.days}>
                {item.days}: {item.time}
              </li>
            ))}
            <li>{restaurant.closed}</li>
          </ul>
        </div>
      </div>
      <p className={styles.note}>
        © {year} {restaurant.name}. Projeto de portfólio feito com HTML, CSS e React.
      </p>
    </footer>
  );
}

export default Footer;
