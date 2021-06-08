/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Playlist } from '../../objects/Object';
import { ThemeContext } from '../utilities/ThemeContext';

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
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`cursor-pointer
   text-${theme}-primary-text font-normal ${
        isSelected
          ? `bg-${theme}-secondary-2`
          : i % 2 === 0
          ? `bg-${theme}-primary-1`
          : `bg-${theme}-primary-2`
      } h-14 hover:bg-${theme}-secondary-hover w-full`}
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      id={`playlist-${i}`}
      onClick={() => {
        setIsSelected(!isSelected);
        // Add to playlist in backend
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
  const [PL, setPL] = useState<Playlist[]>();
  const { theme, setTheme } = useContext(ThemeContext);

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
      <div
        id="rows"
        className={`overflow-y-auto h-full w-full rounded-md scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        {data.map((pl, i) => (
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
