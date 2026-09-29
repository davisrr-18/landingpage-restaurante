import Section from '../../components/ui/Section/Section.jsx';
import styles from './About.module.css';

function About() {
  return (
    <Section id="sobre" eyebrow="A casa" title="Lenha, estação e tempo à mesa.">
      <div className={styles.layout}>
        <div>
          <p className={styles.text}>
            O Restaurante Fictício nasceu como um exercício de hospitalidade: um salão pequeno,
            um fogão a lenha no centro e um cardápio que muda conforme a feira da
            semana. Nada aqui é um restaurante real — é um projeto de portfólio —
            mas a cozinha que imaginamos é contemporânea brasileira, com fogo vivo
            e pouco desperdício.
          </p>
          <div className={styles.stats}>
            <div>
              <strong>28</strong>
              <p>lugares no salão</p>
            </div>
            <div>
              <strong>12</strong>
              <p>pratos por estação</p>
            </div>
            <div>
              <strong>1</strong>
              <p>brasa o jantar todo</p>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="Salão do restaurante com mesas de madeira e iluminação quente"
          />
        </div>
      </div>
    </Section>
  );
}

export default About;
