import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Album } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { ThemeContext } from '../utilities/ThemeContext';

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14"
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

const varients = {
  initial: { opacity: 0 },
  animate: { opacity: 1, y: -16 },
  exit: { opacity: 0 },
};

function AlbumCard({ album }: { album: Album }) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  function playPlaylistHandle(event: any) {
    event.stopPropagation();
    console.log(`Currently playing ${album.name}`);
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
      <Link to={`/albums/${album.name}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative shadow-md focus:outline-none bg-gradient-to-t from-${theme}-primary-1  via-${theme}-primary-2 to-${theme}-primary-3 w-44 h-64 rounded-md hover:to-${theme}-secondary-2 hover:from-${theme}-secondary-2 hover:via-${theme}-secondary-2`}
        >
          <div id="content" className="p-2 h-full w-full">
            <img
              src={DefaultImage}
              alt={DefaultImage}
              className="rounded-md w-full h-36"
            />
            <p
              className={`text-2xl truncate w-full text-${theme}-primary-text pt-3 pb-3`}
            >
              {album.name}
            </p>
            <p
              className={`text-sm truncate  w-full text-${theme}-primary-text`}
            >
              <p className={`text-${theme}-secondary-text `}>Artists</p>
              {album.artists}
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
          className={`focus:outline-none absolute bottom-24 right-2 text-${theme}-secondary-text  hover:text-${theme}-secondary-hover`}
          onClick={(event) => {
            playPlaylistHandle(event);
          }}
        >
          {PlayIcon}
        </motion.button>
      ) : null}
    </div>
  );
}

export default AlbumCard;
