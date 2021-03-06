import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Playlist } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { ThemeContext } from '../utilities/ThemeContext';
import { PlayListCardPlayIcon } from './Icons';

function CreatePlayListCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`shadow-md focus:outline-none bg-gradient-to-t from-${theme}-primary-1 via-${theme}-primary-2 to-${theme}-primary-3 w-44 h-52 rounded-md hover:to-${theme}-secondary-hover hover:from-${theme}-secondary-hover hover:via-${theme}-secondary-hover`}
    >
      <p className="text-6xl font-bold text-white">+</p>
    </motion.button>
  );
}

const varients = {
  initial: { opacity: 0 },
  animate: { opacity: 1, y: -16 },
  exit: { opacity: 0 },
};

function PlayListCard({ playlist }: { playlist: Playlist }) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function playPlaylistHandle(event: any) {
    event.stopPropagation();
    console.log(`Currently playing ${playlist.name}`);
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Link to={`/playlists/${playlist.name}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative shadow-md focus:outline-none bg-gradient-to-t from-${theme}-primary-1 via-${theme}-primary-2 to-${theme}-primary-3 w-44 h-52 rounded-md hover:to-${theme}-secondary-hover hover:from-${theme}-secondary-hover hover:via-${theme}-secondary-hover`}
        >
          <div id="content" className="p-2 h-full w-full">
            <img
              src={DefaultImage}
              alt={DefaultImage}
              className="rounded-md w-full h-3/4"
            />
            <p
              className={`text-xl truncate h-1/4 w-full text-${theme}-primary-text pt-3`}
            >
              {playlist.name}
            </p>
          </div>
        </motion.div>
      </Link>
      {isHover ? (
        <motion.button
          type="button"
          variants={varients}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className={`focus:outline-none absolute bottom-10 right-2 text-${theme}-secondary-1 hover:text-${theme}-secondary-text`}
          onClick={(event) => {
            playPlaylistHandle(event);
          }}
        >
          {PlayListCardPlayIcon}
        </motion.button>
      ) : null}
    </div>
  );
}

export { PlayListCard, CreatePlayListCard };
