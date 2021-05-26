import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import { Album, Playlist, Song } from '../../objects/Object';
import { AlbumCard, CreateAlbumCard } from '../components/AlbumCard';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Albums() {
  const albums: Album[] = [];
  const songs: Song[] = [];
  const [searchTerm, setSearchTerm] = useState<string>('');

  function checkforDup(Alist: Album[], song: Song) {
    for (let i = 0; i < Alist.length; i += 1) {
      if (Alist[i].name === song.album) {
        Alist[i].songs.push(song);
        return true;
      }
    }
    return false;
  }

  function createAlbumList(songlist: Song[]) {
    for (let i = 0; i < songlist.length; i += 1) {
      if (!checkforDup(albums, songlist[i])) {
        console.log(songlist[i].album);
        albums.push({
          name: songlist[i].album,
          artists: [],
          songs: [songlist[i]],
        });
      }
    }
    return 0;
  }

  function testInit() {
    const songsList: Song[] = [];
    songsList.push({
      name: Math.random().toString(36).substring(7),
      artists: ['Takafumi Imamura', 'Takafumi Imamura'],
      length: 197,
      publish_year: 1998,
      path: ['A:\\Music\\Pulse'],
      album: Math.random().toString(36).substring(7),
    });
    createAlbumList(songsList);
  }
  testInit();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="section-page"
      id="albums"
    >
      <div className="flex flex-col h-auto">
        <div className="section-title">Albums</div>
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
            <CreateAlbumCard />
          </div>
          {albums.map((albumlist, i) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div className="p-2" key={i}>
                <AlbumCard album={albumlist} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Albums;
