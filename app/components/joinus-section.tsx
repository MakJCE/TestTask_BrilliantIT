'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './button';

const JoinUsFooterSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className="relative z-10 bg-linear-to-b from-black via-blue-950/30 to-black py-20 px-6 md:px-12"
    >
      {/* Join Us */}
      <div className="px-8 md:px-24 max-w-3xl text-start space-y-8 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-semibold font-mono"
        >
          Text here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-200"
        >
          Every month, we run a competition between all the Al models submitted
          on a leaderboard. The best model will be featured and will earn
          tokens.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" variant="outlined">
            Read Whitepaper
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-t border-gray-800 pt-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-400 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-400 transition-colors"
            >
              Leaderboard
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-400 transition-colors"
            >
              About
            </motion.a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2024 Arkade AI. All rights reserved.
          </div>

          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, backgroundColor: '#4b5563' }}
                className="w-8 h-8 rounded-full bg-gray-700 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </motion.footer>
    </motion.section>
  );
};
export default JoinUsFooterSection;
