import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Settings, GraduationCap, Briefcase, Users, PieChart, FileText } from 'lucide-react';

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
    <section id="tracks" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Session Tracks / Call for Papers</h2>
          <p className="text-text-muted max-w-2xl mx-auto">We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:</p>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-primary-dark p-8 rounded-2xl text-white flex flex-col justify-between h-56"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(track.icon as React.ReactElement, { size: 120 })}
              </div>
              <div>
                <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">Track 0{track.id}</span>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-secondary transition-colors">{track.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <FileText size={16} /> <span>Submit Abstract</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-muted mb-6 italic">For detailed submission guidelines, please visit our submission portal.</p>
          <button className="btn btn-primary">Download Submission Guide</button>
        </div>
      </div>
    </section>
  );
};

export default SessionTracks;
