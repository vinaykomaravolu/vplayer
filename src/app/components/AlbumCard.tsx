import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Album } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { ThemeContext } from '../utilities/ThemeContext';
import { AlbumCardPlayIcon } from './icons';

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
          className={`relative shadow-md focus:outline-none bg-gradient-to-t from-${theme}-primary-1  via-${theme}-primary-2 to-${theme}-primary-3 w-44 h-64 rounded-md hover:to-${theme}-secondary-hover hover:from-${theme}-secondary-hover hover:via-${theme}-secondary-hover`}
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
          {AlbumCardPlayIcon}
        </motion.button>
      ) : null}
    </div>
  );
}

export default AlbumCard;
