import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import { Playlist } from '../../objects/Object';
import PlayListCard from '../components/PlayListCard';

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

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
function Playlists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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
      className="section-page"
    >
      <div className="flex flex-col h-full">
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
