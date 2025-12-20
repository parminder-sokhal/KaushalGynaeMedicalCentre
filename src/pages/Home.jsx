import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import HospitalStructure from '../components/HospitalStructure';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HospitalStructure />
      <Doctors />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
