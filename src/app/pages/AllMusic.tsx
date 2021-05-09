import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function SearchBar() {
  const node = useRef<any>();
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(true);

  const handleClick = (event: any) => {
    if (node.current.contains(event.target)) {
      // inside click
      return;
    }
    // outside click
    setSearchIsOpen(true);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <div ref={node} className="relative">
      <input
        type="text"
        className={`h-10 ${searchIsOpen ? 'w-0' : 'w-64'} ${
          searchIsOpen ? 'opacity-0' : 'opacity-100'
        }  pl-12 pr-4 rounded-full z-0  transition-width transition-slowest ease duration-300 ease-in-out  focus:shadow focus:outline-none bg-primary2 text-white`}
        placeholder="Search Music"
        disabled={searchIsOpen}
      />
      <button
        type="button"
        onClick={() => {
          setSearchIsOpen(!searchIsOpen);
        }}
        className="focus:outline-none absolute top-1 left-2 text-secondary hover:text-secondary2"
      >
        {SearchIcon}
      </button>
    </div>
  );
}

function AllMusic() {
  const [songs, setSongs] = useState<any>([]);

  useEffect(() => {
    const songsList = [];
    for (let i = 0; i < 1000; i += 1) {
      songsList.push(
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r m-1 p-6 from-yellow-400 via-red-500 to-pink-500 rounded-full "
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
            <SearchBar />
          </div>
        </div>
        <div className="flex flex-col h-full overflow-y-auto">{songs}</div>
      </div>
    </motion.div>
  );
}

export default AllMusic;
