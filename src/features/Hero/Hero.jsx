import Button from '../../components/ui/Button/Button.jsx';
import { restaurant } from '../../data/restaurant.js';
import { useScrollToSection } from '../../hooks/useScrollToSection.js';
import styles from './Hero.module.css';

function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className={styles.hero} aria-labelledby="hero-titulo">
      <div className={styles.media}>
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80"
          alt="Balcão e salão do restaurante à noite, com luzes quentes"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{restaurant.eyebrow}</p>
        <h1 id="hero-titulo" className={styles.title}>
          {restaurant.name}
        </h1>
        <p className={styles.subtitle}>{restaurant.tagline}</p>
        <div className={styles.actions}>
          <Button onClick={() => scrollToSection('reservas')}>Reservar mesa</Button>
          <Button variant="ghost" onClick={() => scrollToSection('cardapio')}>
            Ver cardápio
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
