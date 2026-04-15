import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    { label: "Early Bird Registration", date: "31 Dec 2025", icon: <Clock /> },
    { label: "Abstract Submission", date: "31 Jan 2026", icon: <Clock /> },
    { label: "Full Paper Submission", date: "28 Feb 2026", icon: <Clock /> },
    { label: "Final Registration", date: "31 Mar 2026", icon: <CheckCircle2 /> },
  ];

  return (
    <section id="dates" className="section-padding bg-bg-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Important Deadlines</h2>
          <div className="section-underline"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-8 md:mb-0 md:w-1/4 px-6 text-center md:flex md:flex-col md:items-center"
              >
                {/* Connector for Mobile */}
                <div className="absolute -left-[33px] md:static w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary z-10 md:mb-6 shadow-md">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 14 })}
                </div>

                <h4 className="text-primary-dark font-bold text-lg mb-2">{item.label}</h4>
                <div className="bg-primary text-white py-1 px-4 rounded-full text-sm font-mono inline-block">
                  {item.date}
                </div>

                {/* Desktop Connector Line */}
                {index < dates.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-[60%] w-[80%] h-[2px] bg-primary/30 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
