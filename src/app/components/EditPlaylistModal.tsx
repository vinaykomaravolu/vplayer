import React from 'react';
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
  let subtitle: any;
  const playlistName = '';
  const playlistImage = '';

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
        <div
          // eslint-disable-next-line no-return-assign
          ref={(_subtitle) => (subtitle = _subtitle)}
          className="flex flex-row w-full h-full flex-nowrap items-center"
        >
          <button type="button" className="flex-shrink-0 relative">
            <img
              src={playlist.image ? playlist.image : DefaultImage}
              alt={DefaultImage}
              className="rounded-md w-20 h-20 sm:w-40 sm:h-40 xl:w-52 xl:h-52 object-cover"
            />
          </button>
          <div className="flex flex-col flex-nowrap justify-end ">
            <div className="text-white truncate text-lg font-bold ">
              Playlist
            </div>
            <div className="mb-3 pt-0">
              <input
                value={playlist.name}
                type="text"
                className="z-0 rounded-full bg-primary2 text-white h-10 pl-7 pr-7 w-64"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditPlaylistModal;
