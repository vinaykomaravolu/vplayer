import React from 'react';
import { motion } from 'framer-motion';
import { Song } from '../../objects/Object';

const { ipcRenderer } = require('electron');

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Home() {
  const song: Song = {
    album: 'idk',
    length: 100,
    path: [
      "A:\\Music\\Final Fantasy VII Remake - Original Soundtrack\\Disc 2\\02-01 - Avalanche's Theme.flac",
    ],
    artists: ['yoko taro'],
    name: 'Kaine (Salvation)',
    publish_year: 2006,
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-page"
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="focus:outline-none font-bold text-primary rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 p-2"
        onClick={() => {
          ipcRenderer.send('player-load-song', song);
        }}
      >
        Play {song.name}
      </motion.button>
    </motion.div>
  );
}

export default Home;
