/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { Collection, Playlist, Song } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { CreatePlayListCard, PlayListCard } from './PlayListCard';
import MusicTable from './MusicTable';
import SongDropdown from './SongDropdown';
import Playlists from '../pages/Playlists';

function PlaylistRow({
  playlist,
  i,
  handleSelect,
}: {
  playlist: Playlist;
  i: number;
  handleSelect: any;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div
      className={`grid grid-cols-12
   text-white font-normal bg-${
     i % 2 === 0 ? 'primary' : 'primary2'
   } h-14 hover:bg-secondary2`}
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      id={`playlist-${i}`}
      onDoubleClick={(event) => {
        console.log(playlist);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="col-span-4 flex items-center truncate mr-4 pl-5">
        <input
          type="checkbox"
          onClick={() => {
            handleSelect();
          }}
          className={`cursor-pointer form-checkbox mr-2 h-7 w-7 text-secondary2 ${
            isHover ? 'bg-primary3' : 'bg-transparent'
          } border-secondary rounded-sm`}
        />
        {playlist.name}
      </div>
    </motion.div>
  );
}

function PlaylistTable({
  data,
  selected,
  setSelected,
}: {
  data: Song[];
  selected: Song[];
  setSelected: React.Dispatch<React.SetStateAction<Song[]>>;
}) {
  const [sortBy, setSortBy] = useState<string>('');
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [PL, setPL] = useState<Playlist[]>();

  const handleSelected = (playlist: Playlist) => {
    const sel: Playlist[] = [...selected];
    let found = -1;
    for (let s = 0; s < sel.length; s += 1) {
      if (sel[s] === playlist) {
        found = s;
      }
    }
    if (found > -1) {
      sel.splice(found, 1);
    } else {
      sel.push(playlist);
    }
    setSelected(sel);
  };

  useEffect(() => {
    const playlist: Playlist[] = [];
    for (let i = 0; i < 10; i += 1) {
      playlist.push({
        songs: [],
        name: Math.random().toString(36).substring(7),
      });
    }
    setPL(playlist);
  });

  return (
    <div className="flex flex-col h-full divide-y divide-yellow-500  overflow-y-auto">
      <div
        id="headers"
        className={`grid grid-cols-12
        } text-secondary font-medium pr-5`}
      >
        <motion.button
          className="focus:outline-none col-span-4 text-left pl-5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (sortBy === 'name') {
              setSortAsc(!sortAsc);
            } else {
              setSortAsc(true);
            }
            setSortBy('name');
          }}
        >
          <div className="flex flex-row items-center">
            TITLE
            {sortBy === 'name' ? (
              sortAsc ? (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleUp />{' '}
                </div>
              ) : (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleDown />{' '}
                </div>
              )
            ) : null}
          </div>
        </motion.button>
      </div>
      <div id="rows" className=" overflow-y-auto h-full">
        {data
          .sort(function (a: Playlist, b: Playlist) {
            if (sortBy === '') {
              return true;
            }
            // eslint-disable-next-line @typescript-eslint/dot-notation
            const A = a[sortBy];
            // eslint-disable-next-line @typescript-eslint/dot-notation
            const B = b[sortBy];
            if (sortAsc) {
              if (A < B) {
                return -1;
              }
              if (A > B) {
                return 1;
              }
            } else {
              if (A > B) {
                return -1;
              }
              if (A < B) {
                return 1;
              }
            }

            return 0;
          })
          .map((playlist, i) => (
            <PlaylistRow
              playlist={playlist}
              key={playlist.name}
              i={i}
              handleSelect={() => {
                handleSelected(playlist);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default PlaylistTable;
