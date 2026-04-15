import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Welcome to ICAEBMS-2026</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
              A Global Platform for Innovation & Collaboration
            </h2>
            <p className="text-lg text-text-muted mb-6">
              We warmly welcome you to the International Conference on Applied Science, Engineering, Education, Business, Management and Social Science & Humanities (ICAEBMS).
            </p>
            <p className="text-text-muted mb-8 italic border-l-4 border-secondary pl-6 py-2">
              "Interdisciplinary Innovations for a Sustainable Future" ICAEBMS serves as a global platform where researchers, academicians, professionals and students from around the world come together to exchange ideas, present findings and build collaborations across disciplines.
            </p>
            <p className="text-text-muted mb-8">
              This conference is not just an academic gathering; it is a space for innovation, interchange and the creation of solutions that address real-world challenges. By bringing together experts in science, engineering, education, business, management, social sciences and humanities, ICAEBMS fosters interdisciplinary connections that pave the way for impactful change.
            </p>
            <button className="btn btn-outline">Read More About Us</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/hero-bg.png" alt="About Conference" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
