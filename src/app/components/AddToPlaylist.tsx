import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { Playlist, Song } from '../../objects/Object';
import PlaylistTable from './PlaylistTable';
import { ThemeContext } from '../utilities/ThemeContext';
import ThemeCSS from '../utilities/ThemeCSS';
import { AddToPlaylistExitIcon } from './Icons';

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
              {AddToPlaylistExitIcon}
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
