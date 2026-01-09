'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './button';

const JoinUsFooterSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section ref={ref} className="relative py-20">
      {/* Join Us */}
      <div className="relative h-150">
        {/* moon */}
        <motion.div className="hidden md:block absolute right-50 top-0 z-0 size-80 2xl:size-100 bg-[url('/images/full_moon.png')] bg-cover bg-center" />
        <div className="px-8 md:px-24 2xl:px-80 max-w-3xl 2xl:max-w-7xl text-start space-y-8 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-medium font-mono"
          >
            Text here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200"
          >
            Every month, we run a competition between all the Al models
            submitted on a leaderboard. The best model will be featured and will
            earn tokens.
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
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="pt-12 relative h-138 flex flex-col justify-end"
      >
        <motion.div className="absolute inset-y-0 bottom-0 z-0 w-full h-138 bg-[url('/images/earth_view.png')] bg-cover bg-center" />

        <div className="w-full flex flex-col items-center gap-8 z-10 px-4 md:px-40">
          <div className="w-full flex justify-center gap-16 border-b border-gray-600 py-6">
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-200 transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-200 transition-colors"
            >
              Leaderboard
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              href="#"
              className="text-gray-200 transition-colors"
            >
              About
            </motion.a>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, backgroundColor: '#4b5563' }}
                  className="w-8 h-8 rounded-full bg-gray-700 transition-colors cursor-pointer"
                />
              ))}
            </div>
            <div className="text-gray-500 text-sm space-x-5">
              <motion.a
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                href="#"
                className="text-gray-400 transition-colors"
              >
                Term of use
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                href="#"
                className="text-gray-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#ffffff' }}
                href="#"
                className="text-gray-400 transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.section>
  );
};
export default JoinUsFooterSection;
