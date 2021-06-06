/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/all';
import { Song } from '../../objects/Object';
import SongDropdown from './SongDropdown';
import { ThemeContext } from '../utilities/ThemeContext';

function SongRow({
  song,
  i,
  handleSelect,
}: {
  song: Song;
  i: number;
  handleSelect: any;
}) {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`grid grid-cols-12
   text-white font-normal bg-${
     i % 2 === 0 ? `${theme}-primary-1` : `${theme}-primary-2`
   } h-14 hover:bg-${theme}-secondary-hover`}
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      id={`song-${i}`}
      onDoubleClick={(event) => {
        console.log(song);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div
        className={`col-span-4 flex items-center truncate mr-4 pl-5 text-${theme}-primary-text`}
      >
        <input
          type="checkbox"
          onClick={() => {
            handleSelect();
          }}
          className={`cursor-pointer rounded-md form-checkbox mr-2 h-7 w-7 text-${theme}-secondary-2 ${
            isHover ? `bg-${theme}-primary-3` : 'bg-transparent'
          } border-${theme}-secondary-1 rounded-sm`}
        />
        {song.name}
      </div>
      <div
        className={`col-span-3 flex items-center truncate mr-4 text-${theme}-primary-text`}
      >
        {song.album}
      </div>
      <div
        className={`col-span-2 items-center flex truncate mr-4 text-${theme}-primary-text`}
      >
        <div className="truncate ">{song.artists}</div>
      </div>

      <div
        className={`col-span-1 flex items-center truncate md:mr-4 sm:mr-0 mr-0 md:visible sm:visible invisible text-${theme}-primary-text`}
      >
        {song.publish_year}
      </div>
      <div
        className={`col-span-1 flex items-center truncate mr-4 text-${theme}-primary-text`}
      >
        {song.length}
      </div>
      <div
        className={`col-span-1 flex mr-4 justify-end text-${theme}-primary-text`}
      >
        {isHover ? <SongDropdown song={song} /> : null}
      </div>
    </motion.div>
  );
}

function MusicTable({
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
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSelected = (song: Song) => {
    const sel: Song[] = [...selected];
    let found = -1;
    for (let s = 0; s < sel.length; s += 1) {
      if (sel[s] === song) {
        found = s;
      }
    }
    if (found > -1) {
      sel.splice(found, 1);
    } else {
      sel.push(song);
    }
    setSelected(sel);
  };

  return (
    <div
      className={`flex flex-col h-full divide-y divide-${theme}-secondary-1 overflow-y-auto scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <div
        id="headers"
        className={`grid grid-cols-12
        } text-${theme}-secondary-text font-medium pr-5`}
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
        <motion.button
          className="focus:outline-none col-span-3 text-left"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (sortBy === 'album') {
              setSortAsc(!sortAsc);
            } else {
              setSortAsc(true);
            }
            setSortBy('album');
          }}
        >
          <div className="flex flex-row items-center">
            ALBUM
            {sortBy === 'album' ? (
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
        <motion.button
          className="focus:outline-none col-span-2 text-left"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (sortBy === 'artists') {
              setSortAsc(!sortAsc);
            } else {
              setSortAsc(true);
            }
            setSortBy('artists');
          }}
        >
          <div className="flex flex-row items-center">
            ARTISTS
            {sortBy === 'artists' ? (
              sortAsc ? (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleUp />
                </div>
              ) : (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleDown />
                </div>
              )
            ) : null}
          </div>
        </motion.button>

        <motion.button
          className="focus:outline-none col-span-1 text-left invisible sm:visible md:visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (sortBy === 'publish_year') {
              setSortAsc(!sortAsc);
            } else {
              setSortAsc(true);
            }
            setSortBy('publish_year');
          }}
        >
          <div className="flex flex-row items-center">
            DATE
            {sortBy === 'publish_year' ? (
              sortAsc ? (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleUp />
                </div>
              ) : (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleDown />
                </div>
              )
            ) : null}
          </div>
        </motion.button>
        <motion.button
          className="focus:outline-none col-span-1 text-right"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (sortBy === 'length') {
              setSortAsc(!sortAsc);
            } else {
              setSortAsc(true);
            }
            setSortBy('length');
          }}
        >
          <div className="flex flex-row items-center ">
            LENGTH
            {sortBy === 'length' ? (
              sortAsc ? (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleUp />
                </div>
              ) : (
                <div id="icon-sort" className="pr-1 pl-1">
                  <GoTriangleDown />
                </div>
              )
            ) : null}
          </div>
        </motion.button>
      </div>
      <div
        id="rows"
        className={`overflow-y-auto h-full scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
      >
        {data
          .sort(function (a: Song, b: Song) {
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
          .map((song, i) => (
            <SongRow
              song={song}
              key={song.name}
              i={i}
              handleSelect={() => {
                handleSelected(song);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default MusicTable;
