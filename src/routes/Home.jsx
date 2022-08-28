import { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import { Theme } from '../contexts/Theme';
import lazyLoad from '../utils/lazy-load-image';
import AuthModal, { modalTitles } from '../components/Modals/AuthModal';
import NavBar from '../components/Nav/NavBar';
import HeroMain from '../components/Hero/HeroMain';
import HeroDesign from '../components/Hero/HeroDesign';
import Features from '../components/Features/Features';
import HeroSimple from '../components/Hero/HeroSimple';
import Workflows from '../components/Workflows/Workflows';
import HeroEnd from '../components/Hero/HeroEnd';
import Footer from '../components/Footer/Footer';

import 'aos/dist/aos.css';

const Home = () => {
  const [theme, setTheme] = useContext(Theme);
  const [modalTitle, setModalTitle] = useState(modalTitles[0]);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    AOS.init({ mirror: true, once: true });
    lazyLoad(AOS.refresh);
  }, []);

  const toggleTheme = (e) => setTheme(!theme);

  const toggleModal = (e) => {
    if (!showModal) {
      toggleToLogin(e);
    }
    setShowModal(!showModal);
  };

  const toggleToLogin = (e) => {
    setModalTitle(modalTitles[0]);
    setShowLogin(true);
  };

  const toggleToSignup = (e) => {
    setModalTitle(modalTitles[1]);
    setShowLogin(false);
  };

  return (
    <div className="mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 overflow-clip">
      <NavBar toggleTheme={toggleTheme} showLogin={toggleModal} />
      <HeroMain />
      <HeroDesign />
      <Features />
      <HeroSimple
        title="Simplifying the startup founder search process"
        description="From VC-backed, unicorn startups to community-led web3 DAOs to personal projects, ASOSHI has your back."
      />
      <Workflows />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <HeroSimple
        title="Built by Gen-Z"
        description="Our team comes from leading institutions with a unified goal to drive Gen-Z innovation ecosystems."
      />
      <img class="object-center" src="https://media.discordapp.net/attachments/813498333200384013/1013321812387577856/transparent-schools-large.png?width=1112&height=520" alt="Logos"></img>
      <br></br>
      <br></br>
      <HeroSimple
        title="Supported by the Best"
        description="ASOSHI is currently in partnership with:"
      />
      <img class="object-center" src="https://media.discordapp.net/attachments/813498333200384013/1013325880396890212/partnership-good.png?width=1112&height=420" alt="Logos"></img>
      

      <HeroEnd title="Become an ASOSHI-backed startup now!" />
      <Footer />
      <AuthModal
        title={modalTitle}
        show={showModal}
        login={showLogin}
        toggleToLogin={toggleToLogin}
        toggleToSignup={toggleToSignup}
        onHide={toggleModal}
      />
    </div>
  );
};

export default Home;
