import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import { Playlist } from '../../objects/Object';
import { PlayListCard, CreatePlayListCard } from '../components/PlayListCard';
import { ThemeContext } from '../utilities/ThemeContext';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const playlistsList: Playlist[] = [];
    for (let i = 0; i < 30; i += 1) {
      playlistsList.push({
        songs: [],
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
          Math.random().toString(36).substring(7) +
          Math.random().toString(36).substring(7),
      });
    }
    setPlaylists(playlistsList);
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`section-page text-${theme}-primary-text overflow-y-auto scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <div className="flex flex-col h-auto">
        <div className="section-title">Playlists</div>
        <div className="flex justify-end">
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
        <div className="flex flex-row flex-wrap ">
          <div className="p-2">
            <CreatePlayListCard />
          </div>
          {playlists.map((playlist, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="p-2" key={i}>
                <PlayListCard playlist={playlist} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Playlists;
