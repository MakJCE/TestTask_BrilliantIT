'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from './button';
import { leaderboardData } from '../data/mocked-data';

const LeaderboardSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [2500, 4500], [0, -500]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showMoreRows, setShowMoreRows] = useState(false);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative z-10 py-20 px-6 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-4xl font-bold">LLM Leaderboard</h2>
          <Button variant="outlined" size="sm">
            Submit your model
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          We evaluate LLMs on key benchmarks and list them by AI accuracy to
          lead LLMs on a large variety of different evaluation tasks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm">
            <thead className="border-b border-gray-700">
              <tr className="text-gray-400">
                <th className="text-left py-4 px-4">Rank</th>
                <th className="text-left py-4 px-4">Model Name</th>
                <th className="text-center py-4 px-4">Overall</th>
                <th className="text-center py-4 px-4">Reasoning</th>
                <th className="text-center py-4 px-4">Coding</th>
                <th className="text-center py-4 px-4">Math</th>
                <th className="text-center py-4 px-4">Truthful</th>
                <th className="text-center py-4 px-4">Jailbreak</th>
                <th className="text-center py-4 px-4">Tokens</th>
                <th className="text-right py-4 px-4">Latency</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData
                .slice(0, showMoreRows ? leaderboardData.length : 5)
                .map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    whileHover={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }}
                    className="border-b border-gray-800"
                  >
                    <td className="py-4 px-4">{row.rank}</td>
                    <td className="py-4 px-4 font-medium">{row.model}</td>
                    <td className="text-center py-4 px-4">{row.overall}</td>
                    <td className="text-center py-4 px-4">{row.reasoning}</td>
                    <td className="text-center py-4 px-4">{row.coding}</td>
                    <td className="text-center py-4 px-4">{row.math}</td>
                    <td className="text-center py-4 px-4">{row.truthful}</td>
                    <td className="text-center py-4 px-4">{row.jailbreak}</td>
                    <td className="text-center py-4 px-4">{row.tokens}</td>
                    <td className="text-right py-4 px-4">{row.latency}</td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => setShowMoreRows(!showMoreRows)}
          >
            {showMoreRows ? 'View less' : 'View more'}
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default LeaderboardSection;
