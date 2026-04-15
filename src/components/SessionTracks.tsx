import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Settings, GraduationCap, Briefcase, Users, PieChart, FileText, ArrowUpRight } from 'lucide-react';

const SessionTracks = () => {
  const tracks = [
    { id: 1, title: "Applied Science", icon: <Beaker /> },
    { id: 2, title: "Engineering & Technological Advancements", icon: <Settings /> },
    { id: 3, title: "Education & Pedagogical Innovations", icon: <GraduationCap /> },
    { id: 4, title: "Business & Management Studies", icon: <Briefcase /> },
    { id: 5, title: "Social Science and Humanities", icon: <Users /> },
    { id: 6, title: "Finance, Accountancy and Marketing", icon: <PieChart /> },
  ];

  return (
    <section id="tracks" className="section-padding bg-white relative">
      <div className="container-custom mx-auto">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Research Areas</span>
          <h2 className="section-title">Session Tracks / Call for Papers</h2>
          <div className="section-underline mb-8"></div>
          <p className="text-text-muted max-w-2xl mx-auto text-lg font-medium">
            We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div 
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-[2.5rem] flex flex-col justify-between h-[340px] transition-all duration-500 border border-slate-100 hover:border-secondary/20 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-50 rounded-full group-hover:bg-secondary/10 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-dark text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-500 group-hover:rotate-6 shadow-xl shadow-primary-dark/10">
                  {React.cloneElement(track.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                </div>
                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Track {track.id.toString().padStart(2, '0')}</span>
                <h3 className="text-2xl font-black text-primary-dark leading-tight group-hover:text-secondary group-hover:-translate-y-1 transition-all duration-300">
                  {track.title}
                </h3>
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary-dark/40 group-hover:text-primary-dark transition-colors">
                  <FileText size={14} className="text-secondary" /> <span>Submission portal</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-16 bg-primary-dark rounded-[3.5rem] text-white text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
           <p className="text-2xl text-white/80 mb-10 italic max-w-3xl mx-auto font-medium">
             "Shape the future of interdisciplinary research. Share your findings with a global community of scholars."
           </p>
           <div className="flex flex-wrap justify-center gap-6">
             <button className="btn btn-primary px-12 py-4">Submit Your Paper</button>
             <button className="btn btn-outline border-white/20 px-12 py-4 hover:bg-white hover:text-primary-dark">Authors' Guide</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SessionTracks;
