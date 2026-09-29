import { useState } from 'react';
import { restaurant } from '../../../data/restaurant.js';
import { useScrollToSection } from '../../../hooks/useScrollToSection.js';
import styles from './Header.module.css';

const navItems = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'reservas', label: 'Reservas' },
  { id: 'contato', label: 'Contato' },
];

function Header() {
  const scrollToSection = useScrollToSection();
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(sectionId) {
    setMenuOpen(false);
    scrollToSection(sectionId);
  }

  return (
    <header className={styles.bar}>
      <strong className={styles.brand}>{restaurant.name}</strong>
      <nav className={styles.nav} aria-label="Seções da página">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.navButton}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
        onClick={() => setMenuOpen((open) => !open)}
      >
        Menu
      </button>
      <nav
        id="menu-mobile"
        className={menuOpen ? styles.panelOpen : styles.panel}
        aria-label="Menu mobile"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.navButton}
            onClick={() => goTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
