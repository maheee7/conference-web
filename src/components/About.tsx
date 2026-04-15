import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Welcome to ICAEBMS-2026</span>
            <h2 className="section-title text-left leading-tight mb-8">
              A Global Platform for <span className="text-secondary text-5xl md:text-7xl block mt-2">Innovation</span>
            </h2>
            <p className="text-xl text-text-muted mb-8 font-medium leading-relaxed">
              We warmly welcome you to the International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities.
            </p>
            
            <div className="relative mb-10 pl-10 border-l-4 border-secondary">
               <p className="text-primary-dark font-black text-xl italic tracking-tight leading-relaxed">
                 "Interdisciplinary Innovations for a Sustainable Future"
               </p>
               <p className="text-text-muted text-sm mt-2 font-bold uppercase tracking-widest">Official 2026 Theme</p>
            </div>

            <p className="text-text-muted mb-10 text-[16px] leading-relaxed font-medium">
              ICAEBMS serves as a global platform where researchers, academicians, and professionals come together to exchange ideas, present findings and build collaborations that pave the way for impactful global change.
            </p>
            
            <button className="btn btn-outline border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white px-10">
              Explore Our Vision
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-[12px] border-white">
              <img 
                src="/hero-bg.png"
                alt="About Conference" 
                className="w-full h-auto scale-105 hover:scale-100 transition-transform duration-700" 
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="absolute -bottom-12 -left-12 bg-primary-dark text-white p-12 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-white/10">
               <span className="block text-5xl font-black text-secondary tracking-tighter">500+</span>
               <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">Global Delegates</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
