import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Album, Collection, Song } from '../../objects/Object';
import MusicTable from '../components/MusicTable';
import DefaultImage from '../../../assets/images/default.png';
import SearchBar from '../components/SearchBar';
import AddToPlaylist from '../components/AddToPlaylist';
import { ThemeContext } from '../utilities/ThemeContext';
import {
  AlbumCollectionAddIcon,
  AlbumCollectionHeart,
  AlbumCollectionPlayIcon,
} from '../components/icons';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

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
  const { theme, setTheme } = useContext(ThemeContext);

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
            className={`hover:text-${theme}-secondary-hover w-8 h-8 text-${theme}-secondary-text focus:outline-none  bg-${theme}-primary-text bg-opacity-10 rounded-full`}
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
            <div
              className={`flex absolute bg-${theme}-primary-3 top-0 bottom-0 left-0 right-0 opacity-0 rounded-md text-opacity-0`}
            >
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

          <div
            className={`text-${theme}-primary-text  truncate text-3xl sm:text-4xl xl:text-5xl font-bold p-4 justify-start w-full`}
          >
            <div
              className={`w-full text-${theme}-secondary-text truncate text-base font-bold `}
            >
              Album
            </div>
            {collection.name}

            <div
              className={`w-full text-${theme}-secondary-text truncate text-base font-bold pt-4`}
            >
              Artist
            </div>
            <div className={`text-2xl truncate text-${theme}-primary-text`}>
              {collection.artists}
            </div>

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
                    className={`focus:outline-none text-${theme}-secondary-1`}
                  >
                    {AlbumCollectionPlayIcon}
                  </motion.button>
                </div>
              </div>
              <div
                className={`w-full h-auto flex flex-nowrap content-center justify-between text-${theme}-secondary-text`}
              >
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
                          <div className="pr-1"> {AlbumCollectionHeart} </div>
                          Favourite
                        </div>
                      </motion.button>
                    </div>
                  ) : null}

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
                          {AlbumCollectionAddIcon}
                          Add to Playlist
                        </div>
                      </motion.button>
                    </div>
                  ) : null}
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
