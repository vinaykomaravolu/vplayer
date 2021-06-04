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
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <motion.div
      className={`cursor-pointer
   text-white font-normal ${
     isSelected ? 'bg-secondary2' : i % 2 === 0 ? 'bg-primary' : 'bg-primary2'
   } h-14 hover:bg-secondary2 w-full`}
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      id={`playlist-${i}`}
      onClick={() => {
        setIsSelected(!isSelected);
        // Add to playlist in backend
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="flex items-center  w-full h-full">
        <div className="truncate pl-5 pr-5"> {playlist.name}</div>
      </div>
    </motion.div>
  );
}

function PlaylistTable({
  data,
  selected,
  setSelected,
}: {
  data: Playlist[];
  selected: Playlist[];
  setSelected: React.Dispatch<React.SetStateAction<Playlist[]>>;
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
    const PLs: Playlist[] = [
      {
        songs: [],
        name: Math.random().toString(36).substring(7),
        image: '',
      },
      {
        songs: [],
        name: Math.random().toString(36).substring(7),
        image: '',
      },
      {
        songs: [],
        name: Math.random().toString(36).substring(7),
        image: '',
      },
      {
        songs: [],
        name: Math.random().toString(36).substring(7),
        image: '',
      },
    ];
    setPL(PLs);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <div id="rows" className=" overflow-y-auto h-full w-full rounded-md">
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
          .map((pl, i) => (
            <PlaylistRow
              playlist={pl}
              key={pl.name}
              i={i}
              handleSelect={() => {
                handleSelected(pl);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default PlaylistTable;
