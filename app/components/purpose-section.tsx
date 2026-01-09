'use client';
import React from 'react';
import { Button } from './button';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const PurposeSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1500, 3500], [0, -400]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      style={{ y }}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-3xl text-center space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-medium font-mono"
        >
          Crowdsourcing our collective intelligence to build the best AI
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Open source AI has been lagging in development behind OpenAI, who has billions of dollars. Users are moving to the dark side. An open, decentralized AI is vitally important to the future of humanity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" variant="outlined">Get the cutting edge AI</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default PurposeSection;