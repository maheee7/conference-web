import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    { title: "Present Your Research", desc: "Share your ideas, findings and innovations with a global audience." },
    { title: "Get Published", desc: "Opportunities in high impact journals and indexed proceedings." },
    { title: "Learn from Experts", desc: "Gain insights from keynote addresses and elite panel discussions." },
    { title: "Expand Your Network", desc: "Connect with academicians, industry leaders and policymakers." },
  ];

  return (
    <section id="why-join" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Engagement</span>
            <h2 className="section-title text-left leading-tight mb-8">Why Join Us at <span className="text-secondary">ICAEBMS?</span></h2>
            <p className="text-xl text-text-muted mb-12 leading-relaxed font-medium">
              It’s more than just an academic event; it’s a global platform for innovation, collaboration and professional growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary border border-slate-100">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary-dark mb-2 text-lg">{benefit.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-5">
              <button className="btn btn-primary">Join the Community</button>
              <div className="flex -space-x-3 items-center ml-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-xl">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                 ))}
                 <div className="pl-6 text-[10px] font-black uppercase tracking-widest text-primary-dark/40">
                    Join 500+ Researchers
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-6 items-end">
              <div className="space-y-6">
                <div className="bg-primary-dark p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
                  <Zap className="text-secondary mb-6" size={32} />
                  <h3 className="text-5xl font-black mb-2 tracking-tighter">50+</h3>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.3em]">Participating Countries</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Collaborate" 
                  className="rounded-[2.5rem] shadow-2xl h-80 w-full object-cover border-4 border-white" 
                />
              </div>
              <div className="space-y-6 pb-20">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Network" 
                  className="rounded-[2.5rem] shadow-2xl h-[400px] w-full object-cover border-4 border-white" 
                />
                <div className="bg-secondary p-8 rounded-[2rem] text-primary-dark shadow-2xl relative overflow-hidden">
                  <h3 className="text-4xl font-black mb-1 tracking-tighter">200+</h3>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] leading-tight">Published Research Papers <br /> Globally Recogized</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
