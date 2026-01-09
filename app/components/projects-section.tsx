'use client';
import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1000, 3000], [0, -300]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectLogos = [
    'Frame-2.png',
    'Frame-3.png',
    'image 14.png',
    'image 15.png',
    'image 16.png'
  ];

  return (
    <motion.section ref={ref} style={{ y }} className="relative z-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-medium text-center mb-12 font-mono"
      >
        Projects integrated into the Arkade AI Ecosystem
      </motion.h2>

      <div className="overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="flex gap-16 w-fit items-center py-10"
        >
          {[...projectLogos, ...projectLogos, ...projectLogos].map(
            (logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="shrink-0"
              >
                <div className="min-w-40 h-32 relative">
                  <Image
                    src={`/projects_logos/${logo}`}
                    alt={logo}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
