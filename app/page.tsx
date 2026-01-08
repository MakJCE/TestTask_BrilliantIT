'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeadlineSection from './components/headline-section';
import MetricsSection from './components/metrics-section';
import ProjectsSection from './components/projects-section';
import PurposeSection from './components/purpose-section';
import LeaderboardSection from './components/leaderboard-section';
import JoinUsFooterSection from './components/joinus-section';

const ParallaxLanding: React.FC = () => {
  const { scrollY } = useScroll();
  
  const bgY1 = useTransform(scrollY, [0, 2000], [0, 600]);
  const bgY2 = useTransform(scrollY, [0, 3000], [0, 900]);
  const bgY3 = useTransform(scrollY, [0, 4000], [0, 1200]);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white font-sans">
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: bgY1 }}
        className="fixed inset-0 z-0 bg-linear-to-b from-black via-purple-950/20 to-black"
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="fixed inset-0 z-0 opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
      </motion.div>
      <motion.div 
        style={{ y: bgY3 }}
        className="fixed inset-0 z-0 opacity-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.15)_0%,transparent_50%)]" />
      </motion.div>

      {/* Sections */}
      <HeadlineSection />
      <MetricsSection />
      <ProjectsSection />
      <PurposeSection />
      <LeaderboardSection />
      <JoinUsFooterSection />
    </div>
  );
};

export default ParallaxLanding;