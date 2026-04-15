import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Globe } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="section-padding bg-bg-light overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Proceedings & Publications</h2>
          <div className="section-underline mb-12"></div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-primary/10 relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldCheck size={120} className="text-primary" />
            </div>

            <p className="text-xl text-primary-dark font-medium mb-10 leading-relaxed">
              Note: ICAEBMS - 2026 Proceedings will be submitted to the <span className="text-primary font-bold">Web of Science Book Citation Index (BkCI)</span> and <span className="text-primary font-bold">Scopus</span> for evaluation and indexing purposes (T&C)* apply.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center p-6 bg-bg-light rounded-2xl border border-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <FileCheck className="text-primary" />
                </div>
                <h4 className="font-bold text-primary-dark">Scopus</h4>
                <p className="text-xs text-text-muted mt-2 uppercase tracking-widest">Indexed Evaluation</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-bg-light rounded-2xl border border-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Globe className="text-primary" />
                </div>
                <h4 className="font-bold text-primary-dark">Web of Science</h4>
                <p className="text-xs text-text-muted mt-2 uppercase tracking-widest">BkCI Indexing</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-bg-light rounded-2xl border border-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <ShieldCheck className="text-primary" />
                </div>
                <h4 className="font-bold text-primary-dark">Clarivate</h4>
                <p className="text-xs text-text-muted mt-2 uppercase tracking-widest">Global Standards</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-12 opacity-80 flex-wrap">
              <img src="/publication-logos.png" alt="Indexing Logos" className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          <p className="mt-8 text-sm text-text-muted italic">
            *Selected papers from the conference will be considered for publication in high-impact journals, offering authors the chance to showcase their research on a global platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
