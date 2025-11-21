import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;