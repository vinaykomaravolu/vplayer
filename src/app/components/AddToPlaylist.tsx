import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { Playlist, Song } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';
import { CreatePlayListCard, PlayListCard } from './PlayListCard';
import MusicTable from './MusicTable';
import PlaylistTable from './PlaylistTable';

const styles: any = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#242C37',
    borderColor: '#242C37',
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

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
  songsToAdd,
}: {
  modelIsOpen: boolean;
  setModelIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  songsToAdd: Song[];
}) {
  let subtitle: any;
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [selected, setSelected] = useState<Playlist[]>([]);

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
        style={styles}
        contentLabel="Add to playlist"
      >
        <div className="flex flex-col w-96 h-96">
          <div className="flex flex-row justify-between">
            <div className="text-secondary truncate text-2xl font-bold pb-4">
              Add to Playlist
            </div>
            <button
              type="button"
              className="text-secondary truncate text-lg font-bold "
              onClick={() => {
                setModelIsOpen(false);
              }}
            >
              {ExitIcon}
            </button>
          </div>
          <div className="overflow-y-auto w-full h-full">
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
