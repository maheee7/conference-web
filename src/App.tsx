import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ThemeSection from './components/ThemeSection';
import Highlights from './components/Highlights';
import SessionTracks from './components/SessionTracks';
import ImportantDates from './components/ImportantDates';
import WhyJoin from './components/WhyJoin';
import Publications from './components/Publications';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative font-inter antialiased">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ThemeSection />
        <Highlights />
        <SessionTracks />
        <ImportantDates />
        <WhyJoin />
        <Publications />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all z-50 animate-fade-up"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Modern Background Decor */}
      <div className="fixed top-0 left-0 -z-50 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-light rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}

export default App;
