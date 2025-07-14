import React, { useEffect, useState } from 'react';
import GlitchLoader from './components/GlitchLoader';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Services from './components/Services';
import Navbar from './components/Navbar';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <GlitchLoader />
        
      ) : (
        
        <>
         <Navbar />
          <Hero />
          <About />
          <Projects />
          <Services />
            <Contact />
             <Footer />
        </>
      )}
    </>
  );
}

export default App;
