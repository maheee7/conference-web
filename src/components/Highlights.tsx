import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Mic2, Users, MessageSquare, Award, GraduationCap, Layers } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    { icon: <Layers />, title: "Multidisciplinary Platform", desc: "A unique forum uniting applied science, engineering, business, and humanities." },
    { icon: <Globe />, title: "Global Participation", desc: "Engage with renowned scholars and industry leaders from across the world." },
    { icon: <BookOpen />, title: "Call for Papers & Publications", desc: "Opportunities to publish in reputed Scopus indexed journals." },
    { icon: <Mic2 />, title: "Expert Keynote Sessions", desc: "Insights from distinguished speakers on cutting-edge research." },
    { icon: <MessageSquare />, title: "Interactive Workshops", desc: "Hands-on learning and thought-provoking debates on contemporary issues." },
    { icon: <Users />, title: "Networking Opportunities", desc: "Build academic, industrial and international collaborations." },
    { icon: <Award />, title: "Recognition & Awards", desc: "Best paper and presentation awards for outstanding contributions." },
    { icon: <GraduationCap />, title: "Student Engagement", desc: "Special sessions to inspire and guide the next generation of scholars." },
  ];

  return (
    <section id="highlights" className="section-padding bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Highlights of ICAEBMS</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-primary hover:border-secondary transition-all group"
            >
              <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
