import React, { useContext } from 'react';
import Wave from 'react-wavify';
import { motion } from 'framer-motion';
import { ThemeContext } from '../utilities/ThemeContext';
import ThemeCSS from '../utilities/ThemeCSS';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <div className="pt-56 h-full w-full">
        <Wave
          options={{
            height: 50,
            amplitude: 50,
            speed: 0.2,
            points: 4,
          }}
          fill="url(#gradient)"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop
                offset="30%"
                stopColor={`${ThemeCSS(`${theme}-primary`)['1']}`}
              />
              <stop
                offset="70%"
                stopColor={`${ThemeCSS(`${theme}-primary`)['2']}`}
              />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </motion.div>
  );
}

export default Home;
