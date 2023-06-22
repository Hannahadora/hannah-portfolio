import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Experiences from './components/Experiences'
import { ToastContainer } from 'react-toastify';
import Landing from './components/Landing';
import SocialMediaLinks from './components/SocialMediaLinks';


function App() {
  return (
    <main className='max-w-[1920px] mx-auto' >
      <ToastContainer />
      <Landing />
      <section className='page-wrapper'>
        <Navbar />
        <SocialMediaLinks />
      </section>
      <div className='md:pb-[300px] pb-[50px] ovf'>
        <HeroLanding />
      </div>
      <Skillset />
      <Projects />
      <Experiences />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
