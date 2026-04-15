import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Link as LinkIcon, Users, Settings, Sparkles } from 'lucide-react';

const ThemeSection = () => {
  const objectives = [
    { icon: <Target className="w-6 h-6" />, text: "Encourage interdisciplinary collaboration among researchers, academicians, and industry experts." },
    { icon: <Lightbulb className="w-6 h-6" />, text: "Promote innovative research and practices that contribute to sustainable development." },
    { icon: <LinkIcon className="w-6 h-6" />, text: "Bridge the gap between science, technology, business and society through discourse." },
    { icon: <Users className="w-6 h-6" />, text: "Empower future leaders and young scholars with insights for global engagement." },
    { icon: <Settings className="w-6 h-6" />, text: "Foster solutions that are practical, inclusive and impactful for real-world challenges." },
  ];

  return (
    <section id="theme" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-secondary font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles size={14} />
            <span>Vision & Mission</span>
          </motion.div>
          
          <h2 className="section-title">Conference Theme</h2>
          <div className="section-underline mb-10"></div>
          
          <p className="text-2xl md:text-4xl text-primary-dark font-black max-w-4xl mx-auto leading-[1.2] tracking-tight">
            “Interdisciplinary Innovations for <span className="text-secondary">a Sustainable Future</span>”
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white relative group">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-3xl -z-10 group-hover:rotate-12 transition-transform duration-500"></div>
              
              <h3 className="text-2xl font-extrabold text-primary-dark mb-6 leading-tight">Core Vision</h3>
              <p className="text-lg text-text-muted leading-relaxed font-medium mb-8">
                ICAEBMS brings together diverse fields of knowledge to address global challenges. By uniting science, engineering, business, and humanities, we foster creativity and sustainable solutions that transcend traditional boundaries.
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center">
                   <img src="/icaebms-logo.png" alt="Logo" className="h-6 w-auto" />
                </div>
                <div>
                   <p className="font-bold text-primary-dark text-sm uppercase tracking-widest leading-none">Global Standards</p>
                   <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] mt-1 font-bold">Innovation Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-1 hidden lg:flex justify-center pt-20">
             <div className="w-px h-64 bg-slate-200"></div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-black text-primary-dark/40 mb-6 uppercase tracking-[0.4em]">Our Core Objectives</p>
            {objectives.map((obj, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-white hover:bg-primary-dark transition-all duration-500 group border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-500 group-hover:rotate-6">
                  {obj.icon}
                </div>
                <p className="font-bold text-[15px] leading-snug group-hover:text-white transition-colors">
                  {obj.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
