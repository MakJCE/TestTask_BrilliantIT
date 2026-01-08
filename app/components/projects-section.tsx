'use client';
import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1000, 3000], [0, -300]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectLogos = ['SOLANA', 'arweave', 'bittensor', 'Gensyn', 'Morpheus'];

  return (
    <motion.section 
      ref={ref}
      style={{ y }}
      className="relative z-10 py-20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects integrated into the Arkade AI Ecosystem
      </motion.h2>
      
      <div className="overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1600] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 w-fit"
        >
          {[...projectLogos, ...projectLogos, ...projectLogos].map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, color: '#ffffff' }}
              className="shrink-0 text-3xl font-bold text-gray-400 transition-colors cursor-pointer"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;