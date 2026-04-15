import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Calendar } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    { label: "Early Bird Registration", date: "31 Dec 2025", type: 'warning' },
    { label: "Abstract Submission", date: "31 Jan 2026", type: 'primary' },
    { label: "Full Paper Submission", date: "28 Feb 2026", type: 'primary' },
    { label: "Final Registration", date: "31 Mar 2026", type: 'success' },
  ];

  return (
    <section id="dates" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Timeline</span>
          <h2 className="section-title">Important Deadlines</h2>
          <div className="section-underline"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
            {dates.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-12 transition-transform duration-500 ${
                    index === 0 ? 'bg-amber-100 text-amber-600' : 
                    index === 3 ? 'bg-emerald-100 text-emerald-600' : 'bg-primary-light text-primary'
                  }`}>
                    {index === 3 ? <CheckCircle2 size={24} /> : <Calendar size={24} />}
                  </div>
                  
                  <h4 className="text-primary-dark font-black text-sm uppercase tracking-widest mb-4 leading-tight min-h-[40px]">
                    {item.label}
                  </h4>
                  
                  <div className={`mt-auto py-2 px-5 rounded-full text-xs font-black tracking-[0.1em] border ${
                    index === 0 ? 'bg-amber-50 border-amber-200 text-amber-700' : 
                    index === 3 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-primary-light border-primary-dark/5 text-primary-dark'
                  }`}>
                    {item.date}
                  </div>
                </div>
                
                {index < dates.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-[2px] bg-slate-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 glass-dark bg-primary-dark rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
             <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-secondary text-primary-dark rounded-2xl flex items-center justify-center animate-pulse">
                   <Clock size={28} />
                </div>
                <div>
                   <h5 className="text-white font-bold text-lg">Don't Miss Out!</h5>
                   <p className="text-white/50 text-sm italic">All deadlines are strictly followed by UTC+7 time zone.</p>
                </div>
             </div>
             <button className="btn btn-primary px-8 py-3">Add to Calendar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
