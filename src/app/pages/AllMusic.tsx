import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import MusicTable from '../components/MusicTable';
import { Song } from '../../objects/Object';
import { ThemeContext } from '../utilities/ThemeContext';
import AddToPlaylist from '../components/AddToPlaylist';
import {
  AllMusicAddIcon,
  AllMusicHeart,
  AllMusicPlayIcon,
} from '../components/Icons';

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
      className={`section-page overflow-y-auto scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
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
                {AllMusicPlayIcon}
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
                      <div className="pr-1"> {AllMusicHeart} </div>
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
                      {AllMusicAddIcon}
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
