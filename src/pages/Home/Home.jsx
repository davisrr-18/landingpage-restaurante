import Header from '../../components/layout/Header/Header.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import Hero from '../../features/Hero/Hero.jsx';
import About from '../../features/About/About.jsx';
import Menu from '../../features/Menu/Menu.jsx';
import Gallery from '../../features/Gallery/Gallery.jsx';
import Testimonials from '../../features/Testimonials/Testimonials.jsx';
import Reservations from '../../features/Reservations/Reservations.jsx';
import Contact from '../../features/Contact/Contact.jsx';

function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
