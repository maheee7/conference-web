import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Mic2, Users, MessageSquare, Award, GraduationCap, Layers } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    { icon: <Layers />, title: "Multidisciplinary", desc: "A forum uniting science, engineering, business, and humanities." },
    { icon: <Globe />, title: "Global Reach", desc: "Engage with renowned scholars and leaders from across the world." },
    { icon: <BookOpen />, title: "Indexed Papers", desc: "Opportunities to publish in reputed Scopus indexed journals." },
    { icon: <Mic2 />, title: "Expert Keynotes", desc: "Insights from distinguished speakers on cutting-edge research." },
    { icon: <MessageSquare />, title: "Workshops", desc: "Hands-on learning and debates on contemporary issues." },
    { icon: <Users />, title: "Networking", desc: "Build academic, industrial and international collaborations." },
    { icon: <Award />, title: "Recognition", desc: "Best paper and presentation awards for outstanding contributions." },
    { icon: <GraduationCap />, title: "Scholars", desc: "Special sessions to guide the next generation of researchers." },
  ];

  return (
    <section id="highlights" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Key Features</span>
          <h2 className="section-title">Conference Highlights</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-secondary transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 group relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-dark mb-8 group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-500 group-hover:rotate-6 shadow-sm">
                {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
              </div>
              <h3 className="text-xl font-extrabold text-primary-dark mb-4 leading-tight group-hover:text-secondary group-hover:-translate-y-1 transition-all duration-300">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-medium">{item.desc}</p>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
