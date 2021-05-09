import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AllMusic() {
  const [songs, setSongs] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const songsList = [];
    for (let i = 0; i < 1000; i += 1) {
      songsList.push(
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r m-1 p-6 from-secondary via-red-500 to-red-500  rounded-full opacity-30"
        />
      );
    }
    setSongs(songsList);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-page"
    >
      <div className="flex flex-col h-full">
        <div className="section-title">Music</div>
        <div className="flex justify-between">
          <div id="play">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" focus:outline-none text-secondary "
            >
              {PlayIcon}
            </motion.button>
          </div>
          <div id="search">
            <SearchBar
              state={searchTerm}
              setState={setSearchTerm}
              handleSearch={(event: any) => {
                console.log(`Searching ${event.target.value}`);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col h-full overflow-y-auto">{songs}</div>
      </div>
    </motion.div>
  );
}

export default AllMusic;
