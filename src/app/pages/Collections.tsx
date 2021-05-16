import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Collection } from '../../objects/Object';
import MusicTable from '../components/MusicTable';
import DefaultImage from '../../../assets/images/default.png';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

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

function Collections() {
  const { id }: { id: string } = useParams();
  const [collection, SetCollection] = useState<Collection>({
    name: '',
    songs: [],
  });

  function playCollection() {
    console.log(`Currently playing ${collection.name}`);
  }

  useEffect(() => {
    const playlist = {
      songs: [
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
      ],
      name: id,
    };
    SetCollection(playlist);
  }, [id]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="settings"
      className="section-page"
    >
      <div className="flex flex-col w-full h-full">
        <Link to="/playlists">
          <motion.button
            id="back"
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-secondary2 text-secondary focus:outline-none hover:text-secondary2 bg-white bg-opacity-10 rounded-full"
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
        <div className="flex flex-row w-full flex-nowrap items-center">
          <img
            src={collection.image ? collection.image : DefaultImage}
            alt={DefaultImage}
            className="rounded-md w-0 h-0 sm:w-40 sm:h-40 xl:w-52 xl:h-52 object-cover"
          />
          <div className="text-secondary truncate text-3xl sm:text-4xl xl:text-5xl font-bold  p-4">
            {collection.name}
            <div className="flex flex-row flex-nowrap justify pt-4 pb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => {
                  playCollection();
                }}
              >
                {' '}
                {PlayIcon}
              </motion.button>
            </div>
          </div>
        </div>
        <MusicTable data={collection.songs} />
      </div>
    </motion.div>
  );
}

export default Collections;
