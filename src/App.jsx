import React, { useRef } from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import SkillsPage from './SkillsPage';
import ContactForm from './ContactForm';
import AdvancedFooter from './AdvancedFooter';

function App() {
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative">
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Homepage skillsRef={skillsRef} contactRef={contactRef} />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section ref={skillsRef} id="skills">
        <SkillsPage />
      </section>
      <section ref={contactRef} id="contact">
        <ContactForm />
      </section>
      <section id="footer">
        <AdvancedFooter />
      </section>
    </div>
  );
}

export default App;