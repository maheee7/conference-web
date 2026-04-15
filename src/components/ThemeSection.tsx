import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Link as LinkIcon, Users, Settings } from 'lucide-react';

const ThemeSection = () => {
  const objectives = [
    { icon: <Target className="w-8 h-8 text-secondary" />, text: "Encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers." },
    { icon: <Lightbulb className="w-8 h-8 text-secondary" />, text: "Promote innovative research and practices that contribute to sustainable development." },
    { icon: <LinkIcon className="w-8 h-8 text-secondary" />, text: "Bridge the gap between science, technology, business and society through knowledge-sharing and discourse." },
    { icon: <Users className="w-8 h-8 text-secondary" />, text: "Empower future leaders and young scholars with insights and opportunities for global engagement." },
    { icon: <Settings className="w-8 h-8 text-secondary" />, text: "Foster solutions that are practical, inclusive and impactful in addressing real-world challenges." },
  ];

  return (
    <section id="theme" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Conference Theme</h2>
          <p className="text-xl text-primary font-semibold">“Interdisciplinary Innovations for a Sustainable Future”</p>
          <div className="section-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-text-muted mb-6">
              The theme reflects the core vision of ICAEBMS bringing together diverse fields of knowledge to address global challenges. By uniting applied science, engineering, education, business, management, social sciences and humanities, the conference aims to foster creativity, collaboration and sustainable solutions that transcend traditional boundaries.
            </p>
            <img src="/icaebms-logo.png" alt="Logo" className="h-32 w-auto opacity-20 grayscale" />
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">Through this theme, ICAEBMS seeks:</h3>
            {objectives.map((obj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-bg-light transition-colors group"
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform">
                  {obj.icon}
                </div>
                <p className="text-text-muted font-medium">{obj.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
