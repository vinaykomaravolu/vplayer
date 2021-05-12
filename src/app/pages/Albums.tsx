import React from 'react';
import { motion } from 'framer-motion';

function Albums() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-page"
    >
      Albums
    </motion.div>
  );
}

export default Albums;
