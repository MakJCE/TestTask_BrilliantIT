'use client';
import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const MetricsSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -200]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    { value: '10,873', label: 'LLM records' },
    { value: '$72,470,728', label: 'Paid to data scientists' },
    { value: '6,557', label: 'Members' }
  ];

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative z-10 py-20 px-6 md:px-12"
    >
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-linear-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-full p-8 border border-red-500/20 flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
              className="text-5xl font-bold text-white mb-2"
            >
              {metric.value}
            </motion.div>
            <div className="text-gray-400">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default MetricsSection;
