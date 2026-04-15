import { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('August 10, 2026 09:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary-dark">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563293750-2c2145fe3f04?q=80&w=2070&auto=format&fit=crop" 
          alt="Bangkok Conference" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-primary-dark/80 to-accent/20"></div>
        
        {/* Decorative Circles */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-secondary font-bold text-xs mb-8 uppercase tracking-[0.2em] border border-white/10">
              <Sparkles size={14} />
              <span>ICAEBMS 2026 • HYBRID CONFERENCE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Bridging Innovation <br />
              <span className="text-secondary">& Sustainability</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-white/70 mb-10 max-w-2xl leading-relaxed">
              International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities
            </p>

            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-0.5">When</span>
                  <span className="font-bold text-lg">10-11 Aug, 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/20 rounded-xl text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-0.5">Where</span>
                  <span className="font-bold text-lg">Bangkok, Thailand</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <button className="btn btn-primary group">
                Register Now 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-outline">
                Submit Paper
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 w-full"
          >
            {/* Countdown Clock */}
            <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-secondary/20 transition-colors duration-500"></div>
              
              <h3 className="text-center text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-white/40">Conference Starts In</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Mins' },
                  { value: timeLeft.seconds, label: 'Secs' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-full aspect-square flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 mb-3 group-hover:border-secondary/30 transition-colors">
                      <span className="text-2xl md:text-3xl font-black font-jakarta">{String(item.value).padStart(2, '0')}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-center text-[9px] uppercase tracking-[0.2em] mb-6 text-white/30 font-bold">In Partnership With</p>
                <div className="flex justify-center items-center gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <img src="/cerada-logo.png" alt="CERADA" className="h-8 w-auto brightness-0 invert" />
                  <div className="h-4 w-px bg-white/10"></div>
                  <span className="text-[10px] font-mono tracking-widest text-white/60">ISBN: 978-95-81300</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Repositioned Infinite Marquee - Now at the bottom as a ribbon */}
      <div className="absolute bottom-0 left-0 w-full bg-secondary py-3 z-10 border-t border-black/5">
        <div className="marquee-container">
          <div className="animate-marquee whitespace-nowrap">
            {[1, 2, 3].map((i) => (
              <span key={i} className="inline-block px-10 text-[11px] font-black uppercase tracking-[0.3em] text-primary-dark">
                Hybrid Event: Participate In-Person in Bangkok or Virtually • Submission Deadline: June 15, 2026 • Join 500+ Researchers Globally •
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
