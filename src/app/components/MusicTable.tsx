/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/all';
import { Song } from '../../objects/Object';

const MoreIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

function MusicTable({ data }: { data: Song[] }) {
  const [sortBy, setSortBy] = useState<string>('');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

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
          key="title"
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
          key="title"
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
          key="title"
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
          className="focus:outline-none col-span-1 text-left sm:invisible md:visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key="title"
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
          className="focus:outline-none col-span-1 text-right"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key="title"
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
          .map((song, i) => {
            return (
              <motion.div
                className={`grid grid-cols-12
              } text-white font-normal bg-${
                i % 2 === 0 ? 'primary' : 'primary2'
              } h-14 hover:bg-secondary2`}
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                id={`song-${i}`}
                onDoubleClick={(event) => {
                  console.log(song);
                }}
              >
                <div className="col-span-4 flex items-center truncate mr-4 pl-5">
                  {song.name}
                </div>
                <div className="col-span-3 flex items-center truncate mr-4">
                  {song.album}
                </div>
                <div className="col-span-2 flex items-center truncate mr-4">
                  {song.artists}
                </div>

                <div className="col-span-1 flex items-center truncate md:mr-4 sm:mr-0 sm:invisible md:visible ">
                  {song.publish_year}
                </div>
                <div className="col-span-1 flex items-center truncate mr-4">
                  {song.length}
                </div>
                <div className="col-span-1 flex mr-4 justify-end">
                  <motion.button
                    type="button"
                    whileHover={{ scaleX: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="focus:outline-none"
                    onClick={(event) => {
                      event.stopPropagation();
                      console.log('click');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default MusicTable;
