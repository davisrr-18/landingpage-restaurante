import Section from '../../components/ui/Section/Section.jsx';
import { galleryItems } from '../../data/gallery.js';
import styles from './Gallery.module.css';

function Gallery() {
  return (
    <Section id="galeria" eyebrow="Ambiente" title="Onde a noite acontece">
      <div className={styles.grid}>
        {galleryItems.map((item) => (
          <figure key={item.id} className={styles.item}>
            <img src={item.image} alt={item.label} />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export default Gallery;
