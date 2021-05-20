import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Playlist } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';

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

const EditIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);

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

Modal.setAppElement('#root');

function EditPlaylistModal({
  playlist,
  modalIsOpen,
  setModalIsOpen,
}: {
  playlist: Playlist;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isImageHover, setIsImageHover] = useState<boolean>(false);
  const [playlistName, setPlaylistName] = useState<string>('');
  const [playlistImage, setPlaylistImage] = useState<string | undefined>(
    undefined
  );

  let subtitle: any;

  useEffect(() => {
    setPlaylistImage(playlist.image);
    setPlaylistName(playlist.name);
  }, []);

  function updatePlaylist() {
    if (playlistName !== playlist.name) {
      console.log(`Updated name ${playlist.name} to ${playlistName}`);
    }

    if (playlistImage !== playlist.image) {
      console.log(`Updated image ${playlist.image} to ${playlistImage}`);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }
  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setModalIsOpen(false);
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
                setModalIsOpen(false);
              }}
            >
              {ExitIcon}
            </button>
          </div>
          <div
            // eslint-disable-next-line no-return-assign
            ref={(_subtitle) => (subtitle = _subtitle)}
            className="flex flex-row w-full h-full flex-nowrap items-center"
          >
            <div
              className="flex-shrink-0 relative focus:outline-none "
              onMouseEnter={() => setIsImageHover(true)}
              onMouseLeave={() => setIsImageHover(false)}
            >
              <img
                src={playlistImage || DefaultImage}
                alt={DefaultImage}
                className=" rounded-md w-20 h-20 sm:w-40 sm:h-40 xl:w-52 xl:h-52 object-cover"
              />
              {isImageHover ? (
                <div className="flex absolute bg-white top-0 bottom-0 left-0 right-0 opacity-10 rounded-md">
                  <input
                    type="file"
                    className="w-full h-full"
                    onChange={(event) => {
                      if (event.target.files) {
                        setPlaylistImage(event.target.files[0].path);
                      }
                    }}
                  />
                  <div className="m-auto text-black">{EditIcon}</div>
                </div>
              ) : null}
            </div>
            <div className="flex flex-col flex-nowrap justify-end ">
              <div className="mb-3 pt-0">
                <div className="text-white truncate text-lg font-bold pb-2 pl-4 pr-4">
                  Name:
                </div>
                <input
                  defaultValue={playlistName}
                  type="text"
                  className="focus:outline-none z-0 rounded-md bg-primary2 text-white h-10 pl-2 pr-2 mr-4 ml-4 w-64"
                  onChange={(event) => {
                    setPlaylistName(event.target.value);
                  }}
                />
              </div>
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

export default EditPlaylistModal;
