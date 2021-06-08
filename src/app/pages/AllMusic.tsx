import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import SearchBar from '../components/SearchBar';
import MusicTable from '../components/MusicTable';
import { Song } from '../../objects/Object';
import { ThemeContext } from '../utilities/ThemeContext';
import AddToPlaylist from '../components/AddToPlaylist';

const PlayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16"
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

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AllMusic() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selected, setSelected] = useState<Song[]>([]);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const songsList: Song[] = [];
    for (let i = 0; i < 100; i += 1) {
      songsList.push({
        name: Math.random().toString(36).substring(7),
        artists: ['Takafumi Imamura', 'Takafumi Imamura'],
        length: 197,
        publish_year: 1998,
        path: ['A:\\Music\\Pulse'],
        album: Math.random().toString(36).substring(7),
      });
      songsList.push({
        name: Math.random().toString(36).substring(7),
        artists: ['Takafumi Imamura', 'Takafumi Imamura'],
        length: 200,
        publish_year: 1998,
        path: ['A:\\Music\\Pulse'],
        album: Math.random().toString(36).substring(7),
      });
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
      <ReactTooltip />
      <div className="flex flex-col h-full">
        <AddToPlaylist
          songsToAdd={selected}
          modelIsOpen={isEditOpen}
          setModelIsOpen={setIsEditOpen}
        />

        <div className={`section-title text-${theme}-primary-text`}>Music</div>
        <div className="flex justify-between items-center ">
          <div className={`text-${theme}-secondary-text flex items-center`}>
            <div id="play">
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`focus:outline-none text-${theme}-secondary-1`}
              >
                {PlayIcon}
              </motion.button>
            </div>

            <div>
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
              ) : null}
            </div>

            <div>
              {selected.length > 0 ? (
                <div className="w-full flex flex-row flex-nowrap ">
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
              ) : null}
            </div>
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

        <MusicTable
          selected={selected}
          setSelected={setSelected}
          data={songs}
        />
      </div>
    </motion.div>
  );
}

export default AllMusic;
