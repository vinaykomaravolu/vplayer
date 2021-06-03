import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { Playlist } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { CreatePlayListCard, PlayListCard } from './PlayListCard';
import MusicTable from './MusicTable';

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#242C37',
    borderColor: '#242C37',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const ExitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
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

function AddToPlaylist({
  modelIsOpen,
  setModelIsOpen,
}: {
  modelIsOpen: boolean;
  setModelIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let subtitle: any;
  let playlists: Playlist[];
  const [playlist, setPlaylist] = useState<Playlist>();

  function updatePlaylist() {
    return 0;
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle = '#000';
  }

  useEffect(() => {
    const Song = {
      songs: [
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 197,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
        {
          name: Math.random().toString(36).substring(7),
          artists: ['Takafumi Imamura', 'Takafumi Imamura'],
          length: 200,
          publish_year: 1998,
          path: ['A:\\Music\\Pulse'],
          album: Math.random().toString(36).substring(7),
        },
      ],
      name: Math.random().toString(36).substring(7),
      image: '',
    };
  });

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={modelIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setModelIsOpen(false);
        }}
        style={styles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="text-white truncate text-2xl font-bold pb-2">
              Edit Playlist
            </div>
            <button
              type="button"
              className="text-white truncate text-lg font-bold "
              onClick={() => {
                setModelIsOpen(false);
              }}
            >
              {ExitIcon}
            </button>
          </div>
          <div className="flex-shrink-0 relative focus:outline-none ">
            <div className="h-100 w-100 bg-black">
              <div className="flex flex-row flex-wrap ">empty</div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              type="button"
              className="text-primary bg-secondary rounded-full text-xl pl-2 pr-2 pt-1 pb-1 font-bold focus:outline-none"
              onClick={() => {
                updatePlaylist();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddToPlaylist;
