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
  
  const bgY1 = useTransform(scrollY, [0, 4000], [0, -900]);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white font-sans">
      {/* Parallax Background Layers */}
      <motion.div 
        style={{ y: bgY1 }}
        className="fixed inset-y-0 right-0 size-200 z-0 bg-[url('/images/dark_side_planet.png')] bg-cover bg-center"
      />
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