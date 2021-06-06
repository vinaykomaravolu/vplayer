import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { Playlist, Song } from '../../objects/Object';
import PlaylistTable from './PlaylistTable';
import { ThemeContext } from '../utilities/ThemeContext';
import ThemeCSS from '../utilities/ThemeCSS';

function styles(theme: string): any {
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: `${ThemeCSS(`${theme}-primary`)['3']}`,
      borderColor: `${ThemeCSS(`${theme}-primary`)['3']}`,
      position: 'absolute',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  };
}

const ExitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

function AddToPlaylist({
  modelIsOpen,
  setModelIsOpen,
  songsToAdd,
}: {
  modelIsOpen: boolean;
  setModelIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  songsToAdd: Song[];
}) {
  let subtitle: any;
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [selected, setSelected] = useState<Playlist[]>([]);
  const { theme, setTheme } = useContext(ThemeContext);

  function updatePlaylist() {
    return 0;
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle = '#000';
  }

  useEffect(() => {
    const PLs: Playlist[] = [];

    for (let i = 0; i < 100; i += 1) {
      PLs.push({
        songs: [],
        name:
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36) +
          Math.random().toString(36),
        image: '',
      });
    }
    setPlaylist(PLs);
  }, []);

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={modelIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setModelIsOpen(false);
        }}
        style={styles(theme)}
        contentLabel="Add to playlist"
      >
        <div className="flex flex-col w-96 h-96">
          <div className="flex flex-row justify-between">
            <div
              className={`text-${theme}-secondary-1 truncate text-2xl font-bold pb-4`}
            >
              Add to Playlist
            </div>
            <button
              type="button"
              className={`text-${theme}-secondary-1 hover:text-${theme}-secondary-hover truncate text-sm font-bold focus:outline-none`}
              onClick={() => {
                setModelIsOpen(false);
              }}
            >
              {ExitIcon}
            </button>
          </div>
          <div
            className={`overflow-y-auto w-full h-full scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
          >
            <PlaylistTable
              data={playlist}
              selected={selected}
              setSelected={setSelected}
            />{' '}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddToPlaylist;
