import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    "Present Your Research – Share your ideas, findings and innovations with a global audience.",
    "Get Published – Opportunities to publish in reputed journals with high impact factor and indexed conference proceedings.",
    "Learn from Experts – Gain insights from keynote addresses, workshops and panel discussions by leading scholars and professionals.",
    "Expand Your Network – Connect with academicians, industry leaders, policymakers and fellow researchers worldwide.",
    "Interdisciplinary Exposure – Explore diverse perspectives by engaging with multiple fields of study.",
    "Recognition & Awards – Compete for Best Paper and Best Presentation awards.",
    "Global Visibility – Enhance your academic profile and contribute to international collaborations.",
    "Empower the Future – Inspire and be inspired by young researchers, innovators and thought leaders."
  ];

  return (
    <section id="why-join" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">Why Join Us at ICAEBMS?</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              The International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS) is more than just an academic event; it's a global platform for innovation, collaboration and growth.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-secondary shrink-0 mt-1" size={18} />
                  <p className="text-text-muted font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <button className="btn btn-primary">Join the Community</button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="/hero-bg.png" alt="Collaborate" className="rounded-2xl shadow-xl h-64 w-full object-cover" />
                <div className="bg-primary p-8 rounded-2xl text-white">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Countries Participating</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary p-8 rounded-2xl text-primary-dark">
                  <h3 className="text-3xl font-bold mb-2">200+</h3>
                  <p className="text-sm opacity-80 uppercase tracking-widest">Research Papers</p>
                </div>
                <img src="/hero-bg.png" alt="Network" className="rounded-2xl shadow-xl h-80 w-full object-cover" />
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
