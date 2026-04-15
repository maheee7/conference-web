import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Globe, Database, Award } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom text-center relative z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Academic Recognition</span>
          <h2 className="section-title">Proceedings & Publications</h2>
          <div className="section-underline mb-12"></div>
          
          <div className="bg-primary-dark/[0.02] p-12 rounded-[3.5rem] border border-slate-100 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            
            <div className="flex flex-col items-center mb-12">
               <div className="w-20 h-20 bg-primary-dark text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary-dark/20 relative">
                  <Award size={40} className="text-secondary" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-lg flex items-center justify-center border-4 border-white">
                     <FileCheck size={14} className="text-primary-dark" />
                  </div>
               </div>
               <p className="text-2xl md:text-3xl text-primary-dark font-black mb-6 leading-tight">
                 ICAEBMS - 2026 Proceedings
               </p>
               <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed font-medium">
                 All accepted papers will be submitted to the <span className="text-primary-dark font-black underline decoration-secondary decoration-4 underline-offset-4">Web of Science Book Citation Index (BkCI)</span> and <span className="text-primary-dark font-black underline decoration-secondary decoration-4 underline-offset-4">Scopus</span> for evaluation and indexing purposes.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Scopus', sub: 'Indexed Evaluation', icon: <Database /> },
                { label: 'Web of Science', sub: 'BkCI Indexing', icon: <Globe /> },
                { label: 'Clarivate', sub: 'Global Standards', icon: <ShieldCheck /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-slate-50 text-secondary rounded-xl flex items-center justify-center mb-4 transition-colors">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <h4 className="font-black text-primary-dark uppercase tracking-widest text-sm">{item.label}</h4>
                  <p className="text-[10px] text-text-muted mt-2 uppercase tracking-[0.2em] font-bold">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Scopus_logo.svg/1200px-Scopus_logo.svg.png" alt="Scopus" className="h-6 w-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Web_of_Science_Logo.svg/1280px-Web_of_Science_Logo.svg.png" alt="Web of Science" className="h-6 w-auto" />
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200 inline-block">
             <p className="text-sm text-text-muted italic flex items-center gap-3 font-medium">
               <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
               Selected papers will be considered for publication in high-impact journals.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
