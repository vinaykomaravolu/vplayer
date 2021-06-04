import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Album, Collection, Song } from '../../objects/Object';
import MusicTable from '../components/MusicTable';
import DefaultImage from '../../../assets/images/default.png';
import SearchBar from '../components/SearchBar';
import AddToPlaylist from '../components/AddToPlaylist';

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
    className="h-20 w-20"
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
    className="h-8 w-8"
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

const AddIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </svg>
);

const heart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

function AlbumCollection() {
  const { id }: { id: string } = useParams();
  const [collection, SetCollection] = useState<Album>({
    name: '',
    songs: [],
    image: '',
    artists: [],
  });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selected, setSelected] = useState<Song[]>([]);

  const [albumName, setAlbumName] = useState<string>('');
  const [albumImage, setAlbumImage] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');

  function playCollection() {
    console.log(`Currently playing ${collection.name}`);
  }

  useEffect(() => {
    const album = {
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
      ],
      name:
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7),
      image: '',
      artists: [
        'Takafumi Imamura Takafumi Imamura Takafumi Imamura',
        'Takafumi Imamura Takafumi Imamura Takafumi Imamura',
      ],
    };
    SetCollection(album);
    setAlbumImage(album.image);
    setAlbumName(album.name);
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
      <div className="flex flex-col flex-nowrap">
        <Link to="/Albums" className="w-8 h-8 rounded-full pb-2">
          <motion.button
            id="back"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-secondary2 w-8 h-8 text-secondary  focus:outline-none hover:text-secondary2 bg-white bg-opacity-10 rounded-full"
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
          <AddToPlaylist
            songsToAdd={selected}
            modelIsOpen={isEditOpen}
            setModelIsOpen={setIsEditOpen}
          />

          <div className="flex-shrink-0 relative mb-4 mt-4 cursor-pointer">
            <img
              src={albumImage || DefaultImage}
              alt={DefaultImage}
              className="rounded-md w-0 h-0 sm:w-44 sm:h-44 xl:w-64 xl:h-64 object-cover"
            />
            <div className="flex absolute bg-white top-0 bottom-0 left-0 right-0 opacity-0 rounded-md text-opacity-0">
              <input
                type="file"
                className="w-full h-full"
                onChange={(event) => {
                  if (event.target.files && event.target.files.length === 1) {
                    console.log(event.target.files);
                    setAlbumImage(event.target.files[0].path);
                  }
                }}
              />
            </div>
          </div>

          <div className="text-secondary truncate text-3xl sm:text-4xl xl:text-5xl font-bold p-4 justify-start w-full">
            <div className="w-full text-white truncate text-base font-bold ">
              Album
            </div>
            {collection.name}

            <div className="w-full text-white truncate text-base font-bold pt-4">
              Artist
            </div>
            <div className="text-2xl truncate">{collection.artists}</div>

            <div>
              <div className="flex flex-row w-full justify-between flex-nowrap ">
                <div className="flex flex-row flex-nowrap content-center items-center p-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => {
                      playCollection();
                    }}
                    className="focus:outline-none"
                  >
                    {PlayIcon}
                  </motion.button>
                </div>
              </div>
              <div className="w-full h-auto flex flex-nowrap content-center justify-between">
                <div className="flex flex-row flex-nowrap">
                  {selected.length > 0 ? (
                    <div className="w-full flex flex-nowrap flex-row-reverse">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                          selected.forEach((song) => {
                            console.log(`Add ${song.name} to favourited`);
                          });
                        }}
                        className="focus:outline-none"
                      >
                        <div className="flex flex-nowrap text-xl pl-2 pr-2">
                          <div className="pr-1"> {heart} </div>
                          Favourite
                        </div>
                      </motion.button>
                    </div>
                  ) : (
                    <div className="w-full flex flex-nowrap flex-row-reverse invisible">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                          selected.forEach((song) => {
                            console.log(`Add ${song.name} to favourited`);
                          });
                        }}
                        className="focus:outline-none"
                      >
                        <div className="flex flex-nowrap text-xl pl-2 pr-2">
                          <div className="pr-1"> {heart} </div>
                          Favourite
                        </div>
                      </motion.button>
                    </div>
                  )}

                  {selected.length > 0 ? (
                    <div className="w-full flex flex-nowrap flex-row-reverse">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => {
                          selected.forEach((song) => {
                            console.log(`Add ${song.name} to Playlist`);
                          });
                          setIsEditOpen(true);
                        }}
                        className="focus:outline-none"
                      >
                        <div className="flex flex-nowrap text-xl pl-2 pr-2">
                          {AddIcon}
                          Add to Playlist
                        </div>
                      </motion.button>
                    </div>
                  ) : (
                    <div className="w-full flex flex-nowrap flex-row-reverse invisible">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => {
                          selected.forEach((song) => {
                            console.log(`Add ${song.name} to Playlist`);
                          });
                          setIsEditOpen(true);
                        }}
                        className="focus:outline-none"
                      >
                        <div className="flex flex-nowrap text-xl pl-2 pr-2">
                          {AddIcon}
                          Add to Playlist
                        </div>
                      </motion.button>
                    </div>
                  )}
                </div>
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

export default AlbumCollection;
