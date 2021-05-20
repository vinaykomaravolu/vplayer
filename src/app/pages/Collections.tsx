import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Collection, Song } from '../../objects/Object';
import MusicTable from '../components/MusicTable';
import DefaultImage from '../../../assets/images/default.png';
import EditPlaylistModal from '../components/EditPlaylistModal';
import SearchBar from '../components/SearchBar';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const EditIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

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

const DeleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selected, setSelected] = useState<Song[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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
      <div className="flex flex-col">
        <Link to="/playlists" className="w-8 h-8">
          <motion.button
            id="back"
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-secondary2 w-8 text-secondary focus:outline-none hover:text-secondary2 bg-white bg-opacity-10 rounded-full"
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
          <EditPlaylistModal
            modalIsOpen={isEditOpen}
            playlist={collection}
            setModalIsOpen={setIsEditOpen}
          />
          <button type="button" className="flex-shrink-0 relative">
            <img
              src={collection.image ? collection.image : DefaultImage}
              alt={DefaultImage}
              className="rounded-md w-0 h-0 sm:w-40 sm:h-40 xl:w-52 xl:h-52 object-cover"
            />
          </button>

          <div className="text-secondary truncate text-3xl sm:text-4xl xl:text-5xl font-bold p-4">
            <div className="text-white truncate text-lg font-bold ">
              Playlist
            </div>
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
                {PlayIcon}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => {
                  setIsEditOpen(true);
                }}
              >
                {EditIcon}
              </motion.button>

              {selected.length > 0 ? (
                <div className="w-full flex flex-nowrap flex-row-reverse">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => {
                      selected.forEach((song) => {
                        console.log(`Deleted ${song.name}`);
                      });
                    }}
                  >
                    {DeleteIcon}
                  </motion.button>
                </div>
              ) : null}
              <div className="w-full h-auto flex flex-nowrap flex-row-reverse">
                <SearchBar
                  state={searchTerm}
                  setState={setSearchTerm}
                  handleSearch={(event: any) => {
                    console.log(`Searching ${event.target.value}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <MusicTable
          setSelected={setSelected}
          selected={selected}
          data={collection.songs}
        />
      </div>
    </motion.div>
  );
}

export default Collections;
