import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Collections() {
  const { id }: { id: string } = useParams();
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="settings"
      className="section-page break-words"
    >
      <Link to="/playlists">
        <motion.button
          id="back"
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-secondary focus:outline-none hover:text-secondary2 bg-white bg-opacity-10 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </Link>

      {id}
    </motion.div>
  );
}

export default Collections;
