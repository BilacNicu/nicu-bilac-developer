import './styles/App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import React, { useState, useEffect } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Example of waiting for a specific condition
    // This could be replaced with fetching data, loading images, etc.
    const timer = setTimeout(() => setIsLoading(false), 1000); // wait for 1 second
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div style={{backgroundColor: "#151515"}}></div>; // Or any loading spinner
  }


  return (
    <>
      <Navbar />
      <div className="homeMain">
        <Header />
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
     
    </>
  )
}

export default App
