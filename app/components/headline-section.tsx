import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from './button';

const HeadlineSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <motion.section
      style={{ y, opacity }}
      className="relative z-10 min-h-screen flex flex-col items-start justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 absolute top-8 w-full flex gap-4 justify-center"
      >
        <Button variant="ghost" size="sm">
          LLM Leaderboard
        </Button>
        <Button variant="outlined" size="sm">
          Buy Spice AI
        </Button>
      </motion.div>

      <div className=" text-start space-y-8 px-6 md:px-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[40px] 2xl:text-[128px] font-medium font-mono bg-main bg-clip-text text-transparent leading-tight sm:text-[60px] md:text-[80px] lg:text-[100px]"
        >
          A new economic primitive for funding decentralized AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mx-auto w-full"
        >
          We fund, train, and pay for the best open source decentralized LLMs to
          compete against OpenAI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" variant="outlined">
            Buy Spice AI
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeadlineSection;
